module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'vitest'
  ],
  rules: {
    'multiline-ternary': ['error', 'always-multiline'],
    'no-multi-spaces': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 5 }],
    'no-whitespace-before-property': 'error',
    indent: [
      'error',
      2,
      {
        CallExpression: { arguments: 'first' },
        FunctionExpression: { parameters: 'first' },
        offsetTernaryExpressions: true,
        SwitchCase: 1,
        FunctionDeclaration: { body: 1, parameters: 2 },
        ImportDeclaration: 1,
        ObjectExpression: 1
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true
    }],
    'array-callback-return': ['error', {
      allowImplicit: true
    }],
    '@typescript-eslint/no-empty-interface': 'off',
    eqeqeq: [1, 'always', {
      null: 'ignore'
    }],
    'no-else-return': [1, {
      allowElseIf: false
    }],
    quotes: [2, 'single', {
      avoidEscape: true
    }],
    semi: [2, 'never'],
    'keyword-spacing': ['error', {
      before: true
    }],
    'max-params': ['error', 3],
    'max-statements': ['off', 10],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: false
    }],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1
    }],
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false
    }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/multiline-html-element-content-newline': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-mutating-props': 'off',
    'vue/no-v-html': 'off',
    'no-case-declarations': 'off',
    'vue/multi-word-component-names': 'off',
    camelcase: 'off',
    curly: 0,
    'dot-notation': 0,
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 2
      },
      multiline: {
        max: 1
      }
    }]
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
