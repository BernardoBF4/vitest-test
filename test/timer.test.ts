import { expect, test, vi, beforeEach } from 'vitest'

function warnLater(message) {
  setTimeout(() => {
    console.log(message)
  }, 2_000)
}

beforeEach(() => {
  vi.useFakeTimers()
})

test('warnLater', async () => {
  const logSpy = vi.spyOn(console, 'log')

  warnLater('2 seconds passed')

  expect(logSpy).to.not.toBeCalled()

  vi.advanceTimersByTime(2_000)

  expect(logSpy).toBeCalledWith('2 seconds passed')
})
