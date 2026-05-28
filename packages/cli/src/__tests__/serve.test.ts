import { describe, expect, it, vi } from 'vitest'
import type { APIClient } from '@mb-it-org/shared'
import { buildApp } from '../commands/serve.js'
import { buildRoutes, type AuditManifest } from '../serve/router.js'
import { isAllowedOrigin } from '../serve/cors.js'

const manifest: AuditManifest = {
  schemaVersion: '1',
  manifestVersion: '2026-05-20T00:00:00+08:00',
  modules: [
    {
      domain: 'account',
      pathPrefix: '',
      actions: [
        {
          name: 'page',
          description: '分页获取账号列表',
          method: 'POST',
          path: '/gateway/account-center-service/account/page/noauth',
        },
      ],
    },
    {
      domain: 'org',
      actions: [
        {
          name: 'site-detail',
          description: '获取站点详情',
          method: 'GET',
          path: '/v1/org/sites/{siteId}',
        },
      ],
    },
  ],
}

function fakeClient(get: unknown = vi.fn(), post: unknown = vi.fn(), request: unknown = vi.fn()): APIClient {
  return { get, post, request } as unknown as APIClient
}

describe('buildRoutes', () => {
  it('maps domain/action to /api routes and preserves method', () => {
    const routes = buildRoutes(manifest)
    expect(routes).toHaveLength(2)
    expect(routes[0]).toMatchObject({
      method: 'POST',
      routeUrl: '/api/account/page',
      domain: 'account',
      action: 'page',
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
      url: '/api/account/page',
      payload: { currentPage: 1, pageSize: 10 },
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ ok: true, data: { items: [{ id: 1 }] } })
    expect(post).toHaveBeenCalledWith('/gateway/account-center-service/account/page/noauth', { currentPage: 1, pageSize: 10 })
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

    const res = await app.inject({ method: 'POST', url: '/api/account/page', payload: {} })

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
      url: '/api/account/page',
      headers: { origin: 'http://localhost:5173' },
      payload: {},
    })
    expect(res.headers['access-control-allow-origin']).toBe('http://localhost:5173')
  })

  it('does not reflect disallowed Origin', async () => {
    const app = buildApp(manifest, async () => fakeClient(vi.fn(), vi.fn().mockResolvedValue({})))
    const res = await app.inject({
      method: 'POST',
      url: '/api/account/page',
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

  it('proxy-all GET route forwards arbitrary upstream path and query', async () => {
    const request = vi.fn().mockResolvedValue({ items: [] })
    const app = buildApp(undefined, async () => fakeClient(vi.fn(), vi.fn(), request), { proxyAll: true })

    const res = await app.inject({
      method: 'GET',
      url: '/proxy/gateway/account-center-service/account/page/noauth?currentPage=1',
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ ok: true, data: { items: [] } })
    expect(request).toHaveBeenCalledWith('GET', '/gateway/account-center-service/account/page/noauth', {
      params: { currentPage: '1' },
      body: undefined,
    })
  })

  it('proxy-all POST route forwards arbitrary upstream path with body', async () => {
    const request = vi.fn().mockResolvedValue({ total: 1 })
    const app = buildApp(undefined, async () => fakeClient(vi.fn(), vi.fn(), request), { proxyAll: true })

    const res = await app.inject({
      method: 'POST',
      url: '/proxy/gateway/account-center-service/account/page/noauth',
      payload: { currentPage: 1, pageSize: 10 },
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ ok: true, data: { total: 1 } })
    expect(request).toHaveBeenCalledWith('POST', '/gateway/account-center-service/account/page/noauth', {
      params: {},
      body: { currentPage: 1, pageSize: 10 },
    })
  })

  it('proxy-all does not expose mutation methods', async () => {
    const request = vi.fn().mockResolvedValue({})
    const app = buildApp(undefined, async () => fakeClient(vi.fn(), vi.fn(), request), { proxyAll: true })

    const res = await app.inject({
      method: 'DELETE',
      url: '/proxy/gateway/account-center-service/account/page/noauth',
    })

    expect(res.statusCode).toBe(404)
    expect(request).not.toHaveBeenCalled()
  })
})
