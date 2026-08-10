import { beforeEach, describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => ({
  apiClient: vi.fn(),
  forceRefreshAuthContext: vi.fn(),
  getAuthContext: vi.fn(),
  getConfig: vi.fn(),
}))

vi.mock('@mb-it-org/shared', () => ({
  APIClient: mocks.apiClient,
  forceRefreshAuthContext: mocks.forceRefreshAuthContext,
  getAuthContext: mocks.getAuthContext,
  getConfig: mocks.getConfig,
}))

import { createRecallClient } from '../find/remote-client.js'

describe('production recall authentication', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mocks.apiClient.mockImplementation(function apiClient(
      this: Record<string, unknown>,
      baseUrl: string,
      cookie: string,
      refreshAuth: () => Promise<string>,
    ) {
      this.baseUrl = baseUrl
      this.cookie = cookie
      this.refreshAuth = refreshAuth
    })
    mocks.getAuthContext.mockResolvedValue({ cookie: 'SESSION=saved-cookie' })
    mocks.getConfig.mockReturnValue({ apiUrl: 'https://api.example.com/' })
    mocks.forceRefreshAuthContext.mockResolvedValue({ cookie: 'SESSION=refreshed-cookie' })
  })

  /**
   * Verifies recall always uses saved CLI authentication and the standard gateway.
   */
  it('creates the standard authenticated gateway client', async () => {
    const client = await createRecallClient() as unknown as {
      baseUrl: string
      cookie: string
      refreshAuth: () => Promise<string>
    }

    expect(client.baseUrl).toBe('https://api.example.com/gateway/cli')
    expect(client.cookie).toBe('SESSION=saved-cookie')
    expect(mocks.getAuthContext).toHaveBeenCalledOnce()
    expect(mocks.getConfig).toHaveBeenCalledOnce()
    await expect(client.refreshAuth()).resolves.toBe('SESSION=refreshed-cookie')
    expect(mocks.forceRefreshAuthContext).toHaveBeenCalledOnce()
  })
})
