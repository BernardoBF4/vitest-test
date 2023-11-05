import { test, expect, vi } from 'vitest'
import { greetings } from '../src/greetings'

test('greeting', () => {
  const spy = vi.spyOn(console, 'log')

  greetings('World')
  greetings('Anthony')

  expect(spy.mock.calls[0][0]).toBe('Hello, World')
  expect(spy.mock.calls[1][0]).toBe('Hello, Anthony')
  expect(spy).toBeCalledTimes(2)
})
