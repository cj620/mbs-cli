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

  it('obtains current request credentials before sending a request', async () => {
    const instance = {
      get: vi.fn().mockResolvedValue({ data: { code: 0, data: {} } }),
      post: vi.fn(),
      request: vi.fn(),
      defaults: { headers: {} as Record<string, string> },
      interceptors: { response: { use: vi.fn() } },
    }
    const authorize = vi.fn().mockResolvedValue('SESSION=current')
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const c = new APIClient('http://api.example.com', 'SESSION=stale', vi.fn(), authorize)
    await c.get('/v1/orders')

    expect(authorize).toHaveBeenCalledOnce()
    expect(instance.defaults.headers.Cookie).toBe('SESSION=current')
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
    let onRejected!: (error: unknown) => Promise<never>
    const instance = {
      get: vi.fn().mockResolvedValue({}),
      post: vi.fn().mockResolvedValue({}),
      request: vi.fn().mockResolvedValue({}),
      interceptors: {
        response: {
          use: vi.fn().mockImplementation((fn: (res: { data: unknown }) => unknown, rejected: (error: unknown) => Promise<never>) => {
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

  it('throws an API error for a server error code', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    expect(() => interceptor({ data: { code: 500, data: null, msg: 'internal error' } })).toThrow(MBSError)
  })

  it('preserves the generic API message when code 500 has no message', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    try {
      interceptor({ data: { code: 500, data: null } })
    } catch (e) {
      expect((e as MBSError).message).toBe('API error (code: 500)')
    }
  })

  it('passes through when response.data has no code field (non-standard endpoint)', () => {
    const { onFulfilled: interceptor } = captureInterceptor()
    const res = { data: { items: [] } }
    expect(interceptor(res)).toEqual(res)
  })

  it('maps an HTTP 401 rejection to NotAuthenticatedError', async () => {
    const { onRejected } = captureInterceptor()
    await expect(onRejected({ response: { status: 401 } })).rejects.toBeInstanceOf(NotAuthenticatedError)
  })
})
