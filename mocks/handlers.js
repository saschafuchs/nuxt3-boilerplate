import { rest } from 'msw'

export const handlers = [
  rest.post('test', (req, res, ctx) => {
    return res(ctx.json({ message: 'Hello there!' })
    )
  })
]
