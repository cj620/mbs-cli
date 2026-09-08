import type { FindRequest } from './types.js'
import { TABLE_ACTION_CAPABILITY } from './types.js'

export type RemoteRecall = (request: FindRequest, signal?: AbortSignal) => Promise<unknown>

/** Stable local error marking a semantic-recall call that produced no directly returnable response body. */
export class RecallUnavailableError extends Error {
  readonly reason: unknown

  /**
   * Creates a recall dependency error while retaining the original reason for the command boundary.
   *
   * @param reason Transport, timeout, authentication, or backend-response failure.
   */
  constructor(reason: unknown) {
    super('semantic recall service is unavailable')
    this.name = 'RecallUnavailableError'
    this.reason = reason
  }
}

/**
 * Sends one validated discovery request and returns the exact parsed upstream body.
 *
 * <p>The response is deliberately opaque: this seam does not unwrap {@code data}, inspect candidates,
 * truncate by {@code topK}, reorder results, derive commands, or add metadata. Request validation and the
 * bounded transport deadline remain local preconditions.</p>
 *
 * @param request Natural-language discovery request sent to the backend.
 * @param remoteRecall Authenticated callback for the fixed semantic-recall endpoint.
 * @param timeoutMs Maximum backend wait before aborting the underlying request.
 * @returns The same response-body value returned by {@code remoteRecall}.
 * @throws Error for invalid request input.
 * @throws RecallUnavailableError when the remote call fails or times out.
 */
export async function findApis(
  request: FindRequest,
  remoteRecall: RemoteRecall,
  timeoutMs = 4_000,
): Promise<unknown> {
  validateRequest(request)
  const controller = new AbortController()
  try {
    return await withTimeout(
      remoteRecall(request, controller.signal),
      timeoutMs,
      () => controller.abort(),
    )
  } catch (error) {
    if (error instanceof RecallUnavailableError) throw error
    throw new RecallUnavailableError(error)
  }
}

/**
 * Validates user-controlled discovery input before any network request.
 *
 * @param request Candidate query, domain filter, target type, and result limit.
 * @throws Error when query, target type, result limit, or capability violates the request contract.
 */
export function validateRequest(request: FindRequest): void {
  if (!request.query?.trim()) throw new Error('query must not be empty')
  if (!Number.isInteger(request.topK) || request.topK < 1 || request.topK > 50) {
    throw new Error('topK must be an integer between 1 and 50')
  }
  if (!['api', 'workflow', 'table', 'all'].includes(request.targetType)) {
    throw new Error('targetType must be api, workflow, table, or all')
  }
  if (!Array.isArray(request.capabilities)
    || request.capabilities.length > 8
    || request.capabilities.some((capability) => capability !== TABLE_ACTION_CAPABILITY)) {
    throw new Error('capabilities contain an unsupported semantic-discovery contract')
  }
}

/**
 * Bounds an asynchronous operation and invokes a cancellation callback on timeout.
 *
 * @param promise Operation whose result should be observed.
 * @param timeoutMs Maximum wait in milliseconds.
 * @param onTimeout Callback used to abort the underlying transport before rejecting.
 * @returns The original operation result when it settles before the deadline.
 */
export function withTimeout<T>(promise: Promise<T>, timeoutMs: number, onTimeout: () => void): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      onTimeout()
      reject(new Error('remote recall timed out'))
    }, timeoutMs)
    promise.then(
      (value) => {
        clearTimeout(timer)
        resolve(value)
      },
      (error) => {
        clearTimeout(timer)
        reject(error)
      },
    )
  })
}
