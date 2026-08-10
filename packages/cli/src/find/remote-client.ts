import {
  APIClient,
  forceRefreshAuthContext,
  getAuthContext,
  getConfig,
} from '@mb-it-org/shared'

const API_GATEWAY_PREFIX = '/gateway/cli'

/**
 * Resolves the standard authenticated HTTP base URL used by recall requests.
 *
 * @param apiUrl Configured MBS API root.
 * @returns API root with the standard CLI gateway prefix and no duplicate slash.
 */
export function resolveRecallBaseUrl(apiUrl: string): string {
  return `${apiUrl.replace(/\/+$/, '')}${API_GATEWAY_PREFIX}`
}

/**
 * Reduces a backend dependency failure to a non-sensitive diagnostic category.
 *
 * <p>Only an allowlist of HTTP status, transport code, or known error names is
 * returned. Messages, URLs, request bodies, response bodies, cookies, and stack
 * traces are deliberately ignored.</p>
 *
 * @param error Failure captured at the remote-only discovery boundary.
 * @returns Stable safe category suitable for optional CLI error metadata.
 */
export function classifyRemoteFailure(error: unknown): string {
  const failure = error && typeof error === 'object'
    ? error as { name?: unknown; code?: unknown; response?: { status?: unknown } }
    : {}
  const status = failure.response?.status
  if (typeof status === 'number' && Number.isInteger(status) && status >= 400 && status <= 599) {
    return `http_${status}`
  }

  const safeCodes: Record<string, string> = {
    ECONNREFUSED: 'connection_refused',
    ECONNRESET: 'connection_reset',
    ETIMEDOUT: 'timeout',
    ENOTFOUND: 'dns_not_found',
    EAI_AGAIN: 'dns_temporary_failure',
    ERR_CANCELED: 'canceled',
  }
  if (typeof failure.code === 'string' && safeCodes[failure.code]) {
    return safeCodes[failure.code]
  }

  const safeNames: Record<string, string> = {
    NotAuthenticatedError: 'auth',
    PermissionError: 'permission',
    MBSError: 'api',
  }
  return typeof failure.name === 'string' && safeNames[failure.name]
    ? safeNames[failure.name]
    : 'unknown'
}

/**
 * Creates an authenticated client for backend-only recall and detail requests.
 *
 * <p>The client always reuses the normal saved CLI authentication context and
 * refresh flow, and always targets the configured API through `/gateway/cli`.</p>
 *
 * @returns Authenticated API client configured for the standard CLI gateway.
 * @throws Error when saved authentication or configuration cannot be loaded.
 */
export async function createRecallClient(): Promise<APIClient> {
  const { cookie } = await getAuthContext()
  const { apiUrl } = getConfig()
  const refreshAuth = async (): Promise<string> => (await forceRefreshAuthContext()).cookie
  return new APIClient(resolveRecallBaseUrl(apiUrl), cookie, refreshAuth)
}
