import { expect, test, vi } from 'vitest'
import { getPost } from '../src/network'

test('should fetch', async () => {
  const result = await getPost(1)
  expect(result).toMatchInlineSnapshot(`"Mocked!"`)
})
