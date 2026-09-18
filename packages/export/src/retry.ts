import { MBSError, NotAuthenticatedError, PermissionError } from '@mb-it-org/shared'

export const DEFAULT_MAX_RETRIES = 3
export const DEFAULT_RETRY_BASE_MS = 1000
export const MAX_RETRIES = 10
export const MAX_RETRY_DELAY_MS = 30_000

const TRANSIENT_ERROR_CODES = new Set([
  'ECONNABORTED',
  'ECONNREFUSED',
  'ECONNRESET',
  'EHOSTUNREACH',
  'ENETDOWN',
  'ENETUNREACH',
  'EPIPE',
  'ETIMEDOUT',
])
const TRANSIENT_HTTP_STATUSES = new Set([429, 502, 503, 504])

export interface RetryEvent {
  attempt: number
  delayMs: number
  error: unknown
}

export interface RetryOptions {
  maxRetries?: number
  baseDelayMs?: number
  maxDelayMs?: number
  random?: () => number
  sleep?: (delayMs: number) => Promise<void>
  shouldRetry?: (error: unknown) => boolean
  onRetry?: (event: RetryEvent) => void | Promise<void>
}

/**
 * Determines whether a failed batch can be retried without repeating a known deterministic failure.
 *
 * <p>Only common transient transport errors and HTTP 429/502/503/504 are accepted. Authentication,
 * permission, validation, SQL, and ordinary business failures remain single-attempt failures. The shared
 * client retains its own independent one-time authentication refresh contract.</p>
 *
 * @param error Unknown failure raised by a source adapter.
 * @returns Whether the failure is eligible for the bounded batch retry policy.
 */
export function isTransientFailure(error: unknown): boolean {
  if (error instanceof NotAuthenticatedError || error instanceof PermissionError) return false
  if (error instanceof MBSError) {
    if (error.type === 'validation') return false
    const status = error.backendResponse?.statusCode
    return typeof status === 'number' && TRANSIENT_HTTP_STATUSES.has(status)
  }
  if (!error || typeof error !== 'object') return false
  const code = (error as { code?: unknown }).code
  return typeof code === 'string' && TRANSIENT_ERROR_CODES.has(code.toUpperCase())
}

/**
 * Executes one operation with a finite exponential-backoff retry policy.
 *
 * <p>The default means one initial attempt plus at most three retries. Delay growth is capped and includes
 * ±20% jitter. Every loop is bounded by the validated retry count, so callers cannot accidentally create an
 * infinite retry task.</p>
 *
 * @param operation Deferred operation. It is invoked again only for retryable failures.
 * @param options Retry bounds, timing hooks, and observability callback.
 * @returns The first successful operation result.
 * @throws RangeError When retry or delay bounds are invalid.
 * @throws unknown The original/final operation failure when it is deterministic or retries are exhausted.
 */
export async function withBoundedRetry<T>(operation: () => Promise<T>, options: RetryOptions = {}): Promise<T> {
  const maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES
  const baseDelayMs = options.baseDelayMs ?? DEFAULT_RETRY_BASE_MS
  const maxDelayMs = options.maxDelayMs ?? MAX_RETRY_DELAY_MS
  if (!Number.isInteger(maxRetries) || maxRetries < 0 || maxRetries > MAX_RETRIES) {
    throw new RangeError(`maxRetries must be an integer between 0 and ${MAX_RETRIES}`)
  }
  if (!Number.isFinite(baseDelayMs) || baseDelayMs < 0) {
    throw new RangeError('baseDelayMs must be a non-negative number')
  }
  if (!Number.isFinite(maxDelayMs) || maxDelayMs < 0) {
    throw new RangeError('maxDelayMs must be a non-negative number')
  }

  const random = options.random ?? Math.random
  const sleep = options.sleep ?? ((delayMs: number) => new Promise<void>((resolve) => setTimeout(resolve, delayMs)))
  const shouldRetry = options.shouldRetry ?? isTransientFailure

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    try {
      return await operation()
    } catch (error) {
      if (attempt >= maxRetries || !shouldRetry(error)) throw error
      const exponential = Math.min(maxDelayMs, baseDelayMs * 2 ** attempt)
      const randomValue = random()
      const boundedRandom = Number.isFinite(randomValue) ? Math.min(1, Math.max(0, randomValue)) : 0.5
      const jitterMultiplier = 0.8 + boundedRandom * 0.4
      const delayMs = Math.min(maxDelayMs, Math.round(exponential * jitterMultiplier))
      await options.onRetry?.({ attempt: attempt + 1, delayMs, error })
      await sleep(delayMs)
    }
  }

  throw new Error('Bounded retry exhausted without a terminal result')
}
