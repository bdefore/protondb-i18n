const parseArgs = require('minimist')
const chalk = require('chalk')
const diff = require('./diff')

const args = parseArgs(process.argv.slice(2))

if (!args.locale) {
  console.error(chalk.red(`Missing 'locale' argument. Exiting`))
  process.exit(1)
}

if (!args.baseLocale) {
  console.error(chalk.yellow(`Missing 'baseLocale' argument. Will fall back to 'en-US'`))
}

const baseLocale = args.baseLocale || 'en-US'
const locale = args.locale

const checkFile = filename => {
  const base = require(`./locales/${baseLocale}/${filename}.json`)
  const test = require(`./locales/${locale}/${filename}.json`)

  console.log(chalk.blue(`Comparing ${filename}.json...`))
  console.log(JSON.stringify(diff(base, test), null, 2));
}

console.log(chalk.yellow(`Comparing ${locale} to ${baseLocale}...`))

const filenames = [
  'general',
  'proton-report',
  'protondb-content',
  'questionnaire'
]

filenames.map(filename => checkFile(filename))
