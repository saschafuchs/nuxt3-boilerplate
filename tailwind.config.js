const plugin = require('tailwindcss/plugin')
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'
  ],
  safelist: [],
  theme: {
    extend: {}
  },
  plugins: [
    FormKitVariants,
    require('@tailwindcss/container-queries'),
    function ({ addUtilities }) {
      const additional = {
        '.cmt-2 + .cmt-2': {
          marginTop: '.5rem'
        },
        '.cmt-4 + .cmt-4': {
          marginTop: '1rem'
        },
        '.cmt-8 + .cmt-8': {
          marginTop: '2rem'
        },
        '.cmt-16 + .cmt-16': {
          marginTop: '4rem'
        },
        '.cmt-1 + .cmt-1': {
          marginTop: '.25rem'
        },
        '.position-below': {
          bottom: '0',
          transform: 'translateY(100%)'
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.pin-vert-center': {
          top: '50%',
          transform: 'translateY(-50%)'
        },
        '.pin-horz-center': {
          left: '50%',
          transform: 'translateX(-50%)'
        },
        '.hyphens': {
          hyphens: 'auto',
          hyphenLimitChars: '6 3 2'
        },
        '.no-hyphens': {
          hyphens: 'manual'
        },
        '.blur-3': {
          filter: 'blur(3px)'
        },
        '.container': {
          width: '100%',
          minWidth: '320px',
          maxWidth: '900px'
        },
        '.container-small': {
          width: '100%',
          minWidth: '320px',
          maxWidth: '768px'
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.last-mb-no > :last-child': {
          marginBottom: '0'
        },
        '.separator-pipe:not(:last-child):after': {
          content: '" / "'
        }
      }

      addUtilities(additional)
    }
  ]
}
