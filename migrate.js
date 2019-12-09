const fs = require('fs-extra')

const languages = [
  {
    label: 'English (US)',
    value: 'en-US'
  },
  {
    label: 'български',
    value: 'bg-BG'
  },
  {
    label: 'Deutsch',
    value: 'de-DE'
  },
  {
    label: 'ελληνικά',
    value: 'el-GR'
  },
  {
    label: 'español',
    value: 'es-ES'
  },
  {
    label: 'français',
    value: 'fr-FR'
  },
  {
    label: 'italiano',
    value: 'it-IT'
  },
  {
    label: 'polski',
    value: 'pl-PL'
  },
  {
    label: 'português',
    value: 'pt-BR'
  },
  {
    label: 'svenska',
    value: 'sv-SE'
  },
  {
    label: 'Українська',
    value: 'uk-UA'
  }
]

const migrateTranslation = locale => {
  const baseTranslation = require(`./locales/${locale}/translation.json`)
  const baseProtonDb = require(`./locales/${locale}/protondb.json`)

  const {
    breakdown,
    explore,
    filters,
    gameDetails,
    home,
    medals,
    ratingDefinitions,
    reports,
    stats,
    suggestions,
    systemInfo,
    ...updatedTranslation
  } = baseTranslation
  const updatedProtonDb = {
    ...baseProtonDb,
    breakdown,
    explore,
    gameDetails,
    home,
    medals,
    ratingDefinitions,
    stats,
    suggestions,
    systemInfo
  }

  updatedProtonDb.steamAuthor = {
    hoursInSteam: reports.hoursInSteam,
    timeWithProton: reports.timeWithProton
  }
  updatedProtonDb.specs = reports.specs
  const {
    hoursInSteam,
    timeWithProton,
    specs,
    ...trimmedReports
  } = reports
  updatedTranslation.reports = trimmedReports

  fs.writeJsonSync(`./locales/${locale}/protondb-content.json`, updatedProtonDb)
  fs.writeJsonSync(`./locales/${locale}/general.json`, updatedTranslation)
  fs.removeSync(`./locales/${locale}/protondb.json`)
  fs.removeSync(`./locales/${locale}/translation.json`)
}

const migrateContribute = locale => {
  const baseContribute = require(`./locales/${locale}/contribute.json`)

  const {
    genericFollowUpPrompt,
    misc,
    ...updatedContribute
  } = baseContribute
  const questionnaire = {
    genericFollowUpPrompt,
    misc
  }

  fs.writeJsonSync(`./locales/${locale}/proton-report.json`, updatedContribute)
  fs.writeJsonSync(`./locales/${locale}/questionnaire.json`, questionnaire)
  fs.removeSync(`./locales/${locale}/contribute.json`)
}

languages.map(l => {
  migrateTranslation(l.value)
  migrateContribute(l.value)
})
