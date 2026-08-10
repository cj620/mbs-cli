import { cleanBoundedText, RecallUnavailableError, withTimeout } from './find-service.js'
import type { ApiDetailData, ApiFieldDefinition } from './types.js'

export type RemoteApiDetail = (apiId: number, signal?: AbortSignal) => Promise<unknown>

const MAX_FIELD_DEPTH = 32
const MAX_FIELDS_PER_LEVEL = 5_000
const COMMAND_IDENTIFIER = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

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

  return {
    id: detail.id as number,
    name,
    domain,
    ...(typeof detail.version === 'string' ? { version: detail.version } : {}),
    ...(typeof detail.description === 'string' ? { description: detail.description } : {}),
    ...(typeof detail.method === 'string' ? { method: detail.method } : {}),
    ...(typeof detail.path === 'string' ? { path: detail.path } : {}),
    operationType: 'QUERY',
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
    children: normalizeFieldArray(field.children, depth + 1),
  }
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
