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

/** Validated user query and optional server-side recall filters. */
export interface FindRequest {
  query: string
  domain?: string
  targetType: RecallTargetType
  topK: number
  capabilities: string[]
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
