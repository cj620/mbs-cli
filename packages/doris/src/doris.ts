import { Readable } from 'node:stream'

export const MAX_SQL_LENGTH = 10_000
export const DATABASE_API_PREFIX = '/cli-service/cli/doris'
export const DORIS_API_PREFIX = DATABASE_API_PREFIX

const MAX_SOURCE_OPTION_LENGTH = 200

export interface DatabaseSourceOptions {
  host?: string
  database?: string
  schema?: string
}

export type DataSourceOptions = DatabaseSourceOptions

export function validateSql(sql: string): string {
  const trimmed = sql.trim()
  if (!trimmed) throw new Error('SQL is required')
  if (trimmed.length > MAX_SQL_LENGTH) {
    throw new Error(`SQL must be ${MAX_SQL_LENGTH} characters or fewer`)
  }
  return trimmed
}

export async function readStdin(input: NodeJS.ReadableStream = process.stdin): Promise<string> {
  const chunks: Buffer[] = []
  for await (const chunk of input) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)))
  }
  return Buffer.concat(chunks).toString('utf8')
}

export async function resolveSql(sqlFlag?: string, input?: NodeJS.ReadableStream): Promise<string> {
  if (sqlFlag !== undefined) return validateSql(sqlFlag)
  if (input === undefined && process.stdin.isTTY) return validateSql('')
  return validateSql(await readStdin(input))
}

export function isDataDictionarySql(sql: string): boolean {
  return /\bDB_DATA_DICTIONARY\b/i.test(sql)
}

function cleanSourceOption(name: string, value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  if (!trimmed) return undefined
  if (trimmed.length > MAX_SOURCE_OPTION_LENGTH) {
    throw new Error(`${name} must be ${MAX_SOURCE_OPTION_LENGTH} characters or fewer`)
  }
  return trimmed
}

export function normalizeDataSourceOptions(input: {
  host?: unknown
  database?: unknown
  schema?: unknown
}): DatabaseSourceOptions {
  const host = cleanSourceOption('host', input.host)
  const database = cleanSourceOption('database', input.database)
  const schema = cleanSourceOption('schema', input.schema)

  if ((host && !database) || (!host && database)) {
    throw new Error('host and database must be provided together')
  }

  return {
    ...(host ? { host } : {}),
    ...(database ? { database } : {}),
    ...(schema ? { schema } : {}),
  }
}

export function requireDataSourceOptions(input: {
  host?: unknown
  database?: unknown
  schema?: unknown
}): DatabaseSourceOptions {
  const source = normalizeDataSourceOptions(input)
  if (!source.host || !source.database) {
    throw new Error('host and database are required')
  }
  return source
}

export function dataSourceCacheKey(source: DatabaseSourceOptions): string {
  return JSON.stringify({
    host: source.host ?? '',
    database: source.database ?? '',
    schema: source.schema ?? '',
  })
}

export function dataSourceParams(source: DatabaseSourceOptions): Record<string, string> {
  return {
    ...(source.host ? { host: source.host } : {}),
    ...(source.database ? { database: source.database } : {}),
    ...(source.schema ? { schema: source.schema } : {}),
  }
}

export function databaseQueryBody(sql: string, source: DatabaseSourceOptions): Record<string, string> {
  return {
    sql,
    ...dataSourceParams(source),
  }
}

export const dorisQueryBody = databaseQueryBody

function lineHasError(line: string): boolean {
  const text = line.trim()
  if (!text) return false
  try {
    const parsed = JSON.parse(text) as { type?: unknown }
    return parsed.type === 'error'
  } catch {
    return false
  }
}

export async function writeNdjsonStream(
  stream: NodeJS.ReadableStream,
  write: (chunk: string) => void = (chunk) => {
    process.stdout.write(chunk)
  },
): Promise<{ hasError: boolean }> {
  let buffer = ''
  let hasError = false

  for await (const chunk of stream as Readable) {
    const text = Buffer.isBuffer(chunk) ? chunk.toString('utf8') : String(chunk)
    write(text)
    buffer += text

    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''
    for (const line of lines) {
      if (lineHasError(line)) hasError = true
    }
  }

  if (lineHasError(buffer)) hasError = true
  return { hasError }
}

export async function writeAndCollectNdjsonStream(
  stream: NodeJS.ReadableStream,
  write: (chunk: string) => void = (chunk) => {
    process.stdout.write(chunk)
  },
): Promise<{ hasError: boolean; text: string }> {
  let buffer = ''
  let text = ''
  let hasError = false

  for await (const chunk of stream as Readable) {
    const value = Buffer.isBuffer(chunk) ? chunk.toString('utf8') : String(chunk)
    write(value)
    text += value
    buffer += value

    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''
    for (const line of lines) {
      if (lineHasError(line)) hasError = true
    }
  }

  if (lineHasError(buffer)) hasError = true
  return { hasError, text }
}
