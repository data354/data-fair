// Logic shared across all of most search and aggregation routes

const config = require('config')
const createError = require('http-errors')
const flatten = require('flat')
const queryParser = require('lucene-query-parser')
const sanitizeHtml = require('sanitize-html')
const truncateMiddle = require('truncate-middle')
const thumbor = require('../thumbor')
const tiles = require('../tiles')
const geo = require('../geo')
const { geojsonToWKT } = require('@terraformer/wkt')
const permissions = require('../permissions')

// From a property in data-fair schema to the property in an elasticsearch mapping
exports.esProperty = prop => {
  const capabilities = prop['x-capabilities'] || {}
  // Add inner text field to almost everybody so that even dates, numbers, etc can be matched textually as well as exactly
  const innerFields = {}
  if (capabilities.textStandard !== false) {
    // more "raw" analysis good to boost more exact matches and for wildcard queries
    innerFields.text_standard = { type: 'text', analyzer: 'standard' }
  }
  let esProp = {}
  const index = capabilities.index !== false
  const values = capabilities.values !== false
  if (prop.type === 'object') esProp = { type: 'object', enabled: index }
  if (prop.type === 'integer') esProp = { type: 'long', fields: innerFields, index, doc_values: values }
  if (prop.type === 'number') esProp = { type: 'double', fields: innerFields, index, doc_values: values }
  if (prop.type === 'boolean') esProp = { type: 'boolean', index, doc_values: values }
  if (prop.type === 'string' && prop.format === 'date-time') esProp = { type: 'date', fields: innerFields, index, doc_values: values }
  if (prop.type === 'string' && prop.format === 'date') esProp = { type: 'date', fields: innerFields, index, doc_values: values }
  // uri-reference and full text fields are managed in the same way from now on, because we want to be able to aggregate on small full text fields
  if (prop.type === 'string' && (prop.format === 'uri-reference' || !prop.format)) {
    const textFieldData = capabilities.textAgg !== false
    if (capabilities.textStandard !== false) {
      innerFields.text_standard.fielddata = textFieldData
    }
    if (capabilities.text !== false) {
      // language based analysis for better recall with stemming, etc
      innerFields.text = { type: 'text', analyzer: config.elasticsearch.defaultAnalyzer, fielddata: textFieldData }
    }
    if (capabilities.insensitive !== false) {
      // handle case and diacritics for better sorting
      innerFields.keyword_insensitive = { type: 'keyword', ignore_above: 200, normalizer: 'insensitive_normalizer' }
    }
    esProp = { type: 'keyword', ignore_above: 200, fields: innerFields, index, doc_values: values }
  }
  // Do not index geometry, it will be copied and simplified in _geoshape
  if (prop['x-refersTo'] === 'https://purl.org/geojson/vocab#geometry') {
    // Geometry can be passed serialized in a string, or as an object
    if (prop.type === 'string') esProp.index = false
    else esProp.enabled = false
  }
  // Hardcoded calculated properties
  if (prop.key === '_geopoint') esProp = { type: 'geo_point' }
  if (prop.key === '_geoshape') esProp = { type: 'geo_shape' }
  if (prop.key === '_geocorners') esProp = { type: 'geo_point' }
  if (prop.key === '_i') esProp = { type: 'long' }
  if (prop.key === '_rand') esProp = { type: 'integer' }
  if (prop.key === '_id') return null
  return esProp
}

exports.aliasName = dataset => {
  if (dataset.isVirtual) return dataset.descendants.map(id => `${config.indicesPrefix}-${id}`).join(',')
  if (dataset.draftReason) return `${config.indicesPrefix}_draft-${dataset.id}`
  return `${config.indicesPrefix}-${dataset.id}`
}

exports.parseSort = (sortStr, fields, schema) => {
  if (!sortStr) return []
  const result = []
  const keys = sortStr.split(',')
  keys.forEach(s => {
    let key, order
    if (s.indexOf('-') === 0) {
      key = s.slice(1)
      order = 'desc'
    } else {
      key = s
      order = 'asc'
    }
    if (!fields.concat(['_key', '_count', '_time', 'metric', '_i', '_rand', '_score']).includes(key)) {
      throw createError(400, `Impossible de trier sur le champ ${key}, il n'existe pas dans le jeu de données.`)
    }
    const field = schema.find(f => f.key === key)
    const capabilities = (field && field['x-capabilities']) || {}
    if (capabilities.values === false && capabilities.insensitive === false) {
      throw createError(400, `Impossible de trier sur le champ ${key}, la fonctionnalité a été désactivée.`)
    }
    if (capabilities.insensitive !== false && field && field.type === 'string' && (field.format === 'uri-reference' || !field.format)) {
      // ignore_unmapped is necessary to maintain compatibility with older indices
      result.push({ [key + '.keyword_insensitive']: { order, unmapped_type: 'long' } })
    }
    if (capabilities.values !== false) {
      result.push({ [key]: { order } })
    }
  })

  return result
}

exports.parseOrder = (sortStr, fields, schema) => {
  const sort = exports.parseSort(sortStr, fields, schema)
  return sort.map(s => {
    const key = Object.keys(s)[0]
    return { [key]: s[key].order }
  })
}

// Check that a query_string query (lucene syntax)
// does not try to use fields outside the current schema
function checkQuery (query, schema, esFields) {
  if (!esFields) {
    esFields = ['<implicit>']
    schema.forEach(prop => {
      const capabilities = prop['x-capabilities'] || []
      if (capabilities.index !== false) esFields.push(prop.key)
      if (capabilities.text !== false) esFields.push(prop.key + '.text')
      if (capabilities.textStandard !== false) esFields.push(prop.key + '.text_standard')
      if (capabilities.insensitive !== false) esFields.push(prop.key + '.keyword_insensitive')
    })
  }
  query.field = query.field && query.field.replace(/\\/g, '')
  if (query.field === '_exists_') {
    const field = query.term.replace(/\\/g, '')
    if (!esFields.includes(field)) {
      throw createError(400, `Impossible de faire une recherche sur le champ ${field}, il n'existe pas dans le jeu de données.`)
    }
  } else if (query.field && !esFields.includes(query.field)) {
    if (!schema.find(p => p.key === query.field)) {
      throw createError(400, `Impossible de faire une recherche sur le champ ${query.field}, il n'existe pas dans le jeu de données.`)
    }
    throw createError(400, `Impossible de faire une recherche sur le champ ${query.field}, la fonctionnalité a été désactivée.`)
  }
  if (query.left) checkQuery(query.left, schema, esFields)
  if (query.right) checkQuery(query.right, schema, esFields)
}

exports.prepareQuery = (dataset, query) => {
  const esQuery = {}

  // Valid "total" value
  // TODO: make it optional for perf on large queries ?
  esQuery.track_total_hits = true

  // Pagination
  esQuery.size = query.size ? Number(query.size) : 20
  if (esQuery.size > 10000) throw createError(400, '"size" cannot be more than 10000')
  esQuery.from = (query.page ? Number(query.page) - 1 : 0) * esQuery.size

  // Select fields to return
  const fields = dataset.schema.map(f => f.key)
  // do not include by default heavy calculated fields used for indexing geo data
  const defaultFields = fields.filter(key => key !== '_geoshape' && key !== '_geocorners')
  esQuery._source = (query.select && query.select !== '*') ? query.select.split(',') : defaultFields
  const unknownField = esQuery._source.find(s => !fields.includes(s))
  if (unknownField) throw createError(400, `Impossible de sélectionner le champ ${unknownField}, il n'existe pas dans le jeu de données.`)

  // Others are included depending on the context
  if (query.thumbnail) {
    const imageField = dataset.schema.find(f => f['x-refersTo'] === 'http://schema.org/image')
    if (imageField && query.select && !esQuery._source.includes(imageField.key)) {
      esQuery._source.push(imageField.key)
    }
  }

  // Sort by list of fields (prefixed by - for descending sort)
  esQuery.sort = query.sort ? exports.parseSort(query.sort, fields, dataset.schema) : []
  // implicitly sort by score after other criteria
  if (!esQuery.sort.find(s => !!s._score) && query.q) esQuery.sort.push('_score')
  // every other things equal, sort by original line order
  if (fields.includes('_updatedAt')) {
    if (!esQuery.sort.find(s => !!s._updatedAt)) esQuery.sort.push({ _updatedAt: 'desc' })
  } else {
    if (!esQuery.sort.find(s => !!s._i)) esQuery.sort.push('_i')
  }

  // Simple highlight management
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-highlighting.html
  if (query.highlight) {
    esQuery.highlight = { fields: {}, no_match_size: 300, fragment_size: 100, pre_tags: ['<em class="highlighted">'], post_tags: ['</em>'] }
    query.highlight.split(',').forEach(key => {
      if (!fields.includes(key)) throw createError(400, `Impossible de demander un "highlight" sur le champ ${key}, il n'existe pas dans le jeu de données.`)
      esQuery.highlight.fields[key + '.text'] = {}
      esQuery.highlight.fields[key + '.text_standard'] = {}
    })
  }

  const filter = []
  const must = []
  const should = []

  // Enforced static filters from virtual datasets
  if (dataset.virtual && dataset.virtual.filters) {
    dataset.virtual.filters.filter(f => f.values && f.values.length).forEach(f => {
      if (f.values.length === 1) filter.push({ term: { [f.key]: f.values[0] } })
      else filter.push({ terms: { [f.key]: f.values } })
    })
  }

  // query and simple query string for a lot of functionalities in a simple exposition (too open ??)
  // const multiFields = [...fields].concat(dataset.schema.filter(f => f.type === 'string').map(f => f.key + '.text'))
  const searchFields = []
  dataset.schema.forEach(f => {
    if (f.key === '_id') {
      searchFields.push('_id')
      return
    }

    const esProp = exports.esProperty(f)
    if (esProp.index !== false && esProp.enabled !== false && esProp.type === 'keyword') searchFields.push(f.key)
    if (esProp.fields && (esProp.fields.text || esProp.fields.text_standard)) {
      // automatic boost of some special properties well suited for full-text search
      let suffix = ''
      if (f['x-refersTo'] === 'http://www.w3.org/2000/01/rdf-schema#label') suffix = '^3'
      if (f['x-refersTo'] === 'http://schema.org/description') suffix = '^2'
      if (f['x-refersTo'] === 'https://schema.org/DefinedTermSet') suffix = '^2'

      if (esProp.fields.text) searchFields.push(f.key + '.text' + suffix)
      if (esProp.fields.text_standard) searchFields.push(f.key + '.text_standard' + suffix)
    }
  })
  if (query.qs) {
    // lucene-query-parser as a bug where it doesn't accept escaped quotes inside quotes
    checkQuery(queryParser.parse(query.qs.replace('\\"', '')), dataset.schema)
    must.push({ query_string: { query: query.qs, fields: searchFields } })
  }
  if (query.q) {
    const q = query.q.trim()
    const qSearchFields = searchFields.filter(f => f !== '_id')
    const qStandardFields = qSearchFields.filter(f => f.includes('.text_standard'))

    if (query.q_mode === 'complete') {
      // "complete" mode, we try to accomodate for most cases and give the most intuitive results
      // to a search query where the user might be using a autocomplete type control

      // if the user didn't define wildcards himself, we use wildcard to create a "startsWith" functionality
      // this is performed on the innerfield that uses standard analysis, as language stemming doesn't work well in this case
      if (!q.includes('*') && !q.includes('?')) {
        should.push({ simple_query_string: { query: `${q}*`, fields: qStandardFields } })
      }
      // if the user submitted a multi word query and didn't use quotes
      // we add some quotes to boost results with sequence of words
      if (q.includes(' ') && !q.includes('"')) {
        should.push({ simple_query_string: { query: `"${q}"`, fields: qSearchFields } })
      }
      should.push({ simple_query_string: { query: q, fields: qSearchFields } })
    } else {
      // default "simple" mode uses ES simple query string directly
      // only tuning is that we match both on stemmed and raw inner fields to boost exact matches
      should.push({ simple_query_string: { query: q, fields: qSearchFields } })
      should.push({ simple_query_string: { query: q, fields: qStandardFields } })
    }
  }
  Object.keys(query)
    .filter(k => k.endsWith('_in'))
    .map(key => ({
      key: key.slice(0, key.length - 3),
      values: query[key].split(',')
    }))
    .forEach(inFilter => {
      const prop = dataset.schema.find(p => p.key === inFilter.key)
      if (!prop || (prop['x-capabilities'] && prop['x-capabilities'].index === false)) {
        throw createError(400, `Impossible de faire une recherche sur le champ ${inFilter.key}, il n'existe pas dans le jeu de données.`)
      }
      filter.push({
        terms: {
          [inFilter.key]: inFilter.values
        }
      })
    })

  // bounding box filter to restrict results on geo zone: left,bottom,right,top
  const geoShapeProp = dataset.schema.find(p => p.key === '_geoshape')
  const geoShape = geoShapeProp && (!geoShapeProp['x-capabilities'] || geoShapeProp['x-capabilities'].geoShape !== false)
  const geoCornersProp = dataset.schema.find(p => p.key === '_geocorners')
  const geoCorners = geoCornersProp && (!geoCornersProp['x-capabilities'] || geoCornersProp['x-capabilities'].geoCorners !== false)
  if (query.bbox || query.xyz) {
    if (!dataset.bbox) throw createError(400, '"bbox" filter cannot be used on this dataset. It is not geolocalized.')
    const bbox = exports.getQueryBBOX(query, dataset)
    const esBoundingBox = { left: bbox[0], bottom: bbox[1], right: bbox[2], top: bbox[3] }
    // use geo_shape intersection instead geo_bounding_box in order to get even
    // partial geometries in tiles
    filter.push({
      geo_shape: {
        [geoShape ? '_geoshape' : (geoCorners ? '_geocorners' : '_geopoint')]: {
          relation: 'intersects',
          shape: {
            type: 'envelope',
            coordinates: [[esBoundingBox.left, esBoundingBox.top], [esBoundingBox.right, esBoundingBox.bottom]]
          }
        }
      }
    })
  }

  if (query.geo_distance) {
    if (!dataset.bbox) throw createError(400, '"geo_distance" filter cannot be used on this dataset. It is not geolocalized.')
    let [lon, lat, distance] = query.geo_distance.split(',')
    if (!distance || distance === '0') distance = '0m'
    lon = Number(lon)
    lat = Number(lat)
    if (geoShape && (distance === '0m' || distance === '0km')) {
      filter.push({
        geo_shape: {
          _geoshape: {
            relation: 'contains',
            shape: {
              type: 'point',
              coordinates: [lon, lat]
            }
          }
        }
      })
    } else {
      // TODO: use _geoshape after upgrading ES

      // distance of 0 is not accepted
      if (distance === '0m' || distance === '0km') distance = '1m'

      filter.push({
        geo_distance: {
          distance,
          _geopoint: { lat, lon }
        }
      })
    }
  }

  const minimumShouldMatch = should.length ? 1 : 0
  esQuery.query = { bool: { filter, must, should, minimum_should_match: minimumShouldMatch } }

  return esQuery
}

exports.getQueryBBOX = (query) => {
  let bbox
  if (query.bbox) {
    bbox = query.bbox.split(',').map(Number)
  } else if (query.xyz) {
    bbox = tiles.xyz2bbox(...query.xyz.split(',').map(Number))
  }
  if (bbox) {
    bbox[0] = geo.fixLon(bbox[0])
    bbox[2] = geo.fixLon(bbox[2])
  }
  return bbox
}

exports.prepareResultItem = (hit, dataset, query) => {
  // re-join splitted items
  dataset.schema.filter(field => field.separator && hit._source[field.key] && Array.isArray(hit._source[field.key])).forEach(field => {
    hit._source[field.key] = hit._source[field.key].join(field.separator)
  })

  const res = flatten(hit._source, { safe: true })
  res._score = hit._score
  if (dataset.schema.find(f => f.key === '_id')) {
    if (!query.select || query.select === '*' || query.select.split(',').includes('_id')) {
      res._id = hit._id
    }
  }
  if (query.highlight) {
    // return hightlight results and remove .text suffix of fields
    res._highlight = query.highlight.split(',')
      .reduce((a, key) => {
        // is it possible to merge these 2 instead of chosing one ?
        const textHighlight = (hit.highlight && hit.highlight[key + '.text']) || []
        const textStandardHighlight = (hit.highlight && hit.highlight[key + '.text_standard']) || []
        if (textStandardHighlight && textStandardHighlight.length && (textHighlight.length === 0 || !textHighlight[0].includes('<em class="highlighted">'))) {
          a[key] = textStandardHighlight
        } else {
          a[key] = textHighlight
        }
        return a
      }, {})
  }

  if (query.draft && res._attachment_url) res._attachment_url += '?draft=true'

  const imageField = dataset.schema.find(f => f['x-refersTo'] === 'http://schema.org/image')
  if (query.thumbnail) {
    if (!imageField) throw createError(400, 'Thumbnail management is only available if the "image" concept is associated to a field of the dataset.')
    if (res[imageField.key]) {
      const ignoreThumbor = dataset.attachmentsAsImage && !permissions.isPublic('datasets', dataset)
      res._thumbnail = ignoreThumbor ? res[imageField.key] : thumbor.thumbnail(res[imageField.key], query.thumbnail, dataset.thumbnails)
    }
  }
  // Description can be used as html content in some applications, we must sanitize it for XSS prevention
  const descriptionField = dataset.schema.find(f => f['x-refersTo'] === 'http://schema.org/description')
  if (descriptionField && res[descriptionField.key]) {
    res[descriptionField.key] = sanitizeHtml(res[descriptionField.key])
  }

  // Truncate string results for faster previews
  if (query.truncate) {
    const linkField = dataset.schema.find(f => f['x-refersTo'] === 'https://schema.org/WebPage')
    const emailField = dataset.schema.find(f => f['x-refersTo'] === 'https://www.w3.org/2006/vcard/ns#email')
    const docField = dataset.schema.find(f => f['x-refersTo'] === 'http://schema.org/DigitalDocument')

    const truncate = Number(query.truncate)
    for (const key in res) {
      if (typeof res[key] !== 'string') continue
      if (descriptionField && descriptionField.key === key) continue
      if (imageField && imageField.key === key) continue
      if (linkField && linkField.key === key) continue
      if (emailField && emailField.key === key) continue
      if (docField && docField.key === key) continue
      if (key === '_thumbnail') continue
      if (key === '_highlight') continue
      if (key === '_id') continue
      if (key === '_geopoint') continue
      if (key === '_geoshape') continue
      if (key === '_attachment_url') continue
      const field = dataset.schema.find(f => f.key === key)
      if (field && field.separator) continue
      res[key] = truncateMiddle(res[key], truncate, 0, '...')
    }
  }

  if (query.wkt === 'true') {
    const geometryField = dataset.schema.find(f => f['x-refersTo'] === 'https://purl.org/geojson/vocab#geometry')
    if (geometryField && res[geometryField.key]) {
      const geometry = typeof res[geometryField.key] === 'string' ? JSON.parse(res[geometryField.key]) : res[geometryField.key]
      res[geometryField.key] = geojsonToWKT(geometry)
    }
    if (res._geoshape) res._geoshape = geojsonToWKT(res._geoshape)
  }

  return res
}

// try to produce a somewhat readable error message from a structured error from elasticsearch
exports.errorMessage = (err) => {
  const errBody = (err.body && err.body.error) || (err.meta && err.meta.body && err.meta.body.error) || err.error
  if (!errBody) return err.message || err
  const parts = []
  if (errBody.reason) {
    parts.push(errBody.reason)
  }
  if (errBody.root_cause && errBody.root_cause.reason && !parts.includes(errBody.root_cause.reason)) {
    parts.push(errBody.root_cause.reason)
  }
  if (errBody.root_cause && errBody.root_cause[0] && errBody.root_cause[0].reason && !parts.includes(errBody.root_cause[0].reason)) {
    parts.push(errBody.root_cause[0].reason)
  }
  if (errBody.failed_shards && errBody.failed_shards[0] && errBody.failed_shards[0].reason) {
    const shardReason = errBody.failed_shards[0].reason
    if (shardReason.caused_by && shardReason.caused_by.reason && !parts.includes(shardReason.caused_by.reason)) {
      parts.push(shardReason.caused_by.reason)
    } else {
      const reason = shardReason.reason || shardReason
      if (!parts.includes(reason)) parts.push(reason)
    }
  }
  return parts.join(' - ')
}

// cf https://github.com/joeybaker/lucene-escape-query/blob/master/index.js
exports.escapeFilter = (val) => {
  if (typeof val !== 'string') return val
  return [].map.call(val, (char) => {
    if (char === '+' ||
      char === '-' ||
      char === '&' ||
      char === '|' ||
      char === '!' ||
      char === '(' ||
      char === ')' ||
      char === '{' ||
      char === '}' ||
      char === '[' ||
      char === ']' ||
      char === '^' ||
      char === '"' ||
      char === '~' ||
      char === '*' ||
      char === '?' ||
      char === ':' ||
      char === '\\' ||
      char === '/'
    ) return '\\' + char
    else return char
  }).join('')
}
