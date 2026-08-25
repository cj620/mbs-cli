// packages/skill-shared/src/__tests__/http.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import { APIClient } from '../http.js'
import { NotAuthenticatedError, PermissionError, MBSError } from '../errors.js'

vi.mock('axios')
const mockAxios = vi.mocked(axios)

beforeEach(() => {
  vi.clearAllMocks()
})

describe('APIClient', () => {
  it('sends GET with default CLI headers', async () => {
    const instance = {
      get: vi.fn().mockResolvedValue({ data: { code: 0, data: { items: [] } } }),
      post: vi.fn(),
      request: vi.fn(),
      interceptors: { response: { use: vi.fn() } },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const c = new APIClient('http://api.example.com', 'SESSION=abc123', vi.fn())
    await c.get('/v1/orders')

    expect(mockAxios.create).toHaveBeenCalledWith({
      baseURL: 'http://api.example.com',
      headers: { Cookie: 'SESSION=abc123', 'client-type': 'cli' },
    })
  })

  it('sends POST with body', async () => {
    const instance = {
      get: vi.fn(),
      post: vi.fn().mockResolvedValue({ data: { code: 0, data: {} } }),
      request: vi.fn(),
      interceptors: { response: { use: vi.fn() } },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const c = new APIClient('http://api.example.com', 'SESSION=abc123', vi.fn())
    await c.post('/v1/export', { from: '2026-01-01' })
    expect(instance.post).toHaveBeenCalledWith('/v1/export', { from: '2026-01-01' })
  })

  it('sends POST query params together with the body', async () => {
    const instance = {
      get: vi.fn(),
      post: vi.fn().mockResolvedValue({ data: { code: 0, data: {} } }),
      request: vi.fn(),
      interceptors: { response: { use: vi.fn() } },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const c = new APIClient('http://api.example.com', 'SESSION=abc123', vi.fn())
    await c.post('/v1/orders', { sku: 'SKU-1' }, { params: { sku: 'SKU-1' } })

    expect(instance.post).toHaveBeenCalledWith(
      '/v1/orders',
      { sku: 'SKU-1' },
      { params: { sku: 'SKU-1' } },
    )
  })

  it('forwards an abort signal to POST requests', async () => {
    const instance = {
      get: vi.fn(),
      post: vi.fn().mockResolvedValue({ data: { code: 0, data: {} } }),
      request: vi.fn(),
      interceptors: { response: { use: vi.fn() } },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)
    const controller = new AbortController()

    const c = new APIClient('http://api.example.com', 'SESSION=abc123', vi.fn())
    await c.post('/v1/recall', { query: 'sales' }, { signal: controller.signal })

    expect(instance.post).toHaveBeenCalledWith(
      '/v1/recall',
      { query: 'sales' },
      { signal: controller.signal },
    )
  })

  /** Verifies dynamic requests can forward only the encoder-owned Content-Type header. */
  it('forwards encoded request body content type', async () => {
    const instance = {
      get: vi.fn(),
      post: vi.fn(),
      request: vi.fn().mockResolvedValue({ data: { rows: [] } }),
      interceptors: { response: { use: vi.fn() } },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const c = new APIClient('http://api.example.com', 'SESSION=redacted', vi.fn())
    await c.request('POST', '/v1/form', {
      body: 'page=1',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    expect(instance.request).toHaveBeenCalledWith({
      method: 'POST',
      url: '/v1/form',
      params: undefined,
      data: 'page=1',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
  })

  it('sends streaming POST with NDJSON headers', async () => {
    const stream = { on: vi.fn() }
    const instance = {
      get: vi.fn(),
      post: vi.fn().mockResolvedValue({ data: stream }),
      request: vi.fn(),
      interceptors: { response: { use: vi.fn() } },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const c = new APIClient('http://api.example.com', 'SESSION=abc123', vi.fn())
    await expect(c.postStream('/gateway/cli-service/cli/doris/query', { sql: 'SELECT 1' })).resolves.toBe(stream)
    expect(instance.post).toHaveBeenCalledWith('/gateway/cli-service/cli/doris/query', { sql: 'SELECT 1' }, {
      responseType: 'stream',
      headers: { Accept: 'application/x-ndjson' },
    })
  })
})

describe('APIClient response interceptor', () => {
  function captureInterceptor() {
    let onFulfilled!: (res: { data: unknown }) => unknown
    const instance = {
      get: vi.fn().mockResolvedValue({}),
      post: vi.fn().mockResolvedValue({}),
      request: vi.fn().mockResolvedValue({}),
      interceptors: {
        response: {
          use: vi.fn().mockImplementation((fn: (res: { data: unknown }) => unknown) => {
            onFulfilled = fn
          }),
        },
      },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)
    new APIClient('http://api.example.com', 'SESSION=abc123', vi.fn())
    return onFulfilled
  }

  it('passes through when code === 0', () => {
    const interceptor = captureInterceptor()
    const res = { data: { code: 0, data: { id: 1 }, msg: 'ok' } }
    expect(interceptor(res)).toEqual(res)
  })

  it('passes through when code === 200', () => {
    const interceptor = captureInterceptor()
    const res = { data: { code: 200, data: { id: 1 }, msg: 'ok' } }
    expect(interceptor(res)).toEqual(res)
  })

  it('throws NotAuthenticatedError when code === 601', () => {
    const interceptor = captureInterceptor()
    expect(() => interceptor({ data: { code: 601, data: null, msg: 'not login' } })).toThrow(NotAuthenticatedError)
  })

  it('throws PermissionError when code === 109', () => {
    const interceptor = captureInterceptor()
    expect(() => interceptor({ data: { code: 109, data: null, msg: 'no permission' } })).toThrow(PermissionError)
  })

  it('throws PermissionError when code === 403', () => {
    const interceptor = captureInterceptor()
    expect(() => interceptor({ data: { code: 403, data: null, msg: 'forbidden' } })).toThrow(PermissionError)
  })

  it('throws NotAuthenticatedError for unknown error code', () => {
    const interceptor = captureInterceptor()
    expect(() => interceptor({ data: { code: 500, data: null, msg: 'internal error' } })).toThrow(NotAuthenticatedError)
  })

  it('throws NotAuthenticatedError when msg is missing for code 500', () => {
    const interceptor = captureInterceptor()
    try {
      interceptor({ data: { code: 500, data: null } })
    } catch (e) {
      expect((e as NotAuthenticatedError).message).toBe('Not authenticated')
    }
  })

  it('passes through when response.data has no code field (non-standard endpoint)', () => {
    const interceptor = captureInterceptor()
    const res = { data: { items: [] } }
    expect(interceptor(res)).toEqual(res)
  })
})
