import { describe, expect, it, vi } from 'vitest'
import { Readable } from 'node:stream'
import type { APIClient } from '@mb-it-org/shared'
import { buildApp } from '../commands/serve.js'
import { buildRoutes, type AuditManifest } from '../serve/router.js'
import { isAllowedOrigin } from '../serve/cors.js'

const manifest: AuditManifest = {
  schemaVersion: '1',
  manifestVersion: '2026-05-20T00:00:00+08:00',
  modules: [
    {
      domain: 'reports',
      pathPrefix: '',
      actions: [
        {
          name: 'search',
          description: '鍒嗛〉鑾峰彇璐﹀彿鍒楄〃',
          method: 'POST',
          path: '/gateway/report-service/reports/search',
        },
      ],
    },
    {
      domain: 'org',
      actions: [
        {
          name: 'site-detail',
          description: '鑾峰彇绔欑偣璇︽儏',
          method: 'GET',
          path: '/v1/org/sites/{siteId}',
        },
      ],
    },
  ],
}

function fakeClient(
  get: unknown = vi.fn(),
  post: unknown = vi.fn(),
  request: unknown = vi.fn(),
  postStream: unknown = vi.fn(),
): APIClient {
  return { get, post, request, postStream } as unknown as APIClient
}

describe('buildRoutes', () => {
  it('maps domain/action to /api routes and preserves method', () => {
    const routes = buildRoutes(manifest)
    expect(routes).toHaveLength(2)
    expect(routes[0]).toMatchObject({
      method: 'POST',
      routeUrl: '/api/reports/search',
      domain: 'reports',
      action: 'search',
    })
    expect(routes[1]).toMatchObject({
      method: 'GET',
      routeUrl: '/api/org/site-detail/:siteId',
    })
  })
})

describe('isAllowedOrigin', () => {
  it.each([
    ['http://localhost', true],
    ['http://localhost:5173', true],
    ['http://127.0.0.1:7878', true],
    ['https://127.0.0.1', true],
    ['null', true],
    ['http://example.com', false],
    [undefined, false],
    ['', false],
  ])('%s -> %s', (origin, expected) => {
    expect(isAllowedOrigin(origin as string | undefined)).toBe(expected)
  })
})

describe('serve app', () => {
  it('POST route forwards body to APIClient.post and wraps response', async () => {
    const post = vi.fn().mockResolvedValue({ items: [{ id: 1 }] })
    const app = buildApp(manifest, async () => fakeClient(vi.fn(), post))

    const res = await app.inject({
      method: 'POST',
      url: '/api/reports/search',
      payload: { currentPage: 1, pageSize: 10 },
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ ok: true, data: { items: [{ id: 1 }] } })
    expect(post).toHaveBeenCalledWith('/gateway/report-service/reports/search', { currentPage: 1, pageSize: 10 })
  })

  it('GET route forwards path params + query', async () => {
    const get = vi.fn().mockResolvedValue({ siteId: 'abc', name: 'foo' })
    const app = buildApp(manifest, async () => fakeClient(get))

    const res = await app.inject({
      method: 'GET',
      url: '/api/org/site-detail/abc?include=meta',
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body).data).toEqual({ siteId: 'abc', name: 'foo' })
    expect(get).toHaveBeenCalledWith('/v1/org/sites/abc', { params: { include: 'meta' } })
  })

  it('returns shaped error when client throws MBSError', async () => {
    const { MBSError } = await import('@mb-it-org/shared')
    const post = vi.fn().mockRejectedValue(new MBSError('boom', 'validation', 'check input'))
    const app = buildApp(manifest, async () => fakeClient(vi.fn(), post))

    const res = await app.inject({ method: 'POST', url: '/api/reports/search', payload: {} })

    expect(res.statusCode).toBe(500)
    expect(JSON.parse(res.body)).toEqual({
      ok: false,
      error: { type: 'validation', message: 'boom', hint: 'check input' },
    })
  })

  it('reflects allowed Origin in CORS header', async () => {
    const app = buildApp(manifest, async () => fakeClient(vi.fn(), vi.fn().mockResolvedValue({})))
    const res = await app.inject({
      method: 'POST',
      url: '/api/reports/search',
      headers: { origin: 'http://localhost:5173' },
      payload: {},
    })
    expect(res.headers['access-control-allow-origin']).toBe('http://localhost:5173')
  })

  it('does not reflect disallowed Origin', async () => {
    const app = buildApp(manifest, async () => fakeClient(vi.fn(), vi.fn().mockResolvedValue({})))
    const res = await app.inject({
      method: 'POST',
      url: '/api/reports/search',
      headers: { origin: 'http://evil.example' },
      payload: {},
    })
    expect(res.headers['access-control-allow-origin']).toBeUndefined()
  })

  it('exposes /__routes for discovery', async () => {
    const app = buildApp(manifest, async () => fakeClient())
    const res = await app.inject({ method: 'GET', url: '/__routes' })
    const body = JSON.parse(res.body)
    expect(body.ok).toBe(true)
    expect(body.data).toHaveLength(2)
  })

  it('exposes project APIs as /api routes', async () => {
    const app = buildApp(undefined, async () => fakeClient(), { projectApis: true })
    const res = await app.inject({ method: 'GET', url: '/__routes' })
    const body = JSON.parse(res.body)

    expect(body.data).toEqual(expect.arrayContaining([
      expect.objectContaining({ method: 'GET', url: '/api/test/whoami' }),
      expect.objectContaining({ method: 'GET', url: '/api/org/platforms' }),
      expect.objectContaining({ method: 'GET', url: '/api/shops/health' }),
      expect.objectContaining({ method: 'GET', url: '/api/doris/schemas' }),
      expect.objectContaining({ method: 'POST', url: '/api/doris/query' }),
    ]))
  })

  it('project API route forwards org platforms request', async () => {
    const get = vi.fn().mockResolvedValue({ items: [] })
    const app = buildApp(undefined, async () => fakeClient(get), { projectApis: true })

    const res = await app.inject({
      method: 'GET',
      url: '/api/org/platforms',
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ ok: true, data: { items: [] } })
    expect(get).toHaveBeenCalledWith('/erpOrder/erpOrder/saleReport/getPlatformList', { params: {} })
  })

  it('project API exposes local test whoami without an upstream client call', async () => {
    const get = vi.fn()
    const app = buildApp(undefined, async () => fakeClient(get), { projectApis: true })

    const res = await app.inject({
      method: 'GET',
      url: '/api/test/whoami',
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual(
      expect.objectContaining({
        ok: expect.any(Boolean),
      }),
    )
    expect(get).not.toHaveBeenCalled()
  })

  it('project API ndjson route returns raw stream content', async () => {
    const postStream = vi.fn().mockResolvedValue(Readable.from(['{"type":"row","value":1}\n']))
    const app = buildApp(undefined, async () => fakeClient(vi.fn(), vi.fn(), vi.fn(), postStream), { projectApis: true })

    const res = await app.inject({
      method: 'POST',
      url: '/api/doris/query',
      payload: { sql: 'select 1' },
    })

    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('application/x-ndjson')
    expect(res.body).toBe('{"type":"row","value":1}\n')
    expect(postStream).toHaveBeenCalledWith('/gateway/cli-service/cli/doris/query', { sql: 'select 1' })
  })

  it('proxy-all GET route forwards arbitrary upstream path and query', async () => {
    const request = vi.fn().mockResolvedValue({ items: [] })
    const app = buildApp(undefined, async () => fakeClient(vi.fn(), vi.fn(), request), { proxyAll: true })

    const res = await app.inject({
      method: 'GET',
      url: '/proxy/gateway/report-service/reports/search?currentPage=1',
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ ok: true, data: { items: [] } })
    expect(request).toHaveBeenCalledWith('GET', '/gateway/report-service/reports/search', {
      params: { currentPage: '1' },
      body: undefined,
    })
  })

  it('proxy-all POST route forwards arbitrary upstream path with body', async () => {
    const request = vi.fn().mockResolvedValue({ total: 1 })
    const app = buildApp(undefined, async () => fakeClient(vi.fn(), vi.fn(), request), { proxyAll: true })

    const res = await app.inject({
      method: 'POST',
      url: '/proxy/gateway/report-service/reports/search',
      payload: { currentPage: 1, pageSize: 10 },
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ ok: true, data: { total: 1 } })
    expect(request).toHaveBeenCalledWith('POST', '/gateway/report-service/reports/search', {
      params: {},
      body: { currentPage: 1, pageSize: 10 },
    })
  })

  it('proxy-all does not expose mutation methods', async () => {
    const request = vi.fn().mockResolvedValue({})
    const app = buildApp(undefined, async () => fakeClient(vi.fn(), vi.fn(), request), { proxyAll: true })

    const res = await app.inject({
      method: 'DELETE',
      url: '/proxy/gateway/report-service/reports/search',
    })

    expect(res.statusCode).toBe(404)
    expect(request).not.toHaveBeenCalled()
  })
})

