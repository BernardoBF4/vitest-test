import { test, expect } from 'vitest'
import { deepMerge } from '../src'

test('shallow merge', () => {
  const merged = deepMerge({ name: 'Anthony' }, { github: 'antfu' })

  expect(merged).toEqual({
    name: 'Anthony',
    github: 'antfu',
  })
})

test('shallow merge with overlaps', () => {
  const merged = deepMerge(
    { name: 'Anthony', github: 'unknown' },
    { github: 'antfu', twitter: 'antfu7' }
  )

  expect(merged).toEqual({
    name: 'Anthony',
    github: 'antfu',
    twitter: 'antfu7',
  })
})

test('shallow merge with array', () => {
  const merged = deepMerge(['vue', 'react'], ['svelte', ' solid'])

  expect(merged).toEqual(['vue', 'react', 'svelte', ' solid'])
})

test('deep merge with overlaps', () => {
  const merged = deepMerge(
    { name: 'Anthony', accounts: { github: 'unknown' } },
    { accounts: { twitter: 'antfu7' } }
  )

  // expect(merged).toEqual({
  //   name: 'Anthony',
  //   accounts: { github: 'unknown', twitter: 'antfu7' },
  // })
  expect(merged).toMatchSnapshot()
  expect(merged).toMatchInlineSnapshot(`
    {
      "accounts": {
        "github": "unknown",
        "twitter": "antfu7",
      },
      "name": "Anthony",
    }
  `)
})

test('throws error when merging different types', () => {
  expect(() => deepMerge(['foo', 'bar'], { foo: 'bar' })).toThrowError(
    'Error: cannot merge two different types'
  )
})
