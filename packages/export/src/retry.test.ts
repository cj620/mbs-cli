import { MBSError, PermissionError } from '@mb-it-org/shared'
import { describe, expect, it, vi } from 'vitest'
import { isTransientFailure, withBoundedRetry } from './retry.js'

describe('bounded retry', () => {
  it('retries a transient failure three times with exponential backoff by default', async () => {
    const operation = vi.fn().mockRejectedValue(Object.assign(new Error('socket reset'), { code: 'ECONNRESET' }))
    const delays: number[] = []

    await expect(
      withBoundedRetry(operation, {
        random: () => 0.5,
        sleep: async (delayMs) => {
          delays.push(delayMs)
        },
      }),
    ).rejects.toThrow('socket reset')

    expect(operation).toHaveBeenCalledTimes(4)
    expect(delays).toEqual([1000, 2000, 4000])
  })

  it('does not retry deterministic validation or permission failures', async () => {
    const validation = vi.fn().mockRejectedValue(new MBSError('invalid sql', 'validation'))
    const permission = vi.fn().mockRejectedValue(new PermissionError())

    await expect(withBoundedRetry(validation, { sleep: async () => undefined })).rejects.toThrow('invalid sql')
    await expect(withBoundedRetry(permission, { sleep: async () => undefined })).rejects.toThrow('Permission denied')
    expect(validation).toHaveBeenCalledTimes(1)
    expect(permission).toHaveBeenCalledTimes(1)
  })

  it('recognizes only bounded transport and temporary HTTP failures as transient', () => {
    expect(isTransientFailure(Object.assign(new Error('timeout'), { code: 'ETIMEDOUT' }))).toBe(true)
    expect(
      isTransientFailure(new MBSError('busy', 'api', '', { statusCode: 503, body: { code: 503 } })),
    ).toBe(true)
    expect(
      isTransientFailure(new MBSError('bad request', 'api', '', { statusCode: 400, body: { code: 400 } })),
    ).toBe(false)
  })
})
