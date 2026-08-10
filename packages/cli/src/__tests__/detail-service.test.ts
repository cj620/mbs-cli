import { describe, expect, it } from 'vitest'

import { describeApi, normalizeApiDetailResponse } from '../find/detail-service.js'
import { RecallUnavailableError } from '../find/find-service.js'

describe('backend API detail', () => {
  /**
   * Verifies the complete backend field tree is preserved while non-execution metadata is omitted.
   */
  it('normalizes a wrapped approved query definition', () => {
    const detail = normalizeApiDetailResponse({ data: {
      id: 7,
      name: 'order-list',
      domain: 'oms',
      version: 'v1',
      description: '查询订单',
      method: 'POST',
      path: '/orders/list',
      operationType: 'QUERY',
      createBy: 'sensitive-user',
      request: {
        body: [{
          name: 'filter',
          type: 'object',
          required: true,
          children: [{ name: 'shopId', type: 'integer', required: true, children: [] }],
        }],
      },
      response: [{ name: 'orderNo', type: 'string', children: [] }],
    } })

    expect(detail.command).toBe('mbs oms order-list')
    expect(detail.version).toBe('v1')
    expect(detail.request.body[0].children[0].name).toBe('shopId')
    expect(detail.response[0].name).toBe('orderNo')
    expect(detail).not.toHaveProperty('createBy')
  })

  /**
   * Verifies localized display metadata does not block safe ID-based detail resolution or fabricate a command.
   */
  it('returns localized display-only details without a business command', () => {
    const detail = normalizeApiDetailResponse({ data: {
      id: 2,
      name: '查询订单列表',
      domain: '订单中心',
      description: '分页查询订单',
      operationType: 'QUERY',
      request: {},
      response: [],
    } })

    expect(detail).toMatchObject({ id: 2, name: '查询订单列表', domain: '订单中心' })
    expect(detail).not.toHaveProperty('command')
  })

  /**
   * Verifies non-query and malformed definitions cannot enter the agent execution flow.
   */
  it('rejects non-query and malformed detail responses', () => {
    expect(() => normalizeApiDetailResponse({
      data: { id: 7, name: 'write', domain: 'oms', operationType: 'UPDATE' },
    })).toThrow('invalid')
    expect(() => normalizeApiDetailResponse({
      data: { id: 7, name: 'order-list', domain: 'oms', operationType: 'QUERY', response: [{}] },
    })).toThrow('field')
    expect(() => normalizeApiDetailResponse({
      data: { id: 7, name: 'order-list\u0000unsafe', domain: 'oms', operationType: 'QUERY' },
    })).toThrow('name')
  })

  /**
   * Verifies invalid IDs fail locally without invoking the backend.
   */
  it('rejects invalid IDs before backend access', async () => {
    let calls = 0
    await expect(describeApi(0, async () => {
      calls += 1
      return {}
    })).rejects.toThrow('positive integer')
    expect(calls).toBe(0)
  })

  /**
   * Verifies detail dependency failures remain explicit and never read local documents.
   */
  it('wraps backend failures without a local fallback', async () => {
    await expect(describeApi(7, async () => {
      throw new Error('secret response')
    })).rejects.toBeInstanceOf(RecallUnavailableError)
  })
})
