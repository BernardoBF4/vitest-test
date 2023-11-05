import { expect, test, vi } from 'vitest'

function warnLater(message) {
  setTimeout(() => {
    console.log(message)
  }, 2_000)
}

test('warnLater', async () => {
  const logSpy = vi.spyOn(console, 'log')

  warnLater('2 seconds passed')

  expect(logSpy).to.not.toBeCalled()

  await new Promise((resolve) => setTimeout(resolve, 2_000))

  expect(logSpy).toBeCalledWith('2 seconds passed')
})
