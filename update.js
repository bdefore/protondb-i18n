#!/usr/bin/env nodejs
const parseArgs = require('minimist')
const chalk = require('chalk')
const fs = require('fs');

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

function compareAndGenerate(file1, file2) {
    const base = JSON.parse(fs.readFileSync(file1, 'utf-8'));
    const locale_file = JSON.parse(fs.readFileSync(file2, 'utf-8'));

    const missingKeys = findMissingKeys(base, locale_file);

    const output = addMissingKeys(base, locale_file, missingKeys);

    fs.writeFileSync(file2, JSON.stringify(output, null, 2), 'utf-8');
}

function findMissingKeys(obj1, obj2) {
    const missingKeys = [];

    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (!obj2.hasOwnProperty(key)) {
                missingKeys.push(key);
            } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                const nestedMissingKeys = findMissingKeys(obj1[key], obj2[key]);
                if (nestedMissingKeys.length > 0) {
                    missingKeys.push(key);
                }
            }
        }
    }

    return missingKeys;
}

function addMissingKeys(obj1, obj2, missingKeys) {
    for (const key of missingKeys) {
        if (obj1[key] !== undefined && typeof obj1[key] === 'object') {
            obj2[key] = addMissingKeys(obj1[key], obj2[key] || {}, Object.keys(obj1[key]));
        } else {
            if (!obj2.hasOwnProperty(key)) {
                obj2[key] = obj1[key];
            }
        }
    }
    return obj2;
}

const checkFile = filename => {
    console.log(chalk.blue(`Updating ${filename}.json...`))

    compareAndGenerate(`./locales/${baseLocale}/${filename}.json`, `./locales/${locale}/${filename}.json`);
}

console.log(chalk.yellow(`Updating ${locale} to ${baseLocale}...`))

const filenames = [
    'general',
    'proton-report',
    'protondb-content',
    'questionnaire'
]

filenames.map(filename => checkFile(filename))
