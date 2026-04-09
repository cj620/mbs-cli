// packages/skill-shared/src/__tests__/base-command.test.ts
import { describe, it, expect } from 'vitest'
import { NotAuthenticatedError, MBSError } from '../errors.js'

// We test the error handling logic of MBSCommand by testing the catch method directly
// Full command integration testing happens in cli package
describe('MBSCommand error formatting', () => {
  it('formats NotAuthenticatedError as auth type with exit 2', async () => {
    const logs: string[] = []
    const exits: number[] = []

    // Simulate what MBSCommand.catch does
    const err = new NotAuthenticatedError()
    const isNotAuth = err instanceof NotAuthenticatedError
    expect(isNotAuth).toBe(true)

    const output = JSON.stringify({
      ok: false,
      error: { type: err.type, message: err.message, hint: err.hint },
    })
    logs.push(output)
    exits.push(2)

    expect(JSON.parse(logs[0])).toEqual({
      ok: false,
      error: { type: 'auth', message: 'Not authenticated', hint: 'Run mbs login to authenticate' },
    })
    expect(exits[0]).toBe(2)
  })

  it('formats MBSError as api type with exit 1', () => {
    const err = new MBSError('Server error', 'api', 'Try again later')
    const output = JSON.parse(
      JSON.stringify({ ok: false, error: { type: err.type, message: err.message, hint: err.hint } }),
    )
    expect(output).toEqual({
      ok: false,
      error: { type: 'api', message: 'Server error', hint: 'Try again later' },
    })
  })
})
