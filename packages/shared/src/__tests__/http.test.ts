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

  /** Verifies a backend authentication response still drives one refresh before returning the retry body. */
  it('refreshes once after a backend authentication failure', async () => {
    const backendResponse = {
      body: { code: 601, data: null, msg: 'login expired' },
      statusCode: 200,
    }
    const instance = {
      defaults: { headers: { Cookie: 'SESSION=old' } as Record<string, string> },
      get: vi.fn()
        .mockRejectedValueOnce(new NotAuthenticatedError(backendResponse))
        .mockResolvedValueOnce({ data: { code: 200, data: { id: 1 } } }),
      post: vi.fn(),
      request: vi.fn(),
      interceptors: { response: { use: vi.fn() } },
    }
    const refresh = vi.fn().mockResolvedValue({
      cookie: 'SESSION=fresh',
      accessToken: 'memory-access-token',
    })
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const client = new APIClient('http://api.example.com', 'SESSION=old', refresh)

    await expect(client.get('/v1/orders')).resolves.toEqual({ code: 200, data: { id: 1 } })
    expect(refresh).toHaveBeenCalledOnce()
    expect(instance.get).toHaveBeenCalledTimes(2)
    expect(instance.defaults.headers.Cookie).toBe('SESSION=fresh')
    expect(instance.defaults.headers.Authorization).toBe('Bearer memory-access-token')
  })

  /** Verifies a local refresh failure does not discard the backend response that triggered refresh. */
  it('retains the backend authentication response when refresh fails locally', async () => {
    const backendResponse = {
      body: { code: 601, data: null, msg: 'login expired' },
      statusCode: 200,
    }
    const authenticationError = new NotAuthenticatedError(backendResponse)
    const instance = {
      defaults: { headers: { Cookie: 'SESSION=old' } },
      get: vi.fn().mockRejectedValue(authenticationError),
      post: vi.fn(),
      request: vi.fn(),
      interceptors: { response: { use: vi.fn() } },
    }
    const refresh = vi.fn().mockRejectedValue(new Error('local refresh failed'))
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const client = new APIClient('http://api.example.com', 'SESSION=old', refresh)

    await expect(client.get('/v1/orders')).rejects.toBe(authenticationError)
    expect(refresh).toHaveBeenCalledOnce()
    expect(instance.get).toHaveBeenCalledOnce()
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
  /**
   * Captures both Axios response interceptor callbacks installed by APIClient.
   *
   * @returns Fulfilled and rejected callbacks for direct business/HTTP response contract assertions.
   */
  function captureInterceptor() {
    let onFulfilled!: (res: { data: unknown }) => unknown
    let onRejected!: (error: unknown) => unknown
    const instance = {
      get: vi.fn().mockResolvedValue({}),
      post: vi.fn().mockResolvedValue({}),
      request: vi.fn().mockResolvedValue({}),
      interceptors: {
        response: {
          use: vi.fn().mockImplementation((
            fn: (res: { data: unknown }) => unknown,
            rejected: (error: unknown) => unknown,
          ) => {
            onFulfilled = fn
            onRejected = rejected
          }),
        },
      },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)
    new APIClient('http://api.example.com', 'SESSION=abc123', vi.fn())
    return { onFulfilled, onRejected }
  }

  it('passes through when code === 0', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    const res = { data: { code: 0, data: { id: 1 }, msg: 'ok' } }
    expect(interceptor(res)).toEqual(res)
  })

  it('passes through when code === 200', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    const res = { data: { code: 200, data: { id: 1 }, msg: 'ok' } }
    expect(interceptor(res)).toEqual(res)
  })

  it('throws NotAuthenticatedError when code === 601', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    expect(() => interceptor({ data: { code: 601, data: null, msg: 'not login' } })).toThrow(NotAuthenticatedError)
  })

  it('throws PermissionError when code === 109', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    expect(() => interceptor({ data: { code: 109, data: null, msg: 'no permission' } })).toThrow(PermissionError)
  })

  it('throws PermissionError when code === 403', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    expect(() => interceptor({ data: { code: 403, data: null, msg: 'forbidden' } })).toThrow(PermissionError)
  })

  it('throws NotAuthenticatedError for unknown error code', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    expect(() => interceptor({ data: { code: 500, data: null, msg: 'internal error' } })).toThrow(NotAuthenticatedError)
  })

  it('throws NotAuthenticatedError when msg is missing for code 500', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    try {
      interceptor({ data: { code: 500, data: null } })
    } catch (e) {
      expect((e as NotAuthenticatedError).message).toBe('Not authenticated')
    }
  })

  it('passes through when response.data has no code field (non-standard endpoint)', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    const res = { data: { items: [] } }
    expect(interceptor(res)).toEqual(res)
  })

  /** Verifies business errors retain the complete backend body for the CLI output seam. */
  it('carries the backend body on a business error', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    const body = { code: 1001, data: { field: 'status' }, msg: 'invalid request' }

    try {
      interceptor({ data: body })
      expect.fail('expected the backend business error to be thrown')
    } catch (error) {
      expect(error).toBeInstanceOf(MBSError)
      expect(error).toMatchObject({
        backendResponse: { body, statusCode: 200 },
      })
    }
  })

  /** Verifies non-2xx Axios responses retain status and body instead of becoming a generic message. */
  it('carries the backend body on an HTTP error', () => {
    const { onRejected } = captureInterceptor()
    const body = { code: 422, data: null, msg: 'unprocessable request' }
    vi.mocked(axios.isAxiosError).mockReturnValue(true)

    try {
      onRejected({ message: 'Request failed with status code 422', response: { status: 422, data: body } })
      expect.fail('expected the HTTP response error to be thrown')
    } catch (error) {
      expect(error).toBeInstanceOf(MBSError)
      expect(error).toMatchObject({
        backendResponse: { body, statusCode: 422 },
      })
    }
  })

  /** Verifies HTTP 401 keeps its response body while remaining eligible for authentication refresh. */
  it('classifies an HTTP 401 with its backend body', () => {
    const { onRejected } = captureInterceptor()
    const body = { code: 401, data: null, msg: 'authentication required' }
    vi.mocked(axios.isAxiosError).mockReturnValue(true)

    try {
      onRejected({ message: 'Request failed with status code 401', response: { status: 401, data: body } })
      expect.fail('expected the HTTP authentication error to be thrown')
    } catch (error) {
      expect(error).toBeInstanceOf(NotAuthenticatedError)
      expect(error).toMatchObject({
        backendResponse: { body, statusCode: 401 },
      })
    }
  })
})
