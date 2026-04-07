// packages/skill-shared/src/__tests__/errors.test.ts
import { describe, it, expect } from 'vitest'
import { NotAuthenticatedError, MBSError } from '../errors.js'

describe('NotAuthenticatedError', () => {
  it('has type "auth" and a hint', () => {
    const err = new NotAuthenticatedError()
    expect(err.type).toBe('auth')
    expect(err.hint).toBe('Run mbs login to authenticate')
    expect(err.message).toBe('Not authenticated')
    expect(err instanceof Error).toBe(true)
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
