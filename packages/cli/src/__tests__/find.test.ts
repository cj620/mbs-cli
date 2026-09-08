import { describe, expect, it, vi } from 'vitest'

import { classifyRemoteFailure, resolveRecallBaseUrl } from '../commands/find.js'
import {
  findApis,
  RecallUnavailableError,
  validateRequest,
} from '../find/find-service.js'
import type { FindRequest } from '../find/types.js'
import { TABLE_ACTION_CAPABILITY } from '../find/types.js'

/**
 * Creates a valid remote-only find request with focused test overrides.
 *
 * @param overrides Fields changed by one test.
 * @returns Request accepted by the find transport seam.
 */
function request(overrides: Partial<FindRequest> = {}): FindRequest {
  return {
    query: '库存',
    targetType: 'all',
    topK: 5,
    capabilities: [TABLE_ACTION_CAPABILITY],
    ...overrides,
  }
}

describe('backend-only semantic recall', () => {
  /** Verifies the remote body crosses the find service by identity without envelope extraction or truncation. */
  it('returns the exact remote response body without processing candidates', async () => {
    const body = {
      code: 200,
      data: {
        results: Array.from({ length: 51 }, (_, index) => ({
          type: 'future',
          id: index + 1,
          name: `candidate-${index}`,
          score: Number.NaN,
          command: index === 0 ? 'untrusted remote text' : undefined,
        })),
      },
      msg: 'ok',
    }
    const remote = vi.fn(async () => body)

    const actual = await findApis(request({ topK: 1 }), remote)

    expect(actual).toBe(body)
    expect((actual as typeof body).data.results).toHaveLength(51)
    expect(remote).toHaveBeenCalledWith(expect.objectContaining({ topK: 1 }), expect.any(AbortSignal))
  })

  /** Verifies backend failures are explicit and never produce local candidates. */
  it('fails explicitly instead of falling back when the backend is unavailable', async () => {
    const failure = new Error('cookie=secret')

    await expect(findApis(request(), async () => { throw failure }))
      .rejects.toMatchObject({ name: 'RecallUnavailableError', reason: failure })
  })

  /** Verifies timeout cancels the underlying transport and returns a dependency error. */
  it('aborts the backend request when the remote call times out', async () => {
    const never = new Promise<unknown>(() => undefined)
    let observedSignal: AbortSignal | undefined

    await expect(findApis(request(), async (_request, signal) => {
      observedSignal = signal
      return await never
    }, 1)).rejects.toBeInstanceOf(RecallUnavailableError)

    expect(observedSignal?.aborted).toBe(true)
  })
})

describe('find validation', () => {
  /** Verifies invalid user input is rejected before backend access. */
  it('rejects blank query and invalid filters', () => {
    expect(() => validateRequest(request({ query: ' ' }))).toThrow('empty')
    expect(() => validateRequest(request({ topK: 0 }))).toThrow('between 1 and 50')
    expect(() => validateRequest(request({ targetType: 'bad' as FindRequest['targetType'] })))
      .toThrow('api, workflow, table, or all')
    expect(() => validateRequest(request({ capabilities: ['unknown'] })))
      .toThrow('unsupported semantic-discovery contract')
  })
})

describe('production recall transport', () => {
  /** Verifies find and describe preserve both gateway and cli-service layers in complete URLs. */
  it('targets the gateway cli-service recall endpoints', () => {
    const baseUrl = resolveRecallBaseUrl('https://api.example.com/')

    expect(`${baseUrl}/cli/api/recall`)
      .toBe('https://api.example.com/gateway/cli/cli-service/cli/api/recall')
    expect(`${baseUrl}/cli/api/recall/detail`)
      .toBe('https://api.example.com/gateway/cli/cli-service/cli/api/recall/detail')
  })

  /** Verifies diagnostics return only allowlisted categories and ignore sensitive content. */
  it('classifies only allowlisted failure metadata', () => {
    expect(classifyRemoteFailure({
      message: 'cookie=secret',
      response: { status: 500, data: { token: 'secret' } },
    })).toBe('http_500')
    expect(classifyRemoteFailure({ code: 'ECONNREFUSED', config: { headers: { Cookie: 'secret' } } }))
      .toBe('connection_refused')
    expect(classifyRemoteFailure(new Error('cookie=secret'))).toBe('unknown')
  })
})
