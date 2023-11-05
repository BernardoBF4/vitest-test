import { afterAll, beforeAll, expect, test, vi } from 'vitest'
import { getPost } from '../src/network'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'

const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
    return HttpResponse.json({ body: 'Mocked!' })
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('should fetch', async () => {
  const result = await getPost(1)
  expect(result).toMatchInlineSnapshot(`"Mocked!"`)
})
