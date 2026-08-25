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
  it('POST route forwards body and query to APIClient.post and wraps response', async () => {
    const post = vi.fn().mockResolvedValue({ items: [{ id: 1 }] })
    const app = buildApp(manifest, async () => fakeClient(vi.fn(), post))

    const res = await app.inject({
      method: 'POST',
      url: '/api/reports/search?traceId=abc',
      payload: { currentPage: 1, pageSize: 10 },
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ ok: true, data: { items: [{ id: 1 }] } })
    expect(post).toHaveBeenCalledWith(
      '/gateway/report-service/reports/search',
      { currentPage: 1, pageSize: 10 },
      { params: { traceId: 'abc' } },
    )
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
    // Derived from the generated project manifest so it survives manifest changes.
    const { projectManifest } = await import('../serve/generated-manifest.js')
    const app = buildApp(undefined, async () => fakeClient(), { projectApis: true })
    const res = await app.inject({ method: 'GET', url: '/__routes' })
    const body = JSON.parse(res.body)

    // the local test route is always exposed
    expect(body.data).toEqual(expect.arrayContaining([
      expect.objectContaining({ method: 'GET', url: '/api/test/whoami' }),
    ]))
    // every generated action is exposed under /api/<domain>/<action>
    for (const mod of projectManifest.modules) {
      for (const action of mod.actions) {
        expect(body.data).toEqual(expect.arrayContaining([
          expect.objectContaining({ domain: mod.domain, action: action.name }),
        ]))
      }
    }
  })

  /** Verifies metadata-aware serve routes use the shared urlencoded encoder and Content-Type. */
  it('encodes metadata-aware form routes before forwarding', async () => {
    const encodedManifest: AuditManifest = {
      schemaVersion: '1',
      manifestVersion: '2026-08-25T00:00:00+08:00',
      modules: [{
        domain: 'hr',
        actions: [{
          name: 'employees',
          description: 'List employees',
          method: 'POST',
          path: '/hr/personal/getAll',
          requestBodyMode: 'FORM_URLENCODED',
          requestMediaType: 'application/x-www-form-urlencoded',
          request: {
            body: {
              type: 'object',
              required: ['groupCompanyId'],
              properties: {
                groupCompanyId: { type: 'integer' },
                pagesize: { type: 'integer' },
              },
            },
          },
        }],
      }],
    }
    const post = vi.fn().mockResolvedValue({ items: [] })
    const app = buildApp(encodedManifest, async () => fakeClient(vi.fn(), post))

    const response = await app.inject({
      method: 'POST',
      url: '/api/hr/employees',
      payload: { groupCompanyId: 1, pagesize: 100 },
    })

    expect(response.statusCode).toBe(200)
    expect(post).toHaveBeenCalledWith('/hr/personal/getAll', 'groupCompanyId=1&pagesize=100', {
      params: {},
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
  })

  /** Verifies the unauthenticated local gateway cannot turn multipart FILE metadata into filesystem reads. */
  it('rejects local file reads from metadata-aware serve routes', async () => {
    const fileManifest: AuditManifest = {
      schemaVersion: '1',
      manifestVersion: '2026-08-25T00:00:00+08:00',
      modules: [{
        domain: 'files',
        actions: [{
          name: 'inspect',
          description: 'Inspect file',
          method: 'POST',
          path: '/files/inspect',
          requestBodyMode: 'MULTIPART',
          request: {
            body: {
              type: 'object',
              properties: { attachment: { type: 'string', valueKind: 'FILE' } },
            },
          },
        }],
      }],
    }
    const post = vi.fn()
    const app = buildApp(fileManifest, async () => fakeClient(vi.fn(), post))

    const response = await app.inject({
      method: 'POST',
      url: '/api/files/inspect',
      payload: { attachment: 'C:\\private\\secret.txt' },
    })

    expect(response.statusCode).toBe(500)
    expect(JSON.parse(response.body).error.message).toContain('cannot read body files')
    expect(post).not.toHaveBeenCalled()
  })

  /**
   * Verifies generated business paths remain relative to the shared
   * `/gateway/cli` client base so commands cannot repeat the gateway segment.
   */
  it('keeps generated project action paths relative to the CLI gateway', async () => {
    const { projectManifest } = await import('../serve/generated-manifest.js')
    const gatewayPrefixedActions = projectManifest.modules.flatMap((mod) =>
      mod.actions
        .filter((action) => action.path.startsWith('/gateway/'))
        .map((action) => `${mod.domain}:${action.name}:${action.path}`),
    )

    expect(gatewayPrefixedActions).toEqual([])
  })

  it('project API route forwards an upstream request to the matching path', async () => {
    const { projectManifest } = await import('../serve/generated-manifest.js')
    // pick the first generated action with no path params
    const pick = projectManifest.modules
      .flatMap((mod) => mod.actions.map((action) => ({ mod, action })))
      .find(({ mod, action }) => !/\{/.test(`${action.pathPrefix ?? mod.pathPrefix ?? ''}${action.path}`))
    expect(pick, 'expected at least one project action without path params').toBeTruthy()
    const { mod, action } = pick!
    const upstreamPath = `${action.pathPrefix ?? mod.pathPrefix ?? ''}${action.path}`

    const isGet = String(action.method) === 'GET'
    const handler = vi.fn().mockResolvedValue({ items: [] })
    const client = isGet ? fakeClient(handler) : fakeClient(vi.fn(), handler)
    const app = buildApp(undefined, async () => client, { projectApis: true })

    const res = await app.inject({
      method: action.method,
      url: `/api/${mod.domain}/${action.name}`,
      payload: isGet ? undefined : {},
    })

    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res.body)).toEqual({ ok: true, data: { items: [] } })
    expect(handler.mock.calls[0][0]).toBe(upstreamPath)
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

  it('ndjson route streams raw content from postStream', async () => {
    // Fixed fixture (not the live project manifest) so the ndjson mechanism is
    // tested independently of which domains the generated manifest contains.
    const streamManifest: AuditManifest = {
      schemaVersion: '1',
      manifestVersion: '2026-05-20T00:00:00+08:00',
      modules: [
        {
          domain: 'stream',
          actions: [
            { name: 'rows', description: 'ndjson rows', method: 'POST', path: '/v1/stream/rows', responseMode: 'ndjson' },
          ],
        },
      ],
    }
    const postStream = vi.fn().mockResolvedValue(Readable.from(['{"type":"row","value":1}\n']))
    const app = buildApp(streamManifest, async () => fakeClient(vi.fn(), vi.fn(), vi.fn(), postStream))

    const res = await app.inject({
      method: 'POST',
      url: '/api/stream/rows?traceId=abc',
      payload: { sql: 'select 1' },
    })

    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('application/x-ndjson')
    expect(res.body).toBe('{"type":"row","value":1}\n')
    expect(postStream).toHaveBeenCalledWith('/v1/stream/rows', { sql: 'select 1' }, { params: { traceId: 'abc' } })
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

