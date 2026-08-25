import {
  MBSError,
  encodeRequestBody,
  type RequestBodyDefinition,
  type RequestContentHeaders,
} from '@mb-it-org/shared'

import type { ApiDetailData } from '../find/types.js'

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
  headers?: RequestContentHeaders
}

/**
 * Creates a request from one authoritative backend detail, including non-JSON body encoding.
 *
 * <p>The caller may omit method/path and use the detail values directly. If supplied, both values
 * must match the authoritative method and path template. Structured bodies parse `--body` as JSON;
 * raw text/XML and strict Base64 remain unparsed. The shared encoder is the only component allowed
 * to add Content-Type.</p>
 *
 * @param detail Validated read-only API detail loaded by numeric API ID.
 * @param method Optional user-supplied method used as a consistency check.
 * @param path Optional concrete path; required when the detail path contains unresolved parameters.
 * @param bodyText Optional `--body` value.
 * @param bodyFile Optional `--body-file` runtime path for raw modes.
 * @param paramsJson Optional JSON query-parameter object.
 * @returns Fully encoded, origin-relative read-only request.
 * @throws MBSError when detail identity, method/path agreement, input shape, or encoding is invalid.
 */
export async function createMetadataReadOnlyRequest(
  detail: ApiDetailData,
  method: string | undefined,
  path: string | undefined,
  bodyText?: string,
  bodyFile?: string,
  paramsJson?: string,
): Promise<ReadOnlyRequest> {
  const authoritativeMethod = detail.method?.toUpperCase()
  const authoritativePath = detail.path
  if (!authoritativeMethod || !READ_ONLY_METHODS.has(authoritativeMethod) || !authoritativePath) {
    throw validationError('remote API detail does not contain a usable read-only method and path')
  }
  const normalizedMethod = (method ?? authoritativeMethod).toUpperCase()
  if (normalizedMethod !== authoritativeMethod) {
    throw validationError('request method does not match the API detail')
  }
  if (path === undefined && hasPathTemplate(authoritativePath)) {
    throw validationError('a concrete path is required for API detail path parameters')
  }
  const concretePath = path ?? authoritativePath
  validateRelativeInterfacePath(concretePath)
  if (!matchesInterfacePath(authoritativePath, concretePath)) {
    throw validationError('request path does not match the API detail')
  }

  const paramsValue = paramsJson === undefined ? undefined : parseJsonFlag('params', paramsJson)
  if (paramsValue !== undefined && !isJsonObject(paramsValue)) {
    throw validationError('params must be a JSON object')
  }
  if (normalizedMethod === 'GET' && (bodyText !== undefined || bodyFile !== undefined
    || detail.requestBodyMode !== 'NONE')) {
    throw validationError('GET request must not include a body')
  }

  const input = parseBodyForMode(detail.requestBodyMode, bodyText)
  const definition: RequestBodyDefinition = {
    mode: detail.requestBodyMode,
    ...(detail.requestMediaType ? { mediaType: detail.requestMediaType } : {}),
    ...(detail.requestCharset ? { charset: detail.requestCharset } : {}),
    fields: detail.request.body ?? [],
  }
  const encoded = await encodeRequestBody(definition, input, {
    ...(bodyFile !== undefined ? { bodyFile } : {}),
  })
  return {
    method: normalizedMethod as 'GET' | 'POST',
    path: concretePath,
    options: {
      ...(encoded.body !== undefined ? { body: encoded.body } : {}),
      ...(paramsValue !== undefined ? { params: paramsValue } : {}),
      ...(encoded.headers ? { headers: encoded.headers } : {}),
    },
  }
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
 * Matches one concrete safe path against an authoritative path template.
 *
 * <p>Each `{name}` or `:name` placeholder consumes exactly one non-empty path segment; all literal
 * characters are escaped. The concrete path is validated separately before this function runs.</p>
 *
 * @param template Backend path with optional named placeholders.
 * @param concretePath User-selected concrete path.
 * @returns Whether the path belongs to the described interface.
 * @throws MBSError when the backend template itself is not a safe origin-relative path.
 */
function matchesInterfacePath(template: string, concretePath: string): boolean {
  if (!template.startsWith('/') || template.startsWith('//') || template.includes('\\')
    || template.includes('?') || template.includes('#') || /[\s\u0000-\u001f\u007f]/u.test(template)) {
    throw validationError('remote API detail path is invalid')
  }
  const segments = template.split('/')
  const pattern = segments.map((segment, index) => {
    if (index === 0) return ''
    if (/^\{[A-Za-z][A-Za-z0-9_]*\}$/u.test(segment)
      || /^:[A-Za-z][A-Za-z0-9_]*$/u.test(segment)) return '[^/]+'
    if (segment === '.' || segment === '..' || segment.includes('{') || segment.includes('}')) {
      throw validationError('remote API detail path is invalid')
    }
    return escapeRegExp(segment)
  }).join('/')
  return new RegExp(`^${pattern}$`, 'u').test(concretePath)
}

/**
 * Detects named path placeholders that cannot be sent as literal upstream segments.
 *
 * @param template Validated backend interface path template.
 * @returns Whether any full segment uses `{name}` or `:name` placeholder syntax.
 */
function hasPathTemplate(template: string): boolean {
  return template.split('/').some((segment) => /^\{[A-Za-z][A-Za-z0-9_]*\}$/u.test(segment)
    || /^:[A-Za-z][A-Za-z0-9_]*$/u.test(segment))
}

/**
 * Parses `--body` according to the authoritative request body mode.
 *
 * @param mode Backend request body mode.
 * @param text Optional raw flag text.
 * @returns Parsed JSON/form object, untouched raw text/Base64, or undefined.
 * @throws MBSError for malformed or oversized structured JSON.
 */
function parseBodyForMode(mode: RequestBodyDefinition['mode'], text?: string): unknown {
  if (text === undefined) return undefined
  if (mode === 'JSON' || mode === 'FORM_URLENCODED' || mode === 'MULTIPART') {
    return parseJsonFlag('body', text)
  }
  return text
}

/**
 * Escapes a literal path segment for construction of an anchored regular expression.
 *
 * @param value Literal backend path segment.
 * @returns Regex-safe literal.
 */
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')
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
