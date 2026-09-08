// packages/skill-shared/src/errors.ts

/** Immutable upstream response details retained while an error crosses the shared client seam. */
export interface BackendResponseSnapshot {
  /** Parsed Axios response body; it remains unknown because upstream endpoints use heterogeneous contracts. */
  readonly body: unknown
  /** HTTP status received from the upstream response, including 2xx business-error responses. */
  readonly statusCode: number
}

/** Classified upstream failure details used for control flow without changing the retained response body. */
export interface BackendFailure {
  /** Authoritative upstream response that must be exposed without a CLI envelope. */
  readonly response: BackendResponseSnapshot
  /** Process exit code associated with the classified failure. */
  readonly exitCode: 1 | 2
}

/** Authentication failure that may retain the authoritative upstream response for final CLI output. */
export class NotAuthenticatedError extends Error {
  readonly type = 'auth' as const
  readonly hint = 'Run mbs login to authenticate'

  /**
   * Creates an authentication failure used by refresh and command-exit handling.
   *
   * @param backendResponse Optional upstream response. It is absent for local credential failures and
   * present when the backend explicitly rejected authentication.
   */
  constructor(readonly backendResponse?: BackendResponseSnapshot) {
    super('Not authenticated')
    this.name = 'NotAuthenticatedError'
  }
}

/** CLI validation or API failure that can preserve an upstream response without changing local errors. */
export class MBSError extends Error {
  /**
   * Creates a classified CLI failure.
   *
   * @param message Safe local diagnostic message used only when no upstream response body is available.
   * @param type Stable local failure category for exit and fallback formatting.
   * @param hint Optional safe remediation shown for locally generated failures.
   * @param backendResponse Optional authoritative upstream response emitted verbatim by business commands.
   */
  constructor(
    message: string,
    readonly type: 'validation' | 'api' = 'api',
    readonly hint = '',
    readonly backendResponse?: BackendResponseSnapshot,
  ) {
    super(message)
    this.name = 'MBSError'
  }
}

/** Permission failure that may retain the backend's complete denial response. */
export class PermissionError extends Error {
  readonly type = 'permission' as const
  readonly hint = 'You do not have permission to perform this action'

  /**
   * Creates a permission failure.
   *
   * @param backendResponse Optional upstream denial response. Local permission failures may omit it.
   */
  constructor(readonly backendResponse?: BackendResponseSnapshot) {
    super('Permission denied')
    this.name = 'PermissionError'
  }
}

/**
 * Reads the retained upstream response and exit policy from a shared client error.
 *
 * <p>This helper deliberately recognizes only errors created by the authenticated HTTP seam. It does not
 * inspect, clone, redact, or otherwise transform {@link BackendResponseSnapshot.body}; callers receive the
 * original snapshot reference. Local failures and unrelated errors return {@code undefined}.</p>
 *
 * @param error Unknown failure caught at a CLI or HTTP-gateway boundary.
 * @returns Retained upstream failure details, or {@code undefined} when no upstream body exists.
 */
export function backendFailureFromError(error: unknown): BackendFailure | undefined {
  if (error instanceof NotAuthenticatedError && error.backendResponse) {
    return { response: error.backendResponse, exitCode: 2 }
  }
  if ((error instanceof PermissionError || error instanceof MBSError) && error.backendResponse) {
    return { response: error.backendResponse, exitCode: 1 }
  }
  return undefined
}
