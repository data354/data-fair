const config = require('config')
const { RateLimiterMemory } = require('rate-limiter-flexible')
const requestIp = require('request-ip')
const { ThrottleGroup } = require('stream-throttle')
const { promisify } = require('util')
const finished = promisify(require('stream').finished)
const asyncWrap = require('./async-wrap')

// IMPORTANT NOTE: all rate limiting is based on memory only, to be strictly applied when scaling the service
// load balancing has to be based on a hash of the rate limiting key i.e the origin IP
// TODO: optional redis or mongo backend ?

// used for public exposition of remote services, it does not use throttling only rate limiting on both data size and number of requests
// same limits are applied whether used is authenticated or not, the purpose here is simply to ensure
// that visualizations can used remote services in a reasonnable manner, this is not for API users
exports.remoteServices = {
  kb: new RateLimiterMemory({
    points: config.defaultLimits.remoteServiceRate.kb * 1000,
    duration: config.defaultLimits.remoteServiceRate.duration
  }),
  nb: new RateLimiterMemory({
    points: config.defaultLimits.remoteServiceRate.nb,
    duration: config.defaultLimits.remoteServiceRate.duration
  })
}

// other parts of the API are protected using rate-limiting on number of requests and throttling on data size
// different limits are applied for anonymous or authenticated used
const limiters = {}
for (const limitType of ['user', 'anonymous']) {
  limiters[limitType] = new RateLimiterMemory({
    points: config.defaultLimits.apiRate[limitType].nb,
    duration: config.defaultLimits.apiRate[limitType].duration
  })
}
const throttleGroups = {}
exports.middleware = asyncWrap(async (req, res, next) => {
  const limitType = req.user && req.user.id ? 'user' : 'anonymous'
  const throttlingId = limitType === 'user' ? req.user.id : requestIp.getClientIp(req)

  try {
    await limiters[limitType].consume(throttlingId, 1)
  } catch (err) {
    return res.status(429).send('Trop de traffic dans un interval restreint sur cette API.')
  }

  res.throttle = (bandwidthType) => {
    const groupInfo = throttleGroups[throttlingId + bandwidthType] = throttleGroups[throttlingId + bandwidthType] || {
      group: new ThrottleGroup({ rate: config.defaultLimits.apiRate[limitType].bandwidth[bandwidthType] }),
      nb: 0
    }
    groupInfo.nb += 1
    const throttle = groupInfo.group.throttle()
    finished(throttle).then(() => {
      groupInfo.nb -= 1
      if (groupInfo.nb === 0) delete throttleGroups[throttlingId + bandwidthType]
    })
    return throttle
  }
  res.throttleEnd = (bandwidthType = 'dynamic') => {
    const throttle = res.throttle(bandwidthType)
    res._originalEnd = res.end
    res.end = function () {
      if (!arguments[0]) return res._originalEnd(...arguments)
      throttle.pipe(res)
      throttle.end(...arguments)
    }
  }
  next()
})
