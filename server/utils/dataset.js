const fs = require('fs')
const path = require('path')
const { Transform } = require('stream')
const iconv = require('iconv-lite')
const config = require('config')
const csv = require('csv-parser')
const fieldsSniffer = require('./fields-sniffer')

exports.fileName = (dataset) => {
  return path.join(config.dataDir, dataset.owner.type, dataset.owner.id, dataset.id + '.' + dataset.file.name.split('.').pop())
}

exports.readStream = (dataset) => {
  return fs.createReadStream(exports.fileName(dataset))
    .pipe(iconv.decodeStream(dataset.file.encoding))
    // TODO: use mime-type to parse other formats
    // use result from csv-sniffer to configure parser
    .pipe(csv({
      separator: dataset.file.props.fieldsDelimiter,
      quote: dataset.file.props.escapeChar,
      newline: dataset.file.props.linesDelimiter
    }))
    // Fix the objects based on fields sniffing
    .pipe(new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        const line = {}
        Object.keys(dataset.schema).forEach(key => {
          const prop = dataset.schema[key]
          const value = fieldsSniffer.format(chunk[prop['x-originalName']], prop)
          if (value !== null) line[key] = value
        })
        callback(null, line)
      }
    }))
}
