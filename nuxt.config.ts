export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  app: {
    head: {
      link: []
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@formkit/nuxt',
    '@vueuse/nuxt',
    ['@pinia/nuxt', {
      autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore']
      ]
    }]
  ],
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'de',
        iso: 'de',
        file: 'de.json',
        name: 'Deutsch'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      locale: 'en',
      silentTranslationWarn: true,
      silentFallbackWarn: true
    }
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nested',
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }
    }
  },
  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV
    }
  },
  vite: {
    logLevel: 'info'
  }
})
