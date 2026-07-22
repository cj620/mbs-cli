export type RecallTargetType = 'api' | 'workflow' | 'all'

export interface WorkflowStep {
  goal?: string
  intentQuery?: string
  required?: boolean
  expectedData?: string
}

export interface FindResult {
  type: 'api' | 'workflow'
  id: string | number
  name: string
  domain?: string
  description?: string
  score: number
  command?: string
  detailPath?: string
  requiredParams?: string[]
  mainReturns?: string[]
  askWhenMissing?: string[]
  steps?: WorkflowStep[]
}

export interface FindHint {
  reason: 'NO_RESULT' | 'LOW_CONFIDENCE' | 'AMBIGUOUS' | string
  askWhenMissing?: string[]
  suggestedDomains?: string[]
  suggestedQueries?: string[]
}

export interface FindData {
  results: FindResult[]
  hint?: FindHint
}

export interface FindRequest {
  query: string
  domain?: string
  targetType: RecallTargetType
  topK: number
}

export interface FindMeta {
  mode: 'remote' | 'local'
  total: number
  fallback?: boolean
  fallbackReason?: 'remote_unavailable'
}

export interface FindOutcome {
  data: FindData
  meta: FindMeta
}

export interface LocalApiCard {
  id: string | number
  type?: 'api'
  name: string
  domain: string
  description?: string
  command: string
  detailPath?: string
  keywords?: string[]
  requiredParams?: string[]
  mainReturns?: string[]
}

export interface SkillManifest {
  apiCards?: LocalApiCard[]
  modules?: Array<{
    name: string
    description?: string
    keywords?: string[]
    skill?: string
    commands?: string[]
  }>
}
