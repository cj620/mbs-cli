// packages/skill-shared/src/__tests__/errors.test.ts
import { describe, it, expect } from 'vitest'
import { MBSError, NotAuthenticatedError, PermissionError, ReauthenticationRequiredError } from '../errors.js'

describe('NotAuthenticatedError', () => {
  it('has type "auth" and a hint', () => {
    const err = new NotAuthenticatedError()
    expect(err.type).toBe('auth')
    expect(err.hint).toBe('Run mbs login to authenticate')
    expect(err.message).toBe('Not authenticated')
    expect(err instanceof Error).toBe(true)
  })
})

describe('ReauthenticationRequiredError', () => {
  it('preserves the expiration reason for a structured auth response', () => {
    const error = new ReauthenticationRequiredError('idle_timeout')

    expect(error.type).toBe('auth')
    expect(error.reason).toBe('idle_timeout')
    expect(error.message).toBe('Authentication expired after inactivity')
  })
})

describe('MBSError', () => {
  it('defaults type to "api"', () => {
    const err = new MBSError('something failed')
    expect(err.type).toBe('api')
    expect(err.hint).toBe('')
  })

  it('accepts custom type and hint', () => {
    const err = new MBSError('bad input', 'validation', 'Check the --status flag')
    expect(err.type).toBe('validation')
    expect(err.hint).toBe('Check the --status flag')
  })
})

describe('PermissionError', () => {
  it('has type "permission" and a hint', () => {
    const err = new PermissionError()
    expect(err.type).toBe('permission')
    expect(err.hint).toBe('You do not have permission to perform this action')
    expect(err.message).toBe('Permission denied')
    expect(err instanceof Error).toBe(true)
  })
})
