import { MBSError } from '@mb-it-org/shared'

const MAX_JSON_FLAG_LENGTH = 1_000_000
const READ_ONLY_METHODS = new Set(['GET', 'POST'])

/**
 * Validated optional payload passed to the shared authenticated transport.
 * Callers supply only parsed JSON; this type never contains raw CLI text,
 * authentication state, host information, or a method/path override.
 */
export interface ReadOnlyRequestOptions {
  body?: unknown
  params?: Record<string, unknown>
}

/**
 * Fully validated dynamic query request ready for the shared transport.
 * The method is normalized, the path cannot change origin, and options retain
 * the exact body/query separation described by backend interface metadata.
 */
export interface ReadOnlyRequest {
  method: 'GET' | 'POST'
  path: string
  options: ReadOnlyRequestOptions
}

/**
 * Validates and parses one public dynamic query request before authentication
 * data can reach the HTTP transport.
 *
 * <p>The method is restricted to GET or POST. The path must be a concrete
 * origin-relative interface path, so Axios cannot reinterpret it as an
 * absolute or protocol-relative URL. JSON flags are bounded before parsing;
 * query parameters must be an object, while POST bodies may contain any JSON
 * value required by the described query interface.</p>
 *
 * @param method User-supplied HTTP method, matched case-insensitively.
 * @param path Concrete interface path from `mbs describe`, after replacing path parameters.
 * @param bodyJson Optional JSON POST body text.
 * @param paramsJson Optional JSON object used as URL query parameters.
 * @returns A normalized request safe to pass to the shared authenticated client.
 * @throws MBSError with validation type when any method, path, size, or JSON rule fails.
 */
export function createReadOnlyRequest(
  method: string,
  path: string,
  bodyJson?: string,
  paramsJson?: string,
): ReadOnlyRequest {
  const normalizedMethod = method.toUpperCase()
  if (!READ_ONLY_METHODS.has(normalizedMethod)) {
    throw validationError('request only supports GET or POST; POST must be query-only')
  }

  validateRelativeInterfacePath(path)
  if (normalizedMethod === 'GET' && bodyJson !== undefined) {
    throw validationError('GET request must not include a body; use --params for query parameters')
  }

  const body = bodyJson === undefined ? undefined : parseJsonFlag('body', bodyJson)
  const paramsValue = paramsJson === undefined ? undefined : parseJsonFlag('params', paramsJson)
  if (paramsValue !== undefined && !isJsonObject(paramsValue)) {
    throw validationError('params must be a JSON object')
  }

  return {
    method: normalizedMethod as 'GET' | 'POST',
    path,
    options: {
      ...(body !== undefined ? { body } : {}),
      ...(paramsValue !== undefined ? { params: paramsValue } : {}),
    },
  }
}

/**
 * Rejects paths that could change the authenticated request origin, conceal
 * traversal, or bypass the explicit params/body mapping.
 *
 * @param path Untrusted command-line path.
 * @throws MBSError when the path is not one concrete origin-relative endpoint path.
 */
function validateRelativeInterfacePath(path: string): void {
  const genericMessage = 'path must be a concrete relative interface path beginning with a single /'
  if (path === '/' || !path.startsWith('/') || path.startsWith('//') || path.includes('\\')
    || path.includes('?') || path.includes('#') || /[\s\u0000-\u001f\u007f]/u.test(path)
    || path.includes('{') || path.includes('}') || /%(?:25|2e|2f|3f|23|5c)/iu.test(path)) {
    throw validationError(genericMessage)
  }

  let decodedPath: string
  try {
    decodedPath = decodeURIComponent(path)
  } catch {
    throw validationError(genericMessage)
  }

  const segments = decodedPath.split('/')
  if (decodedPath.startsWith('//') || decodedPath.includes('\\')
    || decodedPath.includes('?') || decodedPath.includes('#')
    || /[\s\u0000-\u001f\u007f]/u.test(decodedPath)
    || segments.some((segment) => segment === '.' || segment === '..')) {
    throw validationError(genericMessage)
  }
}

/**
 * Parses one bounded JSON command-line flag without logging its contents.
 *
 * @param flagName Stable public flag name used in validation messages.
 * @param text Untrusted JSON text supplied by the caller.
 * @returns Parsed JSON value.
 * @throws MBSError when the text exceeds the limit or is invalid JSON.
 */
function parseJsonFlag(flagName: 'body' | 'params', text: string): unknown {
  if (text.length > MAX_JSON_FLAG_LENGTH) {
    throw validationError(`${flagName} is too large`)
  }
  try {
    return JSON.parse(text) as unknown
  } catch {
    throw validationError(`${flagName} must be valid JSON`)
  }
}

/**
 * Distinguishes a JSON object from null, arrays, and scalar values.
 *
 * @param value Parsed JSON value.
 * @returns Whether the value can safely represent URL query parameters.
 */
function isJsonObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

/**
 * Creates a stable shared validation error without exposing input contents.
 *
 * @param message Non-sensitive explanation suitable for CLI output.
 * @returns Validation error handled by `MBSCommand.catch` with exit code 1.
 */
function validationError(message: string): MBSError {
  return new MBSError(message, 'validation', 'Run `mbs request --help` for the accepted request format')
}
