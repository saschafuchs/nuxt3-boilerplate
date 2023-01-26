# Nuxt 3 Boilerplate

## Installation

Load the repo into your directory. Use `--force' if the folder is not empty.

```bash
npx degit saschafuchs/nuxt3-boilerplate . --force
```

Then install the packages as usual with `npm i`.

## MSW 
The Mock Service Worker is used to mock requests, whether for development, unit tests or storybooks. This is already prepared, you only have to initialise it once.

```bash
npx msw init public/ --save
```

## Vitest

## Plop

## Formkit

## ZOD

## VSCode
### i18n 
Use the Plugin [i18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

Modify Workspace Settings: 

```json
{
	"i18n-ally.dirStructure": "file",
	"i18n-ally.extract.autoDetect": true,
	"i18n-ally.extract.keyMaxLength": 200,
	"i18n-ally.defaultNamespace": "",
	"i18n-ally.disablePathParsing": true,
	"i18n-ally.displayLanguage": "en",
	"i18n-ally.enabledFrameworks": [
		"vue"
	],
	"i18n-ally.enabledParsers": [
		"json"
	],
	"i18n-ally.localesPaths": [
		"./locales"
	],
	"i18n-ally.includeSubfolders": true
}
```
