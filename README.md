# protondb-i18n

A crowdsourced journey to translate [ProtonDB](https://www.protondb.com) ([News post](https://www.protondb.com/news/protondb-spricht-nun-auch-deutsch))

### Overview

ProtonDB loads its text using [react-i18next](https://github.com/i18next/react-i18next) resource bundles in JSON.

Each language, as represented by their 'xx-XX' [BCP-47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), lives within `locales`. Within each locale's directory are the following files:

- `protondb-content.json` *(translations for content around the site)*
- `proton-report.json` *(translations for the reporting flow specific to Proton)*
- `questionnaire.json` *(translations for generic items in the reporting flow)*
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
- In your downloaded directory, install dependencies by running `yarn`
- Localize
  - If starting a new locale, create the directory named after your language tag within `locales` and copy over files from the `locales/en-US` directory
  - Run `yarn run --locale <locale-code>` automatically will be appended the new content in the bottom of all the files
- Review them visually (see Verify Your Changes below)
- Run `yarn lint:json` to validate everything is alphabetized and formatted properly
- Commit, push, and open a pull request!

Any questions? Ask us on [Discord](https://discord.gg/uuwK9EV) You might want to let us know on there anyway that you're starting work so that we can add you to Known Active Translations below.

### Verify Your Changes

Keep an eye out for page rendering issues if your text is smaller or larger than the English equivalent, and open an issue with a screenshot if you cannot fit readable words for your language.

- Learn how to modify your browser's local storage (here are instructions for [Chrome](https://developer.chrome.com/docs/devtools/storage/localstorage/) and [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector))
- Visit [ProtonDB](https://www.protondb.com)
- If you're not already, switch to English
- (NEW): For both files, copy the values for `i18nStamp` and `i18nVersion` that occur in the ones that are stored in your local storage.
- For each file in the locales directory, copy its contents into a local storage entry of `i18next:en-US-filename`, i.e. `i18next:en-US-proton-report`
- Reload and review
- (NEW): When finished, remove the values you added for `i18nStamp` and `i18nVersion` before submitting your PR

### Maintenance

As ProtonDB continues development, new text will be added that may need translation. For a quick way to verify if a language is missing translations (or has identical ones to English), you can run: `yarn compare --locale <locale-code>`

### Hall of Fame

- German (de-DE): [@NoXPhasma](https://github.com/NoXPhasma) and [@VoxelCubes](https://github.com/VoxelCubes)
- Polish (pl-PL): [@kacperski1](https://github.com/kacperski1)
- Ukrainian (uk-UA): [@iodream](https://github.com/iodream)
- Bulgarian (bg-BG): [@mialy](https://github.com/mialy)
- Greek (el-GR): [@xnick](https://github.com/xnick)
- Swedish (sv-SE): [@newbytee](https://github.com/newbytee)
- French (fr-FR): [@julroy67](https://github.com/julroy67), [@nocymer](https://github.com/nocymer)
- Italian (it-IT): [@apontini](https://github.com/apontini), [@protoroto](https://github.com/protoroto), [@Mte90](https://github.com/Mte90/), [@spagoc](https://github.com/spagoc), [@marco-acorte](https://github.com/marco-acorte) and simojn
- Spanish (es-ES): [@xathech](https://github.com/xathech)
- Simplified Chinese (zh-Hans): [@zactry](https://github.com/zactry)
- Dutch (nl-NL): [@hypothermic](https://github.com/hypothermic)
- Russian (ru-RU): [@Homaykin](https://github.com/Homyakin)
- Turkish (tr-TR): [@csengor](https://github.com/csengor)
- Taiwanese Chinese (zh-TW): [@laichiaheng](https://github.com/laichiaheng)
- Portuguese Brazilian (pt-BR): [@kassindornelles](https://github.com/kassindornelles)
- Czech (cs-CZ): [@Fjuro](https://github.com/Fjuro)
- Croatian (hr-HR): [@wuku0](https://github.com/wuku0)
- Korean (ko-KR): [@infopcgood](https://github.com/infopcgood)

### Coming soon

- An expanded ProtonDB help section will need translations too!
