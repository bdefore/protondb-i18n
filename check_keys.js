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

const baseTranslation = require(`./locales/${baseLocale}/translation.json`)
const testTranslation = require(`./locales/${locale}/translation.json`)
const baseContribute = require(`./locales/${baseLocale}/contribute.json`)
const testContribute = require(`./locales/${locale}/contribute.json`)

console.log(chalk.yellow(`Comparing ${locale} to ${baseLocale}...`))
console.log(chalk.blue('Comparing translation.json...'))
console.log(JSON.stringify(diff(baseTranslation, testTranslation), null, 2));
console.log(chalk.blue('Comparing contribute.json...'))
console.log(JSON.stringify(diff(baseContribute, testContribute), null, 2));
