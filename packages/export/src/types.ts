export interface ColumnSpec {
  name: string
  type?: string
}

export type Row = Record<string, unknown>

export interface DatabaseSourceConfig {
  type: 'database' | 'doris'
  sql: string
  host?: string
  database?: string
  schema?: string
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
