export interface ColumnSpec {
  name: string
  type?: string
}

export type Row = Record<string, unknown>

export type DatabaseDialect = 'doris' | 'mysql' | 'postgresql'

export interface DatabaseCursorPagination {
  type: 'cursor'
  columns: string[]
  dialect: DatabaseDialect
  pageSize: number
}

export interface DatabaseSourceConfig {
  type: 'database' | 'doris'
  sql: string
  host?: string
  database?: string
  schema?: string
  pagination?: DatabaseCursorPagination
}

export interface PaginationNone {
  type: 'none'
}

export interface PaginationPage {
  type: 'page'
  pageParam: string
  sizeParam: string
  pageSize: number
  startPage?: number
  dataPath: string
  totalPath?: string
  hasMorePath?: string
}

export interface PaginationCursor {
  type: 'cursor'
  cursorRequestPath: string
  cursorResponsePath: string
  dataPath: string
  sizeParam?: string
  pageSize?: number
}

export type PaginationSpec = PaginationNone | PaginationPage | PaginationCursor

export interface ApiSourceConfig {
  type: 'api'
  method: 'GET' | 'POST'
  path: string
  params?: Record<string, unknown>
  body?: Record<string, unknown>
  pagination: PaginationSpec
}

export type SourceConfig = DatabaseSourceConfig | ApiSourceConfig

export interface PlanRecord {
  id: string
  createdAt: string
  expiresAt: string
  source: SourceConfig
  columns: ColumnSpec[]
  estimatedRows: number | null
  sampleRows: Row[]
}

export interface PreviewResult {
  columns: ColumnSpec[]
  estimatedRows: number | null
  sampleRows: Row[]
}

export type SourceResumeState =
  | { type: 'api-none'; done: boolean }
  | { type: 'api-page'; nextPage: number; totalSeen: number; declaredTotal: number | null; done: boolean }
  | { type: 'api-cursor'; cursor?: unknown; totalSeen: number; done: boolean }
  | { type: 'database-cursor'; cursor?: unknown[]; totalSeen: number; done: boolean }

export interface SourceBatch {
  rows: Row[]
  nextState: SourceResumeState
}
