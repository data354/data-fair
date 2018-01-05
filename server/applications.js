const express = require('express')
const auth = require('./auth')
const moment = require('moment')
const shortid = require('shortid')
const applicationAPIDocs = require('../contract/application-api-docs')

const ajv = require('ajv')()
const applicationSchema = require('../contract/application.json')
const validate = ajv.compile(applicationSchema)

const permissions = require('./utils/permissions')
const usersUtils = require('./utils/users')
const findUtils = require('./utils/find')

const router = module.exports = express.Router()

// Get the list of applications
router.get('', auth.optionalJwtMiddleware, async function(req, res, next) {
  const applications = req.app.get('db').collection('applications')
  if (!req.user) {
    // If we want to respond a 401, then we should change auth middleware
    return res.json({
      results: [],
      count: 0
    })
  }
  const query = findUtils.query(req.query, {})
  const sort = findUtils.sort(req.query.sort)
  const [skip, size] = findUtils.pagination(req.query)
  query.$or = permissions.filter(req.user)
  let mongoQueries = [
    size > 0 ? applications.find(query).limit(size).skip(skip).sort(sort).project({
      _id: 0,
      source: 0
    }).toArray() : Promise.resolve([]),
    applications.find(query).count()
  ]
  try {
    let [results, count] = await Promise.all(mongoQueries)
    res.json({results, count})
  } catch (err) {
    next(err)
  }
})

// Create an application configuration
router.post('', auth.jwtMiddleware, async(req, res, next) => {
  // This id is temporary, we should have an human understandable id, or perhaps manage it UI side ?
  req.body.id = req.body.id || shortid.generate()
  req.body.owner = usersUtils.owner(req)
  var valid = validate(req.body)
  if (!valid) return res.status(400).send(validate.errors)
  const date = moment().toISOString()
  req.body.createdAt = date
  req.body.createdBy = req.user.id
  req.body.updatedAt = date
  req.body.updatedBy = req.user.id
  try {
    await req.app.get('db').collection('applications').insertOne(req.body)
    res.status(201).json(req.body)
  } catch (err) {
    return next(err)
  }
})

// Middlewares
router.use('/:applicationId', auth.optionalJwtMiddleware, async function(req, res, next) {
  try {
    req.application = await req.app.get('db').collection('applications').findOne({
      id: req.params.applicationId
    }, {
      fields: {
        _id: 0
      }
    })
    if (!req.application) return res.status(404).send('Application configuration not found')
    next()
  } catch (err) {
    next(err)
  }
})

// retrieve a application by its id
router.get('/:applicationId', (req, res, next) => {
  if (!permissions.can(req.application, 'readDescription', req.user)) return res.sendStatus(403)
  res.status(200).send(req.application)
})

// update a application
// TODO: prevent overwriting owner and maybe other calculated fields.. A PATCH route like in datasets ?
router.put('/:applicationId', async(req, res, next) => {
  if (!permissions.can(req.application, 'writeDescription', req.user)) return res.sendStatus(403)
  var valid = validate(req.body)
  if (!valid) return res.status(400).send(validate.errors)
  req.body.updatedAt = moment().toISOString()
  req.body.updatedBy = req.user.id
  req.body.id = req.params.applicationId
  try {
    await req.app.get('db').collection('applications').updateOne({
      id: req.params.applicationId
    }, req.body)
    res.status(200).json(req.body)
  } catch (err) {
    return next(err)
  }
})

// Delete a application
router.delete('/:applicationId', async(req, res, next) => {
  if (!permissions.can(req.application, 'delete', req.user)) return res.sendStatus(403)
  try {
    // TODO : Remove indexes
    await req.app.get('db').collection('applications').deleteOne({
      id: req.params.applicationId
    })
    res.sendStatus(204)
  } catch (err) {
    return next(err)
  }
})

// retrieve a application by its id
router.get('/:applicationId/config', (req, res, next) => {
  if (!permissions.can(req.application, 'readConfig', req.user)) return res.sendStatus(403)
  res.status(200).send(req.application.configuration || {})
})

// retrieve a application by its id
router.put('/:applicationId/config', async(req, res, next) => {
  if (!permissions.can(req.application, 'writeConfig', req.user)) return res.sendStatus(403)
  await req.app.get('db').collection('applications').updateOne({
    id: req.params.applicationId
  }, {
    $set: {
      configuration: req.body
    }
  })
  res.status(200).json(req.body)
})

router.get('/:applicationId/api-docs.json', (req, res) => {
  // TODO: permission ?
  res.send(applicationAPIDocs(req.application))
})
