const Ajv = require('ajv')
const ajv = new Ajv()
const moment = require('moment-timezone')
const config = require('config')

exports.sniff = (values, attachmentsPaths = [], existingField) => {
  if (existingField && existingField.ignoreDetection) return { type: 'string' }

  if (attachmentsPaths && attachmentsPaths.length && checkAll(values, isOneOf, attachmentsPaths, 'Vous avez chargé des pièces jointes, et une colonne semble contenir des chemins vers ces pièces jointes. Mais certaines valeurs sont erronées.')) {
    return { type: 'string', 'x-refersTo': 'http://schema.org/DigitalDocument' }
  }
  if (checkAll(values, val => booleanRegexp.test(val))) return { type: 'boolean' }
  if (checkAll(values, val => intRegexp.test(val))) {
    if (existingField && existingField.ignoreIntegerDetection) return { type: 'number' }
    else return { type: 'integer' }
  }
  if (checkAll(values, val => floatRegexp.test(val))) return { type: 'number' }
  if (checkAll(values, dateTimeSchema)) return { type: 'string', format: 'date-time' }
  if (checkAll(values, dateSchema)) return { type: 'string', format: 'date' }
  for (const dateTimeFormat of config.dateTimeFormats) {
    if (checkAll(values, hasDateFormat(dateTimeFormat))) return { type: 'string', format: 'date-time', dateTimeFormat }
  }
  for (const dateFormat of config.dateFormats) {
    if (checkAll(values, hasDateFormat(dateFormat))) return { type: 'string', format: 'date', dateFormat }
  }
  return { type: 'string' }
}

exports.format = (value, prop, fileProp) => {
  if (!value) return null
  if (typeof value !== 'string') value = JSON.stringify(value)
  if (prop.type === 'string' && prop.format === 'date' && fileProp && fileProp.dateFormat) {
    const date = moment(value, fileProp.dateFormat, true)
    if (date.isValid()) return date.format('YYYY-MM-DD')
    else return null
  }
  if (prop.type === 'string' && prop.format === 'date-time' && fileProp && fileProp.dateTimeFormat) {
    const timeZone = prop.timeZone || config.defaultTimeZone
    const date = moment.tz(value, fileProp.dateTimeFormat, true, timeZone) // the boolean is for strict mode
    // format will store the timezone info, it is a richer info than always storing with Z suffix
    // when showing the date it is preferred to use moment "parseZone" and show the data in the original time zone
    // instead of moving to the user's time zone
    if (date.isValid()) return date.format()
    else return null
  }
  if (prop.type === 'string') return value.trim()
  const cleanValue = value.replace(new RegExp(`^${trimablePrefix}`, 'g'), '').replace(new RegExp(`${trimablePrefix}$`, 'g'), '')
  if (!cleanValue) return null
  if (prop.type === 'boolean') return ['1', 'true', 'vrai', 'oui', 'yes'].includes(cleanValue.toLowerCase())
  if (prop.type === 'integer' || prop.type === 'number') return Number(cleanValue.replace(/\s/g, '').replace(',', '.'))
}

// WARNING: this code is duplicated in dataset-schema.vue
exports.escapeKey = (key) => {
  key = key.replace(/\.|\s|\$|;|,|:|!/g, '_').replace(/"/g, '')
  // prefixing by _ is reserved to fields calculated by data-fair
  while (key.startsWith('_')) {
    key = key.slice(1)
  }
  return key
}

function checkAll (values, check, param, throwIfAlmost) {
  const definedValues = [...values]
    .filter(v => !!v)
    .map(v => v.trim())
    .filter(v => !!v)

  if (!definedValues.length) return false
  const invalidValues = []
  const validValues = []
  for (const value of definedValues) {
    if (check(value, param)) {
      validValues.push(value)
    } else {
      invalidValues.push(value)
    }
  }
  if (throwIfAlmost) {
    if (invalidValues.length && invalidValues.length <= (definedValues.length / 2)) {
      const invalidValuesMsg = invalidValues.slice(0, 3).join(', ') + (invalidValues.length > 3 ? '...' : '.')
      const validValuesMsg = validValues.slice(0, 3).join(', ') + (validValues.length > 3 ? '...' : '.')
      throw new Error(`${throwIfAlmost}
Valeurs invalides : ${invalidValuesMsg}
Valeurs valides : ${validValuesMsg}
`)
    }
  }
  return !invalidValues.length
}

// underscore is accepted and ignored around numbers and booleans
const trimablePrefix = '(\\s|_)*'

const isOneOf = (value, values) => values.includes(value)
// const isBoolean = (value) => ['0', '1', '-1', 'true', 'false'].indexOf(value.toLowerCase()) !== -1
const booleanRegexp = new RegExp(`^${trimablePrefix}(0|1|-1|true|false|vrai|faux|oui|non|yes|no)${trimablePrefix}$`, 'i')
const intRegexp = new RegExp(`^${trimablePrefix}(-|\\+)?[0-9\\s]+${trimablePrefix}$`)
const floatRegexp = new RegExp(`^${trimablePrefix}(-|\\+)?([0-9\\s]+([.,][0-9]+)?)${trimablePrefix}$`)
const dateTimeSchema = ajv.compile({ type: 'string', format: 'date-time' })
const dateSchema = ajv.compile({ type: 'string', format: 'date' })
const hasDateFormat = (format) => (value) => moment(value, format, true).isValid()
