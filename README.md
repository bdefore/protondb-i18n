# protondb-i18n

A crowdsourced journey to translate [ProtonDB](https://www.protondb.com) ([News post](https://www.protondb.com/news/protondb-spricht-nun-auch-deutsch))

### Overview

ProtonDB loads its text using [react-i18next](https://github.com/i18next/react-i18next) (version 10) resource bundles in JSON.

Each language, as represented by their 'xx-XX' [BCP-47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), lives within `locales`. Within each locale's directory are the following files:

- `protondb-content.json` *(translations for content around the site)
- `proton-report.json` *(translations for the reporting flow specific to Proton)*
- `questionnaire.json` *(translations for generic items in the reporting flow)
- `general.json` *(everything else)*

#### Prerequisites

None! You can browse this repository and edit the files manually. But editing language files can be fiddly and typos are common. It's preferable to grab some tools:

- [Node.js](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/lang/en/) (if you want to skip this, `npm` is included with node and will probably work fine as a substitute).
- A text editor, ideally one with colored formatting for JSON.

### Contributing

All native speakers are welcome to contribute! Please do not make pull requests with automated translations.

- Fork this repo
- Download your fork
- In your downloaded directory, run `yarn install`
- If starting a new locale, create the directory named after your language tag within `locales` and copy over files from the `locales/en-US` directory
- Make your changes/additions
- Review them visually (see Verify Your Changes below)
- Run `yarn run lint:json` to validate everything is alphabetized and formatted properly
- Commit, push, and open a pull request!

Any questions? Ask us on [Discord](https://discord.gg/uuwK9EV) You might want to let us know on there anyway that you're starting work so that we can add you to Known Active Translations below.

### Verify Your Changes

Keep an eye out for page rendering issues if your text is smaller or larger than the English equivalent, and open an issue with a screenshot if you cannot fit readable words for your language.

- Learn how to modify your browser's local storage (here are instructions for [Chrome](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage) and [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector))
- Visit [ProtonDB](https://www.protondb.com)
- If you're not already, switch to English
- (NEW): For both files, copy the values for `i18nStamp` and `i18nVersion` that occur in the ones that are stored in your local storage.
- For each file in the locales directory, copy its contents into a local storage entry of `i18next:en-US-filename`, i.e. `i18next:en-US-proton-report`
- Reload and review
- (NEW): When finished, remove the values you added for `i18nStamp` and `i18nVersion` before submitting your PR

### Maintenance

As ProtonDB continues development, new text will be added that may need translation. For a quick way to verify if a language is missing translations (or has identical ones to English), you can run: `yarn run compare --locale <locale-code>`

### Known Active Translations

- Portuguese (pt-BR): [@pedrofleck](https://github.com/pedrofleck) (ongoing at [PR #10](https://github.com/bdefore/protondb-i18n/pull/10))

### Hall of Fame

- German (de-DE): [@NoXPhasma](https://github.com/NoXPhasma)
- Polish (pl-PL): [@kacperski1](https://github.com/kacperski1)
- Ukrainian (uk-UA): [@iodream](https://github.com/iodream)
- Bulgarian (bg-BG): [@mialy](https://github.com/mialy)
- Greek (el-GR): [@xnick](https://github.com/xnick)
- Swedish (sv-SE): [@newbytee](https://github.com/newbytee)
- French (fr-FR): [@julroy67](https://github.com/julroy67)
- Italian (it-IT): [@apontini](https://github.com/apontini) and [@protoroto](https://github.com/protoroto)
- Spanish (es-ES): [@xathech](https://github.com/xathech)

### Coming soon

- An expanded ProtonDB help section will need translations too!
