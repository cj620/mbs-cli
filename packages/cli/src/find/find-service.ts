import { searchLocalManifest } from './local-search.js'
import type { FindData, FindOutcome, FindRequest, FindResult, SkillManifest } from './types.js'

export type RemoteRecall = (request: FindRequest) => Promise<unknown>

export async function findApis(
  request: FindRequest,
  manifest: SkillManifest,
  remoteRecall?: RemoteRecall,
  timeoutMs = 4_000,
): Promise<FindOutcome> {
  validateRequest(request)
  if (remoteRecall) {
    try {
      const raw = await withTimeout(remoteRecall(request), timeoutMs)
      const data = normalizeRemoteResponse(raw, request.topK)
      return { data, meta: { mode: 'remote', total: data.results.length } }
    } catch {
      const data = searchLocalManifest(manifest, request)
      return {
        data,
        meta: { mode: 'local', total: data.results.length, fallback: true, fallbackReason: 'remote_unavailable' },
      }
    }
  }
  const data = searchLocalManifest(manifest, request)
  return { data, meta: { mode: 'local', total: data.results.length } }
}

export function validateRequest(request: FindRequest): void {
  if (!request.query?.trim()) throw new Error('query must not be empty')
  if (!Number.isInteger(request.topK) || request.topK < 1 || request.topK > 50) {
    throw new Error('topK must be an integer between 1 and 50')
  }
  if (!['api', 'workflow', 'all'].includes(request.targetType)) {
    throw new Error('targetType must be api, workflow, or all')
  }
}

export function normalizeRemoteResponse(raw: unknown, topK: number): FindData {
  const root = asRecord(raw)
  const candidate = hasResults(root) ? root : asRecord(root.data)
  if (!hasResults(candidate)) throw new Error('remote recall response is invalid')
  const rawResults = Array.isArray(candidate.results) ? candidate.results : []
  const results = rawResults.slice(0, topK).map(normalizeResult)
  const rawHint = asRecord(candidate.hint)
  const hint = typeof rawHint.reason === 'string' ? {
    reason: rawHint.reason,
    ...(Array.isArray(rawHint.askWhenMissing) ? { askWhenMissing: rawHint.askWhenMissing as string[] } : {}),
    ...(Array.isArray(rawHint.suggestedDomains) ? { suggestedDomains: rawHint.suggestedDomains as string[] } : {}),
    ...(Array.isArray(rawHint.suggestedQueries) ? { suggestedQueries: rawHint.suggestedQueries as string[] } : {}),
  } : undefined
  return {
    results,
    ...(hint ? { hint } : {}),
  }
}

function normalizeResult(value: unknown): FindResult {
  const result = asRecord(value)
  if ((result.type !== 'api' && result.type !== 'workflow')
    || (typeof result.id !== 'string' && typeof result.id !== 'number')
    || typeof result.name !== 'string') {
    throw new Error('remote recall result is invalid')
  }
  const domain = typeof result.domain === 'string' ? result.domain : undefined
  const defaultCommand = result.type === 'api' && domain ? `mbs ${domain} ${result.name}` : undefined
  const defaultDetailPath = result.type === 'api' && domain ? `references/${domain}/${result.name}.md` : undefined
  const common = {
    id: result.id,
    name: result.name,
    ...(domain ? { domain } : {}),
    ...(typeof result.description === 'string' ? { description: result.description } : {}),
    score: typeof result.score === 'number' ? result.score : 0,
    ...(typeof result.command === 'string' ? { command: result.command } : defaultCommand ? { command: defaultCommand } : {}),
    ...(typeof result.detailPath === 'string' ? { detailPath: result.detailPath } : defaultDetailPath ? { detailPath: defaultDetailPath } : {}),
  }
  if (result.type === 'api') {
    return {
      ...common,
      type: 'api',
      requiredParams: Array.isArray(result.requiredParams) ? result.requiredParams as string[] : [],
      mainReturns: Array.isArray(result.mainReturns) ? result.mainReturns as string[] : [],
    }
  }
  return {
    ...common,
    type: 'workflow',
    askWhenMissing: Array.isArray(result.askWhenMissing) ? result.askWhenMissing as string[] : [],
    steps: Array.isArray(result.steps) ? result.steps as NonNullable<FindResult['steps']> : [],
  }
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('remote recall timed out')), timeoutMs)
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

function hasResults(value: Record<string, unknown>): boolean {
  return Array.isArray(value.results)
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? value as Record<string, unknown> : {}
}
