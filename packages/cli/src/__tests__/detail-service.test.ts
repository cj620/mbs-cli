import { describe, expect, it } from 'vitest'

import { describeApi, fetchApiDetail, normalizeApiDetailResponse } from '../find/detail-service.js'
import { RecallUnavailableError } from '../find/find-service.js'

describe('backend API detail', () => {
  /** Verifies QUERY/COMPUTE command-facing details preserve the complete remote body by identity. */
  it.each(['QUERY', 'COMPUTE'])('fetches the exact %s detail body without normalization', async (operationType) => {
    const body = {
      code: 200,
      data: { id: 7, operationType, extra: { owner: 'backend' } },
      msg: 'ok',
    }

    await expect(fetchApiDetail(7, async () => body)).resolves.toBe(body)
  })

  /**
   * Verifies both read-only types preserve their identity, field tree and body encoding metadata,
   * while non-execution metadata is omitted before the API-ID request consumer receives the detail.
   */
  it.each(['QUERY', 'COMPUTE'])('normalizes a wrapped approved %s definition', (operationType) => {
    const detail = normalizeApiDetailResponse({ data: {
      id: 7,
      name: 'order-list',
      domain: 'oms',
      version: 'v1',
      description: '查询订单',
      method: 'POST',
      path: '/orders/list',
      operationType,
      requestBodyMode: 'MULTIPART',
      requestMediaType: 'multipart/form-data',
      createBy: 'sensitive-user',
      request: {
        body: [{
          name: 'filter',
          type: 'object',
          required: true,
          serializationStyle: 'BRACKET',
          children: [{
            name: 'attachment',
            type: 'string',
            required: true,
            valueKind: 'FILE',
            partContentType: 'application/pdf',
            filenamePolicy: 'FIXED',
            partFilename: 'contract.pdf',
            children: [],
          }],
        }],
      },
      response: [{ name: 'orderNo', type: 'string', children: [] }],
    } })

    expect(detail.command).toBe('mbs oms order-list')
    expect(detail.operationType).toBe(operationType)
    expect(detail.version).toBe('v1')
    expect(detail.requestBodyMode).toBe('MULTIPART')
    expect(detail.requestMediaType).toBe('multipart/form-data')
    expect(detail.request.body[0].serializationStyle).toBe('BRACKET')
    expect(detail.request.body[0].children[0]).toMatchObject({
      name: 'attachment',
      valueKind: 'FILE',
      partContentType: 'application/pdf',
      filenamePolicy: 'FIXED',
      partFilename: 'contract.pdf',
    })
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
    expect(detail.requestBodyMode).toBe('NONE')
    expect(detail).not.toHaveProperty('command')
  })

  /**
   * Verifies unsupported types and malformed definitions cannot enter the agent execution flow.
   */
  it('rejects unsupported and malformed detail responses', () => {
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

  /** Verifies writes, OTHER, unknown, absent and empty operation types fail before request encoding. */
  it.each(['CREATE', 'UPDATE', 'DELETE', 'OTHER', 'UNKNOWN', '', null, undefined])(
    'rejects unsupported operation type %s',
    (operationType) => {
      expect(() => normalizeApiDetailResponse({
        data: { id: 7, name: 'order-list', domain: 'oms', operationType },
      })).toThrow('invalid')
    },
  )

  /** Verifies the API-ID request seam can load COMPUTE metadata without converting it to QUERY. */
  it('loads a COMPUTE definition through the bounded backend detail path', async () => {
    await expect(describeApi(7, async () => ({ data: {
      id: 7,
      name: 'sales-total',
      domain: 'oms',
      operationType: 'COMPUTE',
      method: 'POST',
      path: '/orders/total',
      request: {},
      response: [],
    } }))).resolves.toMatchObject({ operationType: 'COMPUTE', method: 'POST', path: '/orders/total' })
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
