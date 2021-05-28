const assert = require('assert').strict
const fs = require('fs')
const nock = require('nock')
const FormData = require('form-data')

const testUtils = require('./resources/test-utils')

const config = require('config')

const workers = require('../server/workers')
const esUtils = require('../server/utils/es')

// Prepare mock for outgoing HTTP requests
nock('http://test-catalog.com').persist()
  .post('/api/1/datasets/').reply(201, { slug: 'my-dataset', page: 'http://test-catalog.com/datasets/my-dataset' })

describe('datasets in draft mode', () => {
  it('create new dataset in draft mode', async () => {
    // Send dataset
    const datasetFd = fs.readFileSync('./test/resources/datasets/dataset1.csv')
    const form = new FormData()
    form.append('file', datasetFd, 'dataset.csv')
    const ax = global.ax.dmeadus
    let res = await ax.post('/api/v1/datasets', form, { headers: testUtils.formHeaders(form), params: { draft: true } })
    assert.equal(res.status, 201)

    // Dataset received and parsed
    let dataset = await workers.hook('csvAnalyzer')
    assert.equal(dataset.status, 'draft')
    assert.equal(dataset.file, undefined)
    assert.equal(dataset.draft.draftReason.key, 'file-new')
    assert.ok(dataset.draft.originalFile)
    assert.ok(dataset.draft.file)
    assert.equal(dataset.draft.status, 'analyzed')
    assert.equal(dataset.schema.length, 0)
    assert.equal(dataset.draft.schema.length, 4)

    // ES indexation and finalization
    dataset = await workers.hook('finalizer')
    assert.equal(dataset.status, 'draft')
    assert.equal(dataset.draft.status, 'finalized')
    assert.equal(dataset.draft.count, 2)

    // querying with ?draft=true automatically merges the draft state into the main state
    dataset = (await ax.get(`/api/v1/datasets/${dataset.id}`, { params: { draft: true } })).data
    assert.equal(dataset.status, 'finalized')
    assert.equal(dataset.draft, undefined)
    assert.equal(dataset.draftReason.key, 'file-new')
    const esAlias = esUtils.aliasName(dataset)
    assert.ok(esAlias.startsWith('dataset-test_draft-'))

    // Update schema to specify geo point
    const locProp = dataset.schema.find(p => p.key === 'loc')
    locProp['x-refersTo'] = 'http://www.w3.org/2003/01/geo/wgs84_pos#lat_long'
    await ax.patch('/api/v1/datasets/' + dataset.id, { schema: dataset.schema }, { params: { draft: true } })

    // Second ES indexation
    dataset = await workers.hook('finalizer')
    assert.equal(dataset.status, 'draft')
    assert.equal(dataset.draft.status, 'finalized')
    assert.ok(dataset.draft.bbox)

    // reuploading in draft mode is not permitted
    const datasetFd2 = fs.readFileSync('./test/resources/datasets/bad-format.csv')
    const form2 = new FormData()
    form2.append('file', datasetFd2, 'dataset.csv')
    try {
      await ax.post('/api/v1/datasets/' + dataset.id, form2, { headers: testUtils.formHeaders(form2) })
      assert.fail()
    } catch (err) {
      assert.equal(err.status, 409)
    }

    // querying for lines is not yet possible
    try {
      await ax.get(`/api/v1/datasets/${dataset.id}/lines`)
      assert.fail()
    } catch (err) {
      assert.equal(err.status, 409)
    }
    // except in draft mode
    res = await ax.get(`/api/v1/datasets/${dataset.id}/lines`, { params: { draft: true } })
    assert.equal(res.data.total, 2)

    // validate the draft
    await ax.post(`/api/v1/datasets/${dataset.id}/draft`)
    dataset = await workers.hook('finalizer')
    assert.equal(dataset.status, 'finalized')
    assert.equal(dataset.count, 2)
    assert.ok(dataset.bbox)

    res = await ax.get(`/api/v1/datasets/${dataset.id}/lines`, { params: { draft: true } })
    assert.equal(res.data.total, 2)

    // the journal kept traces of all changes (draft and not)
    const journal = (await ax.get(`/api/v1/datasets/${dataset.id}/journal`)).data
    journal.reverse()
    assert.equal(journal[0].type, 'dataset-created')
    assert.equal(journal[1].type, 'analyze-start')
    assert.equal(journal[1].draft, true)
    assert.equal(journal[2].type, 'analyze-end')
    assert.equal(journal[2].draft, true)
    assert.equal(journal[3].type, 'index-start')
    assert.equal(journal[3].draft, true)
    assert.equal(journal[4].type, 'index-end')
    assert.equal(journal[4].draft, true)
    assert.equal(journal[5].type, 'finalize-start')
    assert.equal(journal[5].draft, true)
    assert.equal(journal[6].type, 'finalize-end')
    assert.equal(journal[6].draft, true)
    assert.equal(journal[7].type, 'index-start')
    assert.equal(journal[7].draft, true)
    assert.equal(journal[8].type, 'index-end')
    assert.equal(journal[8].draft, true)
    assert.equal(journal[9].type, 'finalize-start')
    assert.equal(journal[9].draft, true)
    assert.equal(journal[10].type, 'finalize-end')
    assert.equal(journal[10].draft, true)
    assert.equal(journal[11].type, 'draft-validated')
    assert.equal(journal[12].type, 'index-start')
    assert.equal(journal[12].draft, undefined)
    assert.equal(journal[13].type, 'index-end')
    assert.equal(journal[13].draft, undefined)
    assert.equal(journal[14].type, 'finalize-start')
    assert.equal(journal[14].draft, undefined)
    assert.equal(journal[15].type, 'finalize-end')
    assert.equal(journal[15].draft, undefined)
  })

  // should only extend and index a sample
  // should store updates in draft property
  // should not send publications
  // should be counted in storage (full file)
})
