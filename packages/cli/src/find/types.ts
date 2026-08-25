import type {
  FormSerializationStyle,
  MultipartFilenamePolicy,
  RequestBodyMode,
  RequestBodyValueKind,
} from '@mb-it-org/shared'

/** Backend semantic-discovery target selector accepted by `mbs find`. */
export type RecallTargetType = 'api' | 'workflow' | 'table' | 'all'

/** Capability token proving the client validates structured table-detail actions. */
export const TABLE_ACTION_CAPABILITY = 'table-actions-v1'

/** One backend-maintained workflow step that must be resolved through another API-only find. */
export interface WorkflowStep {
  goal?: string
  intentQuery?: string
  required?: boolean
  expectedData?: string
}

/** Fields shared by every normalized backend semantic-discovery candidate. */
export interface FindResultBase {
  type: 'api' | 'workflow' | 'table'
  targetKey?: string
  name: string
  domain?: string
  description?: string
  score: number
}

/** Normalized read-only API candidate with an ID-derived detail action and an optional proven business command. */
export interface ApiFindResult extends FindResultBase {
  type: 'api'
  id: number
  command?: string
  detailCommand?: string
  requiredParams?: string[]
  mainReturns?: string[]
}

/** Normalized business workflow candidate whose steps require further semantic discovery. */
export interface WorkflowFindResult extends FindResultBase {
  type: 'workflow'
  id: number
  askWhenMissing?: string[]
  steps?: WorkflowStep[]
}

/** Physical table identity accepted by the existing database read-only commands. */
export interface TableIdentity {
  host: string
  database: string
  schema?: string
  tableName: string
}

/** Allowlisted structured action for loading current table metadata after a user confirms the candidate. */
export interface TableNextAction extends TableIdentity {
  command: 'database.show-create-table'
}

/** Authorized database table candidate; it intentionally has no permission-record numeric ID. */
export interface TableFindResult extends FindResultBase {
  type: 'table'
  targetKey: string
  table: TableIdentity
  nextAction: TableNextAction
}

/** Discriminated union returned by one unified semantic-discovery request. */
export type FindResult = ApiFindResult | WorkflowFindResult | TableFindResult

/** Backend guidance for empty, low-confidence, or ambiguous candidate sets. */
export interface FindHint {
  reason: 'NO_RESULT' | 'LOW_CONFIDENCE' | 'AMBIGUOUS' | string
  askWhenMissing?: string[]
  suggestedDomains?: string[]
  suggestedQueries?: string[]
}

/** Candidate collection returned by one successful semantic recall request. */
export interface FindData {
  results: FindResult[]
  hint?: FindHint
}

/** Validated user query and optional server-side recall filters. */
export interface FindRequest {
  query: string
  domain?: string
  targetType: RecallTargetType
  topK: number
  capabilities: string[]
}

/** Metadata proving the result came from the backend semantic path. */
export interface FindMeta {
  mode: 'remote'
  total: number
}

/** Successful remote-only find result and its origin metadata. */
export interface FindOutcome {
  data: FindData
  meta: FindMeta
}

/** One sanitized schema-only node in a backend request or response field tree. */
export interface ApiFieldDefinition {
  /** Stable API field name. */
  name: string
  /** Optional schema type used for nested encoding. */
  type?: string
  /** Human-readable field purpose. */
  description?: string
  /** Whether runtime input must contain this field. */
  required?: boolean
  /** Original request/response location. */
  fieldScope?: string
  /** Compatibility copy of the request location. */
  paramLocation?: string
  /** Ordinary value, local file, or Base64 interpretation. */
  valueKind?: RequestBodyValueKind
  /** Composite form key strategy. */
  serializationStyle?: FormSerializationStyle
  /** Whether a composite form value expands into child entries. */
  explode?: boolean
  /** Independent multipart part Content-Type. */
  partContentType?: string
  /** Multipart filename generation policy. */
  filenamePolicy?: MultipartFilenamePolicy
  /** Fixed protocol filename; never a runtime path. */
  partFilename?: string
  /** Ordered child schema nodes. */
  children: ApiFieldDefinition[]
}

/** Complete read-only interface definition loaded on demand, with a business command only for proven identifiers. */
export interface ApiDetailData {
  id: number
  name: string
  domain: string
  version?: string
  description?: string
  method?: string
  path?: string
  operationType: 'QUERY'
  /** Authoritative interface-level request body mode. */
  requestBodyMode: RequestBodyMode
  /** Main Content-Type without parameters or multipart boundary. */
  requestMediaType?: string
  /** Optional text charset accepted by the encoder. */
  requestCharset?: string
  command?: string
  request: Record<string, ApiFieldDefinition[]>
  response: ApiFieldDefinition[]
}
