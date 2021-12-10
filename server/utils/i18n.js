const config = require('config')
const i18n = require('i18n')

const defaultLocale = config.i18n.defaultLocale

i18n.configure({
  defaultLocale,
  directory: require('path').join(__dirname, '../../server/i18n'),
  cookie: 'i18n_lang',
  objectNotation: true,
})

exports.middleware = i18n.init

exports.vocabularyArray = {}
exports.vocabulary = {}
i18n.getLocales().forEach(locale => {
  exports.vocabularyArray[locale] = require('../../contract/vocabulary.json').map(concept => ({
    ...concept,
    title: concept.title[locale] || concept.title[defaultLocale],
    description: concept.description[locale] || concept.description[defaultLocale],
    tag: concept.tag[locale] || concept.tag[defaultLocale],
  }))
  exports.vocabulary[locale] = {}
  exports.vocabularyArray[locale].forEach(concept => {
    concept.identifiers.forEach(id => { exports.vocabulary[locale][id] = concept })
  })
})
