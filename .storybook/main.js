const path = require('path')

module.exports = {
	"stories": [
		"../src/components/**/*.mdx",
		"../src/components/**/*.stories.@(js|jsx|ts|tsx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions"
	],
	"framework": {
		"name": "@storybook/vue3-vite",
		"options": {}
	},
	"docs": {
		"autodocs": "tag"
	}
}
