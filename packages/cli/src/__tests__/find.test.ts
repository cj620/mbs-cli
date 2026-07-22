import { describe, expect, it, vi } from 'vitest'

import { findApis, normalizeRemoteResponse, validateRequest } from '../find/find-service.js'
import { searchLocalManifest } from '../find/local-search.js'
import type { FindRequest, SkillManifest } from '../find/types.js'

const manifest: SkillManifest = {
  apiCards: [
    {
      id: 'inventory-list',
      name: 'inventory-list',
      domain: 'scm',
      description: '查询商品SKU可售库存和缺货情况',
      command: 'mbs scm inventory-list',
      keywords: ['库存', '缺货', 'SKU'],
      requiredParams: ['sku'],
    },
    {
      id: 'order-list',
      name: 'order-list',
      domain: 'oms',
      description: '查询店铺订单明细',
      command: 'mbs oms order-list',
      keywords: ['订单', '店铺'],
    },
  ],
  modules: [{
    name: 'org',
    description: '组织架构与店铺人员',
    keywords: ['组织', '店铺', '员工'],
    commands: ['mbs org shops'],
  }],
}

function request(overrides: Partial<FindRequest> = {}): FindRequest {
  return { query: '库存', targetType: 'all', topK: 5, ...overrides }
}

describe('local API search', () => {
  it('ranks exact action names before business keyword matches', () => {
    const result = searchLocalManifest(manifest, request({ query: 'inventory-list' }))

    expect(result.results[0]).toMatchObject({ name: 'inventory-list', score: 1, command: 'mbs scm inventory-list' })
  })

  it('ranks action prefixes before keyword matches', () => {
    const result = searchLocalManifest(manifest, request({ query: 'inventory' }))

    expect(result.results[0]).toMatchObject({ name: 'inventory-list', score: 0.9 })
  })

  it('uses the keyword tier before Chinese bigram similarity', () => {
    const result = searchLocalManifest(manifest, request({ query: '缺货' }))

    expect(result.results[0]).toMatchObject({ name: 'inventory-list', score: 0.8 })
  })

  it('orders tied scores deterministically by domain and name', () => {
    const tied: SkillManifest = { apiCards: [
      { id: 2, name: 'zeta', domain: 'z-domain', command: 'mbs z-domain zeta', keywords: ['风险'] },
      { id: 1, name: 'beta', domain: 'a-domain', command: 'mbs a-domain beta', keywords: ['风险'] },
      { id: 3, name: 'alpha', domain: 'a-domain', command: 'mbs a-domain alpha', keywords: ['风险'] },
    ] }

    const result = searchLocalManifest(tied, request({ query: '风险' }))

    expect(result.results.map((item) => item.name)).toEqual(['alpha', 'beta', 'zeta'])
  })

  it('supports domain filtering, Chinese bigrams, and top-k truncation', () => {
    const result = searchLocalManifest(manifest, request({ query: '商品库存风险', domain: 'scm', topK: 1 }))

    expect(result.results).toHaveLength(1)
    expect(result.results[0].domain).toBe('scm')
    expect(result.results[0].requiredParams).toEqual(['sku'])
  })

  it('returns an actionable hint when there is no candidate', () => {
    const result = searchLocalManifest(manifest, request({ query: '完全无关的气象数据' }))

    expect(result.results).toEqual([])
    expect(result.hint?.reason).toBe('NO_RESULT')
  })

  it('keeps static module commands alongside generated API cards', () => {
    const result = searchLocalManifest(manifest, request({ query: 'shops' }))

    expect(result.results[0]).toMatchObject({ command: 'mbs org shops', domain: 'org' })
  })
})

describe('remote recall and fallback', () => {
  it('normalizes the wrapped backend response and limits top-k', async () => {
    const remote = vi.fn(async () => ({ data: { results: [
      { type: 'workflow', id: 1, name: '销量下降分析', domain: 'oms', score: 0.9, steps: [] },
      { type: 'api', id: 2, name: 'sales-daily', domain: 'oms', score: 0.8 },
    ] } }))

    const outcome = await findApis(request({ query: '销量下降', topK: 1 }), manifest, remote)

    expect(outcome.meta).toEqual({ mode: 'remote', total: 1 })
    expect(outcome.data.results).toHaveLength(1)
    expect(outcome.data.results[0].type).toBe('workflow')
  })

  it('falls back to the same result shape when the remote service fails', async () => {
    const outcome = await findApis(request(), manifest, async () => { throw new Error('cookie=secret') })

    expect(outcome.meta).toMatchObject({ mode: 'local', fallback: true, fallbackReason: 'remote_unavailable' })
    expect(outcome.data.results[0]).toMatchObject({ type: 'api', domain: 'scm' })
    expect(JSON.stringify(outcome)).not.toContain('secret')
  })

  it('falls back when the remote call times out', async () => {
    const never = new Promise<unknown>(() => undefined)
    const outcome = await findApis(request(), manifest, async () => await never, 1)

    expect(outcome.meta).toEqual({ mode: 'local', total: 1, fallback: true, fallbackReason: 'remote_unavailable' })
    expect(outcome.data.results[0].name).toBe('inventory-list')
  })

  it('keeps local and remote API result field structures isomorphic', async () => {
    const local = await findApis(request(), manifest)
    const remote = await findApis(request(), manifest, async () => ({ data: { results: [{
      type: 'api', id: 'inventory-list', name: 'inventory-list', domain: 'scm',
      description: '查询商品SKU可售库存和缺货情况', score: 1,
      command: 'mbs scm inventory-list', detailPath: 'references/scm/inventory-list.md', requiredParams: ['sku'],
    }] } }))

    expect(Object.keys(remote.data.results[0]).sort()).toEqual(Object.keys(local.data.results[0]).sort())
    expect(remote.data.results[0].requiredParams).toEqual(['sku'])
    expect(remote.data.results[0].mainReturns).toEqual([])
  })

  it('rejects invalid remote payloads', () => {
    expect(() => normalizeRemoteResponse({ data: { schema: {} } }, 5)).toThrow('invalid')
  })
})

describe('find validation', () => {
  it('rejects blank query and out-of-range topK', () => {
    expect(() => validateRequest(request({ query: ' ' }))).toThrow('empty')
    expect(() => validateRequest(request({ topK: 0 }))).toThrow('between 1 and 50')
    expect(() => validateRequest(request({ targetType: 'bad' as FindRequest['targetType'] }))).toThrow('api, workflow, or all')
  })
})
