import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    include: ['tests/**/*.test.ts', 'components/**/*.test.ts', 'composables/**/*.test.ts'],
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    globals: true,
  },
})
