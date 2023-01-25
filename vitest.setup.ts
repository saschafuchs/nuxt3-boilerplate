import { fetch } from 'cross-fetch'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from './src/mocks/server'

global.fetch = fetch

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
