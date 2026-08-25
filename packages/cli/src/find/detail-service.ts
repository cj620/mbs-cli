import { cleanBoundedText, RecallUnavailableError, withTimeout } from './find-service.js'
import type { ApiDetailData, ApiFieldDefinition } from './types.js'
import type {
  FormSerializationStyle,
  MultipartFilenamePolicy,
  RequestBodyMode,
  RequestBodyValueKind,
} from '@mb-it-org/shared'

export type RemoteApiDetail = (apiId: number, signal?: AbortSignal) => Promise<unknown>

const MAX_FIELD_DEPTH = 32
const MAX_FIELDS_PER_LEVEL = 5_000
const COMMAND_IDENTIFIER = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const REQUEST_BODY_MODES = new Set<RequestBodyMode>([
  'NONE', 'JSON', 'FORM_URLENCODED', 'MULTIPART', 'TEXT', 'XML', 'BINARY',
])
const VALUE_KINDS = new Set<RequestBodyValueKind>(['VALUE', 'FILE', 'BINARY'])
const SERIALIZATION_STYLES = new Set<FormSerializationStyle>(['FLAT', 'DOT', 'BRACKET', 'JSON_STRING'])
const FILENAME_POLICIES = new Set<MultipartFilenamePolicy>(['SOURCE_BASENAME', 'FIXED', 'OMIT'])

/**
 * Loads one recalled API definition exclusively from the backend.
 *
 * @param apiId Positive interface ID returned by semantic recall.
 * @param remoteDetail Authenticated callback for the fixed recall-detail endpoint.
 * @param timeoutMs Maximum backend wait before the request is aborted.
 * @returns Validated, minimum-exposure interface definition for agent parameter confirmation.
 * @throws Error for invalid IDs.
 * @throws RecallUnavailableError when the backend fails, times out, or violates the response contract.
 */
export async function describeApi(
  apiId: number,
  remoteDetail: RemoteApiDetail,
  timeoutMs = 4_000,
): Promise<ApiDetailData> {
  if (!Number.isInteger(apiId) || apiId < 1) {
    throw new Error('apiId must be a positive integer')
  }
  const controller = new AbortController()
  try {
    const raw = await withTimeout(
      remoteDetail(apiId, controller.signal),
      timeoutMs,
      () => controller.abort(),
    )
    return normalizeApiDetailResponse(raw)
  } catch (error) {
    if (error instanceof RecallUnavailableError) throw error
    throw new RecallUnavailableError(error)
  }
}

/**
 * Validates and minimizes the backend interface-detail envelope.
 *
 * @param raw Untrusted HTTP response body, optionally wrapped in a `data` envelope.
 * @returns Interface identity, optional proven business command, and complete validated field trees.
 * @throws Error when required identity, read-only state, or field structures are invalid.
 */
export function normalizeApiDetailResponse(raw: unknown): ApiDetailData {
  const root = asRecord(raw)
  const detail = hasApiIdentity(root) ? root : asRecord(root.data)
  if (!hasApiIdentity(detail) || detail.operationType !== 'QUERY') {
    throw new Error('remote API detail response is invalid')
  }
  const name = cleanBoundedText('name', detail.name, 255)
  const domain = cleanBoundedText('domain', detail.domain, 200)
  const command = COMMAND_IDENTIFIER.test(name) && COMMAND_IDENTIFIER.test(domain)
    ? `mbs ${domain} ${name}`
    : undefined

  const requestRoot = asRecord(detail.request)
  const request: Record<string, ApiFieldDefinition[]> = {}
  for (const [scope, fields] of Object.entries(requestRoot)) {
    request[scope] = normalizeFieldArray(fields, 0)
  }
  const requestBodyMode = normalizeRequestBodyMode(detail.requestBodyMode, request.body ?? [])

  return {
    id: detail.id as number,
    name,
    domain,
    ...(typeof detail.version === 'string' ? { version: detail.version } : {}),
    ...(typeof detail.description === 'string' ? { description: detail.description } : {}),
    ...(typeof detail.method === 'string' ? { method: detail.method } : {}),
    ...(typeof detail.path === 'string' ? { path: detail.path } : {}),
    operationType: 'QUERY',
    requestBodyMode,
    ...optionalBoundedText('requestMediaType', detail.requestMediaType, 255),
    ...optionalBoundedText('requestCharset', detail.requestCharset, 32),
    ...(command ? { command } : {}),
    request,
    response: normalizeFieldArray(detail.response, 0),
  }
}

/**
 * Recursively validates one field array while bounding hostile response depth and breadth.
 *
 * @param value Untrusted array value from a request scope or response tree.
 * @param depth Current recursive field depth.
 * @returns Sanitized field definitions preserving backend order and children.
 * @throws Error when the structure exceeds limits or contains invalid field nodes.
 */
function normalizeFieldArray(value: unknown, depth: number): ApiFieldDefinition[] {
  if (value === undefined || value === null) return []
  if (!Array.isArray(value) || value.length > MAX_FIELDS_PER_LEVEL || depth > MAX_FIELD_DEPTH) {
    throw new Error('remote API detail fields are invalid')
  }
  return value.map((field) => normalizeField(field, depth))
}

/**
 * Validates one interface field and copies only execution-relevant properties.
 *
 * @param value Untrusted field object.
 * @param depth Current recursive field depth used to bound child traversal.
 * @returns Sanitized field definition.
 * @throws Error when the field name or nested structure is invalid.
 */
function normalizeField(value: unknown, depth: number): ApiFieldDefinition {
  const field = asRecord(value)
  if (typeof field.name !== 'string' || !field.name.trim()) {
    throw new Error('remote API detail field is invalid')
  }
  return {
    name: field.name,
    ...(typeof field.type === 'string' ? { type: field.type } : {}),
    ...(typeof field.description === 'string' ? { description: field.description } : {}),
    ...(typeof field.required === 'boolean' ? { required: field.required } : {}),
    ...(typeof field.fieldScope === 'string' ? { fieldScope: field.fieldScope } : {}),
    ...(typeof field.paramLocation === 'string' ? { paramLocation: field.paramLocation } : {}),
    ...optionalEnumProperty('valueKind', field.valueKind, VALUE_KINDS),
    ...optionalEnumProperty('serializationStyle', field.serializationStyle, SERIALIZATION_STYLES),
    ...(typeof field.explode === 'boolean' ? { explode: field.explode } : {}),
    ...optionalBoundedText('partContentType', field.partContentType, 255),
    ...optionalEnumProperty('filenamePolicy', field.filenamePolicy, FILENAME_POLICIES),
    ...optionalBoundedText('partFilename', field.partFilename, 255),
    children: normalizeFieldArray(field.children, depth + 1),
  }
}

/**
 * Normalizes the server request-body mode and preserves compatibility with pre-migration detail responses.
 *
 * @param value Candidate explicit mode.
 * @param bodyFields Already normalized body field collection.
 * @returns Explicit uppercase mode, or JSON/NONE inferred from legacy body presence.
 * @throws Error when a present mode is not part of the public contract.
 */
function normalizeRequestBodyMode(value: unknown, bodyFields: ApiFieldDefinition[]): RequestBodyMode {
  if (value === undefined || value === null || String(value).trim() === '') {
    return bodyFields.length > 0 ? 'JSON' : 'NONE'
  }
  const normalized = String(value).trim().toUpperCase() as RequestBodyMode
  if (!REQUEST_BODY_MODES.has(normalized)) throw new Error('remote API detail response is invalid')
  return normalized
}

/**
 * Copies one optional bounded metadata string under its original property name.
 *
 * @param key Output property name.
 * @param value Candidate server value.
 * @param maxLength Maximum accepted character length.
 * @returns Empty object when absent, otherwise one validated property.
 * @throws Error for non-string, oversized, or control-character values.
 */
function optionalBoundedText<K extends string>(
  key: K,
  value: unknown,
  maxLength: number,
): Partial<Record<K, string>> {
  if (value === undefined || value === null || value === '') return {}
  if (typeof value !== 'string' || value.length > maxLength || /[\u0000-\u001f\u007f]/u.test(value)) {
    throw new Error('remote API detail response is invalid')
  }
  return { [key]: value } as Partial<Record<K, string>>
}

/**
 * Copies one optional string enum only when it belongs to the supplied allowlist.
 *
 * @param key Output property name.
 * @param value Candidate server value.
 * @param allowed Accepted stable enum values.
 * @returns Empty object when absent, otherwise one normalized enum property.
 * @throws Error when a present value is unsupported.
 */
function optionalEnumProperty<K extends string, T extends string>(
  key: K,
  value: unknown,
  allowed: Set<T>,
): Partial<Record<K, T>> {
  if (value === undefined || value === null || value === '') return {}
  if (typeof value !== 'string') throw new Error('remote API detail response is invalid')
  const normalized = value.trim().toUpperCase() as T
  if (!allowed.has(normalized)) throw new Error('remote API detail response is invalid')
  return { [key]: normalized } as Partial<Record<K, T>>
}

/**
 * Checks the minimum identity required to resolve a read-only API detail by ID.
 *
 * @param value Candidate response record.
 * @returns Whether ID, display name, and display domain have the expected primitive types.
 */
function hasApiIdentity(value: Record<string, unknown>): boolean {
  return typeof value.id === 'number'
    && Number.isInteger(value.id)
    && value.id > 0
    && typeof value.name === 'string'
    && value.name.trim().length > 0
    && typeof value.domain === 'string'
    && value.domain.trim().length > 0
}

/**
 * Converts an unknown value to a record without trusting any nested property.
 *
 * @param value Untrusted value.
 * @returns Object record or an empty record for non-objects.
 */
function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? value as Record<string, unknown> : {}
}
