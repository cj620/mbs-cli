import type {
  ApiFindResult,
  FindData,
  FindOutcome,
  FindRequest,
  FindResult,
  FindResultBase,
  TableFindResult,
  TableIdentity,
  WorkflowFindResult,
  WorkflowStep,
} from './types.js'
import { TABLE_ACTION_CAPABILITY } from './types.js'

const COMMAND_IDENTIFIER = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const TABLE_TARGET_KEY = /^table:[0-9a-f]{64}$/
const SOURCE_HOST = /^[A-Za-z0-9._:[\]-]+$/
const DATABASE_IDENTIFIER = /^[\p{L}\p{N}_$-]+$/u
const CONTROL_CHARACTER = /[\u0000-\u001F\u007F]/
const MAX_WORKFLOW_STEPS = 50
const MAX_REMOTE_RESULTS = 50

export type RemoteRecall = (request: FindRequest, signal?: AbortSignal) => Promise<unknown>

/**
 * Stable error marking failures of the backend-only recall dependency.
 *
 * <p>The original reason remains in memory for allowlisted diagnostics but the
 * public message is constant, preventing response bodies, URLs, cookies, or
 * transport messages from leaking into normal CLI output.</p>
 */
export class RecallUnavailableError extends Error {
  readonly reason: unknown

  /**
   * Creates a safe recall dependency error.
   *
   * @param reason Original transport, timeout, authentication, or contract failure.
   */
  constructor(reason: unknown) {
    super('semantic recall service is unavailable')
    this.name = 'RecallUnavailableError'
    this.reason = reason
  }
}

/**
 * Runs unified workflow/API/table discovery exclusively against the authenticated backend.
 *
 * @param request Validated natural-language discovery request.
 * @param remoteRecall Authenticated semantic-recall callback; local manifests are not accepted.
 * @param timeoutMs Maximum backend wait before aborting the underlying request.
 * @returns Normalized backend results with remote-only metadata.
 * @throws Error for invalid request input.
 * @throws RecallUnavailableError when transport, timeout, authentication, or response validation fails.
 */
export async function findApis(
  request: FindRequest,
  remoteRecall: RemoteRecall,
  timeoutMs = 4_000,
): Promise<FindOutcome> {
  validateRequest(request)
  const controller = new AbortController()
  try {
    const raw = await withTimeout(
      remoteRecall(request, controller.signal),
      timeoutMs,
      () => controller.abort(),
    )
    const data = normalizeRemoteResponse(raw, request.topK)
    return { data, meta: { mode: 'remote', total: data.results.length } }
  } catch (error) {
    if (error instanceof RecallUnavailableError) throw error
    throw new RecallUnavailableError(error)
  }
}

/**
 * Validates user-controlled discovery input before any network request.
 *
 * @param request Candidate query, domain filter, target type, and result limit.
 * @throws Error when query, target type, or result limit violates the CLI contract.
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
 * Validates and normalizes the backend recall response envelope.
 *
 * @param raw Untrusted HTTP response, optionally wrapped in a `data` property.
 * @param topK Maximum candidate count allowed by the caller.
 * @returns Normalized candidates and optional disambiguation hint.
 * @throws Error when the response lacks a valid results collection or candidate identity.
 */
export function normalizeRemoteResponse(raw: unknown, topK: number): FindData {
  const root = asRecord(raw)
  const candidate = hasResults(root) ? root : asRecord(root.data)
  if (!hasResults(candidate)) throw new Error('remote recall response is invalid')
  const rawResults = Array.isArray(candidate.results) ? candidate.results : []
  if (rawResults.length > MAX_REMOTE_RESULTS) {
    throw new Error('remote recall result collection is oversized')
  }
  const results = rawResults.slice(0, topK).map(normalizeResult)
  assertUniqueResults(results)
  const rawHint = asRecord(candidate.hint)
  const hint = typeof rawHint.reason === 'string' ? {
    reason: rawHint.reason,
    ...(Array.isArray(rawHint.askWhenMissing) ? { askWhenMissing: stringArray(rawHint.askWhenMissing) } : {}),
    ...(Array.isArray(rawHint.suggestedDomains) ? { suggestedDomains: stringArray(rawHint.suggestedDomains) } : {}),
    ...(Array.isArray(rawHint.suggestedQueries) ? { suggestedQueries: stringArray(rawHint.suggestedQueries) } : {}),
  } : undefined
  return {
    results,
    ...(hint ? { hint } : {}),
  }
}

/**
 * Validates one workflow, API, or table candidate and derives only allowlisted local actions.
 * API names and domains remain display metadata; a business command is added only when both
 * independently satisfy the installed-command identifier grammar.
 *
 * @param value Untrusted candidate object from the backend.
 * @returns Discriminated normalized candidate.
 * @throws Error when type-specific identity, score, payload, or action is invalid.
 */
function normalizeResult(value: unknown): FindResult {
  const result = asRecord(value)
  if (result.type !== 'api' && result.type !== 'workflow' && result.type !== 'table') {
    throw new Error('remote recall result is invalid')
  }
  const common = normalizeCommonResult(result)
  if (result.type === 'table') return normalizeTableResult(result, common)
  if (typeof result.id !== 'number' || !Number.isInteger(result.id) || result.id < 1) {
    throw new Error('remote recall result is invalid')
  }
  const domain = typeof result.domain === 'string' && result.domain.trim()
    ? cleanBoundedText('domain', result.domain, 200)
    : undefined
  const identified = {
    ...common,
    id: result.id,
    ...(domain ? { domain } : {}),
  }
  if (result.type === 'api') {
    if (!domain) {
      throw new Error('remote recall API domain is invalid')
    }
    const command = COMMAND_IDENTIFIER.test(domain) && COMMAND_IDENTIFIER.test(common.name)
      ? `mbs ${domain} ${common.name}`
      : undefined
    return {
      ...identified,
      type: 'api',
      ...(command ? { command } : {}),
      detailCommand: `mbs describe ${result.id}`,
      requiredParams: stringArray(result.requiredParams),
      mainReturns: stringArray(result.mainReturns),
    } satisfies ApiFindResult
  }
  return {
    ...identified,
    type: 'workflow',
    askWhenMissing: stringArray(result.askWhenMissing),
    steps: normalizeWorkflowSteps(result.steps),
  } satisfies WorkflowFindResult
}

/**
 * Validates fields shared by all semantic-discovery candidate types.
 *
 * @param result Untrusted candidate record.
 * @returns Trimmed display fields and a finite backend score.
 * @throws Error when name, target key, description, or score violates the bounded contract.
 */
function normalizeCommonResult(result: Record<string, unknown>): Omit<FindResultBase, 'type'> {
  if (typeof result.name !== 'string' || !result.name.trim()
    || typeof result.score !== 'number' || !Number.isFinite(result.score)) {
    throw new Error('remote recall result is invalid')
  }
  const targetKey = result.targetKey === undefined
    ? undefined
    : cleanBoundedText('targetKey', result.targetKey, 128)
  if (result.description !== undefined && typeof result.description !== 'string') {
    throw new Error('remote recall result is invalid')
  }
  const description = typeof result.description === 'string' && result.description.trim()
    ? cleanBoundedText('description', result.description, 1_000)
    : undefined
  return {
    ...(targetKey ? { targetKey } : {}),
    name: cleanBoundedText('name', result.name, 255),
    ...(description ? { description } : {}),
    score: result.score,
  }
}

/**
 * Validates an authorized table identity and its fixed metadata-detail action.
 *
 * <p>The backend action name is matched against a one-item allowlist, and every action parameter must equal
 * the independently validated table identity. No command string is executed or forwarded.</p>
 *
 * @param result Untrusted table candidate record.
 * @param common Already validated common result fields.
 * @returns Strict table candidate suitable for agent decision-making.
 * @throws Error when target key, table identity, or action is malformed or inconsistent.
 */
function normalizeTableResult(
  result: Record<string, unknown>,
  common: Omit<FindResultBase, 'type'>,
): TableFindResult {
  if (!common.targetKey || !TABLE_TARGET_KEY.test(common.targetKey)) {
    throw new Error('remote recall table target key is invalid')
  }
  const table = normalizeTableIdentity(result.table)
  const action = asRecord(result.nextAction)
  if (action.command !== 'database.show-create-table') {
    throw new Error('remote recall table action is not allowed')
  }
  const actionIdentity = normalizeTableIdentity(action)
  if (JSON.stringify(actionIdentity) !== JSON.stringify(table)) {
    throw new Error('remote recall table action identity is inconsistent')
  }
  const domain = typeof result.domain === 'string' && result.domain.trim()
    ? cleanBoundedText('domain', result.domain, 200)
    : undefined
  return {
    ...common,
    type: 'table',
    targetKey: common.targetKey,
    ...(domain ? { domain } : {}),
    table,
    nextAction: { command: 'database.show-create-table', ...actionIdentity },
  }
}

/**
 * Validates structured table parameters without treating them as shell text.
 *
 * @param value Untrusted table identity or action object.
 * @returns Trimmed host/database/schema/table fields accepted by database commands.
 * @throws Error for unsupported host syntax, identifier syntax, empty fields, or oversized values.
 */
function normalizeTableIdentity(value: unknown): TableIdentity {
  const identity = asRecord(value)
  const host = cleanBoundedText('host', identity.host, 200)
  const database = cleanBoundedText('database', identity.database, 200)
  const tableName = cleanBoundedText('tableName', identity.tableName, 200)
  const schema = identity.schema === undefined || identity.schema === null || identity.schema === ''
    ? undefined
    : cleanBoundedText('schema', identity.schema, 200)
  if (!SOURCE_HOST.test(host) || host.startsWith('-')
    || !DATABASE_IDENTIFIER.test(database) || !DATABASE_IDENTIFIER.test(tableName)
    || (schema !== undefined && !DATABASE_IDENTIFIER.test(schema))) {
    throw new Error('remote recall table identity is invalid')
  }
  return { host, database, ...(schema ? { schema } : {}), tableName }
}

/**
 * Rejects duplicate identities after candidate normalization.
 *
 * @param results Bounded normalized candidates in backend order.
 * @throws Error when two candidates claim the same type-specific stable identity.
 */
function assertUniqueResults(results: FindResult[]): void {
  const identities = new Set<string>()
  for (const result of results) {
    const identity = result.type === 'table'
      ? result.targetKey
      : `${result.type}:${result.id}`
    if (identities.has(identity)) throw new Error('remote recall result identity is duplicated')
    identities.add(identity)
  }
}

/**
 * Validates workflow steps before exposing their follow-up queries to an agent.
 *
 * @param value Untrusted workflow step collection from the backend.
 * @returns Bounded steps containing only the documented business-intent fields.
 * @throws Error when the collection is oversized or a step lacks a safe goal/query shape.
 */
function normalizeWorkflowSteps(value: unknown): WorkflowStep[] {
  if (value === undefined || value === null) return []
  if (!Array.isArray(value) || value.length > MAX_WORKFLOW_STEPS) {
    throw new Error('remote recall workflow steps are invalid')
  }
  return value.map((item) => {
    const step = asRecord(item)
    if (typeof step.goal !== 'string' || !step.goal.trim()
      || typeof step.intentQuery !== 'string' || !step.intentQuery.trim()
      || (step.required !== undefined && typeof step.required !== 'boolean')
      || (step.expectedData !== undefined && typeof step.expectedData !== 'string')) {
      throw new Error('remote recall workflow step is invalid')
    }
    return {
      goal: step.goal.trim(),
      intentQuery: step.intentQuery.trim(),
      ...(typeof step.required === 'boolean' ? { required: step.required } : {}),
      ...(typeof step.expectedData === 'string' ? { expectedData: step.expectedData } : {}),
    }
  })
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

/**
 * Checks whether a response record contains a results array.
 *
 * @param value Candidate response record.
 * @returns Whether `results` is an array.
 */
function hasResults(value: Record<string, unknown>): boolean {
  return Array.isArray(value.results)
}

/**
 * Retains only string elements from an untrusted list.
 *
 * @param value Candidate array value.
 * @returns String elements in their original order, or an empty array.
 */
function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

/**
 * Converts one untrusted scalar to bounded printable text.
 *
 * @param name Stable field name used in validation failures.
 * @param value Untrusted scalar value.
 * @param maxLength Maximum accepted UTF-16 code-unit length after trimming.
 * @returns Non-empty trimmed text without control characters.
 * @throws Error when the value is not a string, is blank, is oversized, or contains control characters.
 */
export function cleanBoundedText(name: string, value: unknown, maxLength: number): string {
  if (typeof value !== 'string') throw new Error(`remote recall ${name} is invalid`)
  const cleaned = value.trim()
  if (!cleaned || cleaned.length > maxLength || CONTROL_CHARACTER.test(cleaned)) {
    throw new Error(`remote recall ${name} is invalid`)
  }
  return cleaned
}

/**
 * Converts an unknown value to a record without trusting nested properties.
 *
 * @param value Untrusted value.
 * @returns Object record or an empty record for non-objects.
 */
function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? value as Record<string, unknown> : {}
}
