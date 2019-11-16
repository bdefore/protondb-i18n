## Translation of protondb to Brazillian Portuguese

# protondb-i18n

A crowdsourced journey to translate [ProtonDB](https://www.protondb.com) ([News post](https://www.protondb.com/news/protondb-spricht-nun-auch-deutsch))

### Overview

ProtonDB loads its text using [react-i18next](https://github.com/i18next/react-i18next) (version 10) resource bundles in JSON.

Each language, as represented by their 'xx-XX' [BCP-47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), lives within `locales`. Within each locale's directory are two files:

- `contribute.json` *(translations for the reporting flow)*
- `translation.json` *(everything else)*

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
- Run `yarn lint:json` to validate everything is alphabetized and formatted properly
- Commit, push, and open a pull request!

Any questions? Ask us on [Discord](https://discord.gg/uuwK9EV)

### Verify Your Changes

Keep an eye out for page rendering issues if your text is smaller or larger than the English equivalent, and open an issue with a screenshot if you cannot fit readable words for your language.

- Learn how to modify your browser's local storage (here are instructions for [Chrome](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage) and [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector))
- Visit [ProtonDB](https://www.protondb.com)
- If you're not already, switch to English
- Copy the contents of your `contribute.json` file into a local storage entry as `i18next:en-US-contribute`
- Copy the contents of your `translation.json` file into a local storage entry as `i18next:en-US-translation`
- Reload and review

### Known Active Translators

Maybe you?

### Hall of Fame

- German (de-DE): [@NoXPhasma](https://github.com/NoXPhasma)

### Coming soon

- An expanded ProtonDB help section will need translations too!
