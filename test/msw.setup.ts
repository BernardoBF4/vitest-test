import { afterAll, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'

const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
    return HttpResponse.json({ body: 'Mocked!' })
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
