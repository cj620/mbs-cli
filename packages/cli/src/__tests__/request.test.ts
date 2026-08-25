import { describe, expect, it, vi } from 'vitest'

import Request from '../commands/request.js'
import { createMetadataReadOnlyRequest, createReadOnlyRequest } from '../request/request-input.js'

describe('public authenticated request command', () => {
  /**
   * Verifies a dynamic query POST keeps the relative interface path and sends
   * independently parsed query parameters and body through the shared client.
   */
  it('sends a validated POST through the authenticated gateway client', async () => {
    const request = vi.fn(async () => ({ rows: [] }))
    const output = vi.fn()

    await Request.prototype.run.call({
      parse: vi.fn(async () => ({
        args: { method: 'post', path: '/yypms/pms/middlePanel/getMiddlePanelList' },
        flags: { body: '{"page":1,"pageSize":20}', params: '{"locale":"zh-CN"}' },
      })),
      client: { request },
      output,
    })

    expect(request).toHaveBeenCalledWith(
      'POST',
      '/yypms/pms/middlePanel/getMiddlePanelList',
      { body: { page: 1, pageSize: 20 }, params: { locale: 'zh-CN' } },
    )
    expect(output).toHaveBeenCalledWith({ rows: [] })
  })

  /** Verifies GET accepts structured query parameters and never supplies a body. */
  it('sends GET query parameters without a request body', () => {
    expect(createReadOnlyRequest('GET', '/v1/orders', undefined, '{"status":"open"}'))
      .toEqual({
        method: 'GET',
        path: '/v1/orders',
        options: { params: { status: 'open' } },
      })
  })

  /** Verifies authoritative urlencoded metadata produces bytes and Content-Type instead of JSON. */
  it('encodes an API-ID form request from backend metadata', async () => {
    const request = await createMetadataReadOnlyRequest({
      id: 8,
      name: 'employee-list',
      domain: 'hr',
      method: 'POST',
      path: '/hr/personal/getAll',
      operationType: 'QUERY',
      requestBodyMode: 'FORM_URLENCODED',
      requestMediaType: 'application/x-www-form-urlencoded',
      request: {
        body: [
          { name: 'groupCompanyId', required: true, children: [] },
          { name: 'pagesize', children: [] },
        ],
      },
      response: [],
    }, undefined, undefined, '{"groupCompanyId":1,"pagesize":100}')

    expect(request).toEqual({
      method: 'POST',
      path: '/hr/personal/getAll',
      options: {
        body: 'groupCompanyId=1&pagesize=100',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    })
  })

  /** Verifies supplied methods and concrete parameterized paths must agree with the backend detail. */
  it('rejects method or path mismatches against API-ID metadata', async () => {
    const detail = {
      id: 9,
      name: 'order-detail',
      domain: 'oms',
      method: 'GET',
      path: '/orders/{orderId}',
      operationType: 'QUERY' as const,
      requestBodyMode: 'NONE' as const,
      request: {},
      response: [],
    }
    await expect(createMetadataReadOnlyRequest(detail, 'POST', '/orders/10')).rejects.toThrow('method')
    await expect(createMetadataReadOnlyRequest(detail, 'GET', '/other/10')).rejects.toThrow('path')
    await expect(createMetadataReadOnlyRequest(detail, undefined, undefined)).rejects.toThrow('concrete path')
    await expect(createMetadataReadOnlyRequest(detail, 'GET', '/orders/10')).resolves.toMatchObject({
      method: 'GET',
      path: '/orders/10',
    })
  })

  /**
   * Verifies host-changing, ambiguous, unresolved, and traversal paths are
   * rejected before the authenticated client can send a Cookie.
   */
  it.each([
    'https://outside.example/v1/orders',
    '//outside.example/v1/orders',
    'v1/orders',
    '/v1/../admin',
    '/v1/%2e%2e/admin',
    '/v1/%252e%252e/admin',
    '/v1\\orders',
    '/v1/orders?status=open',
    '/v1/orders#result',
    '/v1/orders/{id}',
    '/v1/orders\nnext',
  ])('rejects unsafe path %s', (path) => {
    expect(() => createReadOnlyRequest('GET', path)).toThrow('relative interface path')
  })

  /** Verifies only the project-approved read-only HTTP methods are accepted. */
  it('rejects unsupported HTTP methods and GET bodies', () => {
    expect(() => createReadOnlyRequest('DELETE', '/v1/orders')).toThrow('GET or POST')
    expect(() => createReadOnlyRequest('GET', '/v1/orders', '{}')).toThrow('GET request must not include a body')
  })

  /** Verifies JSON flags fail closed on invalid structure or excessive input size. */
  it('rejects invalid JSON flags and non-object query parameters', () => {
    expect(() => createReadOnlyRequest('POST', '/v1/orders', '{')).toThrow('body must be valid JSON')
    expect(() => createReadOnlyRequest('GET', '/v1/orders', undefined, '[]'))
      .toThrow('params must be a JSON object')
    expect(() => createReadOnlyRequest('POST', '/v1/orders', `"${'x'.repeat(1_000_001)}"`))
      .toThrow('body is too large')
  })

  /** Verifies command metadata exposes request publicly with usage-oriented examples. */
  it('publishes a discoverable request command contract', () => {
    expect(Request.hidden).not.toBe(true)
    expect(Request.args.method.required).toBe(false)
    expect(Request.args.path.required).toBe(false)
    expect(Request.flags['api-id']).toBeDefined()
    expect(Request.flags['body-file']).toBeDefined()
    expect(Request.examples.join('\n')).toContain('mbs request POST')
  })
})
