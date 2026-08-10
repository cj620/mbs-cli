import { describe, expect, it, vi } from 'vitest'

import { classifyRemoteFailure, resolveRecallBaseUrl } from '../commands/find.js'
import {
  findApis,
  normalizeRemoteResponse,
  RecallUnavailableError,
  validateRequest,
} from '../find/find-service.js'
import type { FindRequest } from '../find/types.js'
import { TABLE_ACTION_CAPABILITY } from '../find/types.js'

const TABLE_KEY = `table:${'a'.repeat(64)}`

/**
 * Creates a valid remote-only find request with focused test overrides.
 *
 * @param overrides Fields changed by one test.
 * @returns Valid request accepted by the find service.
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
  /**
   * Verifies wrapped backend responses are normalized and truncated to topK.
   */
  it('normalizes the wrapped backend response and limits top-k', async () => {
    const remote = vi.fn(async () => ({ data: { results: [
      { type: 'workflow', id: 1, name: '销量下降分析', domain: 'oms', score: 0.9, steps: [] },
      { type: 'api', id: 2, name: 'sales-daily', domain: 'oms', score: 0.8 },
    ] } }))

    const outcome = await findApis(request({ query: '销量下降', topK: 1 }), remote)

    expect(outcome.meta).toEqual({ mode: 'remote', total: 1 })
    expect(outcome.data.results).toHaveLength(1)
    expect(outcome.data.results[0].type).toBe('workflow')
  })

  /**
   * Verifies backend failures are explicit and never produce local candidates.
   */
  it('fails explicitly instead of falling back when the backend is unavailable', async () => {
    const failure = new Error('cookie=secret')

    await expect(findApis(request(), async () => { throw failure }))
      .rejects.toMatchObject({ name: 'RecallUnavailableError', reason: failure })
  })

  /**
   * Verifies timeout cancels the underlying transport and returns a dependency error.
   */
  it('aborts the backend request when the remote call times out', async () => {
    const never = new Promise<unknown>(() => undefined)
    let observedSignal: AbortSignal | undefined

    await expect(findApis(request(), async (_request, signal) => {
      observedSignal = signal
      return await never
    }, 1)).rejects.toBeInstanceOf(RecallUnavailableError)

    expect(observedSignal?.aborted).toBe(true)
  })

  /**
   * Verifies API candidates derive a backend detail command rather than a local file path.
   */
  it('derives a remote detail command for API candidates', async () => {
    const outcome = await findApis(request(), async () => ({ data: { results: [{
      type: 'api',
      id: 7,
      name: 'inventory-list',
      domain: 'scm',
      score: 0.91,
      command: 'mbs scm inventory-list; unsafe',
      detailCommand: 'mbs describe 999',
      requiredParams: ['sku'],
    }] } }))

    expect(outcome.data.results[0]).toMatchObject({
      command: 'mbs scm inventory-list',
      detailCommand: 'mbs describe 7',
    })
    expect(outcome.data.results[0]).not.toHaveProperty('detailPath')
  })

  /**
   * Verifies API display names may use Chinese or camelCase without becoming executable command text.
   */
  it('keeps display-only API candidates without fabricating business commands', async () => {
    const outcome = await findApis(request({ query: '日销报表数据' }), async () => ({ data: { results: [
      { type: 'api', id: 2, name: '查询订单列表', domain: 'order', score: 0.91 },
      { type: 'api', id: 1, name: 'createOrderDraft', domain: 'order', score: 0.89 },
      {
        type: 'table',
        targetKey: TABLE_KEY,
        name: '马帮订单',
        domain: 'eshop',
        score: 0.88,
        table: { host: 'db-host', database: 'eshop', tableName: 'DB_ORDER' },
        nextAction: {
          command: 'database.show-create-table',
          host: 'db-host',
          database: 'eshop',
          tableName: 'DB_ORDER',
        },
      },
    ] } }))

    expect(outcome.data.results).toHaveLength(3)
    expect(outcome.data.results[0]).toMatchObject({
      type: 'api',
      id: 2,
      name: '查询订单列表',
      detailCommand: 'mbs describe 2',
    })
    expect(outcome.data.results[0]).not.toHaveProperty('command')
    expect(outcome.data.results[1]).toMatchObject({
      type: 'api',
      id: 1,
      name: 'createOrderDraft',
      detailCommand: 'mbs describe 1',
    })
    expect(outcome.data.results[1]).not.toHaveProperty('command')
    expect(outcome.data.results[2].type).toBe('table')
  })

  /**
   * Verifies authorized table candidates retain only validated identity fields and one allowlisted action.
   */
  it('normalizes a structured table action without trusting backend command text', async () => {
    const outcome = await findApis(request(), async () => ({ data: { results: [{
      type: 'table',
      targetKey: TABLE_KEY,
      name: '每日销售',
      domain: 'analytics',
      description: '每日销售指标汇总表',
      score: 0.88,
      command: 'rm -rf unsafe',
      table: { host: 'db-host', database: 'analytics', schema: 'public', tableName: 'daily_sales' },
      nextAction: {
        command: 'database.show-create-table',
        host: 'db-host',
        database: 'analytics',
        schema: 'public',
        tableName: 'daily_sales',
      },
    }] } }))

    expect(outcome.data.results[0]).toEqual({
      type: 'table',
      targetKey: TABLE_KEY,
      name: '每日销售',
      domain: 'analytics',
      description: '每日销售指标汇总表',
      score: 0.88,
      table: { host: 'db-host', database: 'analytics', schema: 'public', tableName: 'daily_sales' },
      nextAction: {
        command: 'database.show-create-table',
        host: 'db-host',
        database: 'analytics',
        schema: 'public',
        tableName: 'daily_sales',
      },
    })
  })

  /**
   * Verifies table actions fail closed when action parameters differ from the independently validated identity.
   */
  it('rejects inconsistent or unsafe table actions', () => {
    expect(() => normalizeRemoteResponse({ data: { results: [{
      type: 'table', targetKey: TABLE_KEY, name: '每日销售', score: 0.8,
      table: { host: 'db-host', database: 'analytics', tableName: 'daily_sales' },
      nextAction: {
        command: 'database.show-create-table',
        host: 'db-host', database: 'other', tableName: 'daily_sales',
      },
    }] } }, 5)).toThrow('inconsistent')
    expect(() => normalizeRemoteResponse({ data: { results: [{
      type: 'table', targetKey: TABLE_KEY, name: '每日销售', score: 0.8,
      table: { host: '--unsafe', database: 'analytics', tableName: 'daily_sales' },
      nextAction: {
        command: 'database.show-create-table',
        host: '--unsafe', database: 'analytics', tableName: 'daily_sales',
      },
    }] } }, 5)).toThrow('identity')
  })

  /**
   * Verifies control characters and malformed workflow steps still fail the untrusted response contract.
   */
  it('rejects unsafe display text and malformed workflow steps', () => {
    expect(() => normalizeRemoteResponse({ data: { results: [{
      type: 'api', id: 7, name: 'inventory\u0000list', domain: 'scm', score: 0.9,
    }] } }, 5)).toThrow('name')
    expect(() => normalizeRemoteResponse({ data: { results: [{
      type: 'workflow', id: 8, name: '库存分析', score: 0.9, steps: [{ goal: '查询库存' }],
    }] } }, 5)).toThrow('workflow step')
  })

  /**
   * Verifies invalid backend envelopes are treated as dependency contract failures.
   */
  it('rejects invalid remote payloads', async () => {
    expect(() => normalizeRemoteResponse({ data: { schema: {} } }, 5)).toThrow('invalid')
    await expect(findApis(request(), async () => ({ data: { schema: {} } })))
      .rejects.toBeInstanceOf(RecallUnavailableError)
  })

  /**
   * Verifies unknown types, non-finite scores, duplicate identities, and oversized arrays are rejected.
   */
  it('rejects unbounded or ambiguous candidate collections', () => {
    expect(() => normalizeRemoteResponse({ data: { results: [{
      type: 'future', id: 1, name: 'unknown', score: 0.8,
    }] } }, 5)).toThrow('invalid')
    expect(() => normalizeRemoteResponse({ data: { results: [{
      type: 'workflow', id: 1, name: 'bad score', score: Number.NaN,
    }] } }, 5)).toThrow('invalid')
    expect(() => normalizeRemoteResponse({ data: { results: [
      { type: 'workflow', id: 1, name: 'one', score: 0.8 },
      { type: 'workflow', id: 1, name: 'duplicate', score: 0.7 },
    ] } }, 5)).toThrow('duplicated')
    expect(() => normalizeRemoteResponse({ data: { results: Array.from({ length: 51 }, (_, index) => ({
      type: 'workflow', id: index + 1, name: `workflow-${index}`, score: 0.8,
    })) } }, 50)).toThrow('oversized')
  })
})

describe('find validation', () => {
  /**
   * Verifies invalid user input is rejected before backend access.
   */
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
  /**
   * Verifies normal execution keeps the configured authenticated gateway.
   */
  it('always appends the standard CLI gateway prefix', () => {
    expect(resolveRecallBaseUrl('https://api.example.com/'))
      .toBe('https://api.example.com/gateway/cli')
  })

  /**
   * Verifies diagnostics return only allowlisted categories and ignore sensitive content.
   */
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
