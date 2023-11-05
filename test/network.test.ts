import { expect, test, vi } from 'vitest'
import { getPost } from '../src/network'

vi.stubGlobal('fetch', async () => {
  return {
    json() {
      return { body: 'foo' }
    },
  }
})

test('should fetch', async () => {
  const result = await getPost(1)
  expect(result).toMatchInlineSnapshot('"foo"')
})
