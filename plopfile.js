const inputRequired = (name) => {
  return value => (/.+/.test(value) ? true : `${name} is required`)
}

module.exports = function (plop) {
  const COMPONENT_PATH = './components/'
  const LAYOUT_PATH = './layouts/'
  const PAGE_PATH = './pages/'
  const COMPOSABLE_PATH = './composable/'
  const STORE_PATH = './store/'
  const TYPES_PATH = './types/'
  const SCHEMA_PATH = './types/schemas/'

  plop.setWelcomeMessage(
    'Welcome to the Vue3 / Nuxt3 Plop generator! Please select a generator.'
  )
  plop.setGenerator('components', {
    description: 'Build a Component Skeleton',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the component?',
        validate: inputRequired('title')
      },
      {
        type: 'list',
        name: 'type',
        message: 'Type of the component?',
        choices: ['pure', 'base', 'feature', 'wrapper', 'provider'],
        default: 'pure'
      },
      {
        type: 'checkbox',
        name: 'files',
        message: 'Files to create?',
        default: ['vue', 'unit'],
        choices: [
          {
            name: 'vue',
            message: 'Vue file'
          },
          {
            name: 'unit',
            message: 'Unit test file'
          },
          {
            name: 'story',
            message: 'Storybook file'
          }
        ]
      }
    ],
    actions: [
      {
        skip: function (answers) {
          return !answers.files.includes('vue') ? 'skipped' : null
        },
        type: 'add',
        path: `${COMPONENT_PATH}{{type}}/{{pascalCase name}}/{{pascalCase name}}.vue`,
        templateFile: 'plopTemplates/component.hbs',
        skipIfExists: true
      },
      {
        skip: function (answers) {
          return !answers.files.includes('unit') ? 'skipped' : null
        },
        type: 'add',
        path: `${COMPONENT_PATH}{{type}}/{{pascalCase name}}/{{pascalCase name}}.test.ts`,
        templateFile: 'plopTemplates/unitComponent.hbs',
        skipIfExists: true
      },
      {
        skip: function (answers) {
          return !answers.files.includes('story') ? 'skipped' : null
        },
        type: 'add',
        path: `${COMPONENT_PATH}{{type}}/{{pascalCase name}}/{{pascalCase name}}.stories.ts`,
        templateFile: 'plopTemplates/componentStory.hbs',
        skipIfExists: true
      }
    ]
  })

  plop.setGenerator('layout', {
    description: 'Build a Layout Skeleton',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the Layout'
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${LAYOUT_PATH}{{camelCase name}}.vue`,
        templateFile: 'plopTemplates/layout.hbs',
        skipIfExists: true
      }
    ]
  })

  plop.setGenerator('page', {
    description: 'Build a Page Skeleton',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the Page'
      },
      {
        type: 'input',
        name: 'path',
        message: 'Path of the Page'
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${PAGE_PATH}{{path}}{{camelCase name}}.vue`,
        templateFile: 'plopTemplates/page.hbs',
        skipIfExists: true
      }
    ]
  })

  plop.setGenerator('composable', {
    description: 'Build a Composable Skeleton',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the Composable'
      },
      {
        type: 'confirm',
        name: 'unit',
        message: 'Add a Unit Test File?',
        default: true
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${COMPOSABLE_PATH}{{camelCase name}}/{{camelCase name}}.ts`,
        templateFile: 'plopTemplates/composable.hbs',
        skipIfExists: true
      },
      {
        skip: function (answers) {
          return !answers.unit ? 'skipped' : null
        },
        type: 'add',
        path: `${COMPOSABLE_PATH}{{camelCase name}}/{{camelCase name}}.test.ts`,
        templateFile: 'plopTemplates/unitComposable.hbs',
        skipIfExists: true
      }
    ]
  })

  plop.setGenerator('store', {
    description: 'Build a Pinia Store File',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the Store'
      },
      {
        type: 'confirm',
        name: 'persist',
        message: 'Persist the Store?',
        default: false
      },
      {
        type: 'confirm',
        name: 'unit',
        message: 'Add a Unit Test File?',
        default: true
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${STORE_PATH}{{camelCase name}}.ts`,
        templateFile: 'plopTemplates/piniaStore.hbs',
        skipIfExists: true
      },
      {
        skip: function (answers) {
          return !answers.unit ? 'skipped' : null
        },
        type: 'add',
        path: `${STORE_PATH}{{camelCase name}}.test.ts`,
        templateFile: 'plopTemplates/unitStore.hbs',
        skipIfExists: true
      }
    ]
  })

  plop.setGenerator('interface', {
    description: 'Build a Typescript Interface',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the Interface'
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${TYPES_PATH}{{camelCase name}}.interfaces.ts`,
        templateFile: 'plopTemplates/interface.hbs',
        skipIfExists: true
      }
    ]
  })

  plop.setGenerator('schema', {
    description: 'Build a Zod Schema',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the Schema'
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${SCHEMA_PATH}{{camelCase name}}.schema.ts`,
        templateFile: 'plopTemplates/schema.hbs',
        skipIfExists: true
      }
    ]
  })
}
