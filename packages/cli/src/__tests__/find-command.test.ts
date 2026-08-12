import { describe, expect, it, vi } from 'vitest'

import Describe from '../commands/describe.js'
import Find from '../commands/find.js'
import { RecallUnavailableError } from '../find/find-service.js'

describe('find command contract', () => {
  /**
   * Verifies query and candidate filters remain bounded while ordinary examples keep the first recall domain-free.
   */
  it('requires a query and constrains target type and top-k flags', () => {
    const topK = Find.flags['top-k'] as unknown as { min: number; max: number }
    expect(Find.args.query.required).toBe(true)
    expect(Find.flags['target-type'].options).toEqual(['api', 'workflow', 'table', 'all'])
    expect(topK.min).toBe(1)
    expect(topK.max).toBe(50)
    expect(Find.flags.domain.description).toContain('explicit user scope')
    expect(Find.examples.every((example) => !example.includes('--domain'))).toBe(true)
    expect(Find.flags.diagnostics.default).toBe(false)
    expect(Find.flags).not.toHaveProperty('cookie-prompt')
    expect(Describe.flags).not.toHaveProperty('cookie-prompt')
  })

  /**
   * Verifies local input errors retain the shared validation failure envelope.
   */
  it('formats validation failures as the shared structured error contract', async () => {
    const log = vi.fn()
    const exit = vi.fn()

    await Find.prototype.catch.call({ log, exit } as never, new Error('query must not be empty'))

    expect(JSON.parse(log.mock.calls[0][0] as string)).toEqual({
      ok: false,
      error: {
        type: 'validation',
        message: 'query must not be empty',
        hint: 'Run `mbs find --help` to check supported arguments',
      },
    })
    expect(exit).toHaveBeenCalledWith(1)
  })

  /**
   * Verifies backend failures are explicit, sanitized, and do not claim a local fallback.
   */
  it('formats recall dependency failures without local candidates', async () => {
    const log = vi.fn()
    const exit = vi.fn()
    const failure = new RecallUnavailableError(Object.assign(new Error('cookie=secret'), {
      code: 'ECONNREFUSED',
    }))

    await Find.prototype.catch.call({
      log,
      exit,
      includeDiagnostics: true,
    } as never, failure)

    expect(JSON.parse(log.mock.calls[0][0] as string)).toEqual({
      ok: false,
      error: {
        type: 'semantic-discovery',
        message: 'Semantic discovery service is unavailable',
        hint: 'Retry after cli-service, embedding, Milvus, and permission metadata are available',
      },
      meta: { diagnostics: { remoteFailure: 'connection_refused' } },
    })
    expect(exit).toHaveBeenCalledWith(1)
  })
})
