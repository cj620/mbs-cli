import type { FindData, FindHint, FindRequest, FindResult, LocalApiCard, SkillManifest } from './types.js'

const LOW_CONFIDENCE_SCORE = 0.25

export function searchLocalManifest(manifest: SkillManifest, request: FindRequest): FindData {
  if (request.targetType === 'workflow') return { results: [], hint: noResultHint() }

  const query = normalize(request.query)
  const cards = localCards(manifest)
  const results = cards
    .filter((card) => !request.domain || normalize(card.domain) === normalize(request.domain))
    .map((card) => ({ card, score: scoreCard(card, query) }))
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score
      || left.card.domain.localeCompare(right.card.domain)
      || left.card.name.localeCompare(right.card.name))
    .slice(0, request.topK)
    .map(({ card, score }): FindResult => ({
      type: 'api',
      id: card.id,
      name: card.name,
      domain: card.domain,
      description: card.description,
      score: Number(score.toFixed(6)),
      command: card.command,
      detailPath: card.detailPath ?? `references/${card.domain}/${card.name}.md`,
      requiredParams: card.requiredParams ?? [],
      mainReturns: card.mainReturns ?? [],
    }))

  return { results, hint: buildHint(results) }
}

export function localCards(manifest: SkillManifest): LocalApiCard[] {
  const generatedCards = manifest.apiCards ?? []
  const generatedCommands = new Set(generatedCards.map((card) => card.command))
  const staticCards = (manifest.modules ?? []).flatMap((module) => (module.commands ?? [])
    .filter((command) => !generatedCommands.has(command))
    .map((command) => {
    const parts = command.trim().split(/\s+/)
    const domain = parts[1] ?? module.name
    const name = parts.slice(2).join(' ') || command
    return {
      id: `${domain}:${name}`,
      name,
      domain,
      description: module.description,
      command,
      detailPath: module.skill,
      keywords: module.keywords,
    }
  }))
  return [...generatedCards, ...staticCards]
}

function scoreCard(card: LocalApiCard, normalizedQuery: string): number {
  const name = normalize(card.name)
  const command = normalize(card.command.replace(/^mbs\s+/, ''))
  if (normalizedQuery === name || normalizedQuery === command) return 1
  if (name.startsWith(normalizedQuery) || command.startsWith(normalizedQuery)
    || normalizedQuery.startsWith(name)) return 0.9

  const keywords = (card.keywords ?? []).map(normalize)
  const businessText = normalize([
    card.domain,
    card.name,
    card.description,
    ...keywords,
  ].filter(Boolean).join(' '))
  if (businessText.includes(normalizedQuery)) return 0.8

  const tokens = normalizedQuery.split(/[^\p{L}\p{N}]+/u).filter((token) => token.length > 0)
  const tokenRatio = tokens.length === 0 ? 0 : tokens.filter((token) => businessText.includes(token)).length / tokens.length
  const gramRatio = overlapRatio(bigrams(normalizedQuery), bigrams(businessText))
  return Math.max(tokenRatio > 0 ? 0.35 + tokenRatio * 0.35 : 0, gramRatio * 0.6)
}

function bigrams(value: string): Set<string> {
  const compact = value.replace(/[^\p{L}\p{N}]/gu, '')
  if (compact.length < 2) return compact ? new Set([compact]) : new Set()
  const result = new Set<string>()
  for (let index = 0; index < compact.length - 1; index += 1) {
    result.add(compact.slice(index, index + 2))
  }
  return result
}

function overlapRatio(query: Set<string>, candidate: Set<string>): number {
  if (query.size === 0 || candidate.size === 0) return 0
  let matches = 0
  for (const gram of query) if (candidate.has(gram)) matches += 1
  return matches / query.size
}

function buildHint(results: FindResult[]): FindHint | undefined {
  if (results.length === 0) return noResultHint()
  if (results[0].score < LOW_CONFIDENCE_SCORE) {
    return { reason: 'LOW_CONFIDENCE', askWhenMissing: ['业务域', '查询对象', '时间范围'] }
  }
  if (results.length > 1
    && results[0].domain !== results[1].domain
    && results[0].score - results[1].score < 0.05) {
    return {
      reason: 'AMBIGUOUS',
      askWhenMissing: ['业务域'],
      suggestedDomains: [...new Set(results.slice(0, 5).map((item) => item.domain).filter((item): item is string => Boolean(item)))],
    }
  }
  return undefined
}

function noResultHint(): FindHint {
  return {
    reason: 'NO_RESULT',
    askWhenMissing: ['业务域', '查询对象', '时间范围'],
    suggestedQueries: ['使用接口名称、业务对象或指标同义词重新检索'],
  }
}

function normalize(value: string | undefined): string {
  return (value ?? '').trim().toLocaleLowerCase()
}
