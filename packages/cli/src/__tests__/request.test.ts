import { describe, expect, it, vi } from 'vitest'

import Request from '../commands/request.js'
import { createReadOnlyRequest } from '../request/request-input.js'

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
    expect(Request.args.method.required).toBe(true)
    expect(Request.args.path.required).toBe(true)
    expect(Request.examples.join('\n')).toContain('mbs request POST')
  })
})
