import { Readable } from 'node:stream'
import { describe, expect, it } from 'vitest'
import {
  DATABASE_API_PREFIX,
  MAX_SQL_LENGTH,
  dataSourceCacheKey,
  dataSourceParams,
  databaseQueryBody,
  dorisQueryBody,
  isDataDictionarySql,
  normalizeDataSourceOptions,
  requireDataSourceOptions,
  resolveSql,
  writeAndCollectNdjsonStream,
  writeNdjsonStream,
} from './doris.js'

describe('database API paths', () => {
  it('uses cli-service service-relative prefix (global /gateway/cli added by base-command)', () => {
    expect(`${DATABASE_API_PREFIX}/my-tables`).toBe('/cli-service/cli/doris/my-tables')
    expect(`${DATABASE_API_PREFIX}/schemas`).toBe('/cli-service/cli/doris/schemas')
    expect(`${DATABASE_API_PREFIX}/show-create-table`).toBe('/cli-service/cli/doris/show-create-table')
    expect(`${DATABASE_API_PREFIX}/query`).toBe('/cli-service/cli/doris/query')
  })
})

describe('resolveSql', () => {
  it('uses --sql when provided', async () => {
    await expect(resolveSql(' SELECT 1 ')).resolves.toBe('SELECT 1')
  })

  it('reads stdin when --sql is omitted', async () => {
    const input = Readable.from(['\nSELECT 2\n'])
    await expect(resolveSql(undefined, input)).resolves.toBe('SELECT 2')
  })

  it('rejects empty SQL', async () => {
    await expect(resolveSql('   ')).rejects.toThrow('SQL is required')
  })

  it('rejects SQL longer than the limit', async () => {
    await expect(resolveSql('x'.repeat(MAX_SQL_LENGTH + 1))).rejects.toThrow('SQL must be 10000 characters or fewer')
  })
})

describe('writeNdjsonStream', () => {
  it('preserves normal NDJSON and reports success', async () => {
    const written: string[] = []
    const stream = Readable.from([
      '{"type":"header","columns":["id"]}\n',
      '{"type":"data","row":{"id":1}}\n{"type":"end","totalRows":1}\n',
    ])

    await expect(writeNdjsonStream(stream, (chunk) => written.push(chunk))).resolves.toEqual({ hasError: false })
    expect(written.join('')).toBe(
      '{"type":"header","columns":["id"]}\n{"type":"data","row":{"id":1}}\n{"type":"end","totalRows":1}\n',
    )
  })

  it('preserves error NDJSON and reports failure', async () => {
    const written: string[] = []
    const stream = Readable.from(['{"type":"header","columns":["id"]}\n{"type":"error","message":"bad sql"}\n'])

    await expect(writeNdjsonStream(stream, (chunk) => written.push(chunk))).resolves.toEqual({ hasError: true })
    expect(written.join('')).toContain('"type":"error"')
  })
})

describe('writeAndCollectNdjsonStream', () => {
  it('preserves, collects, and reports success', async () => {
    const written: string[] = []
    const stream = Readable.from(['{"type":"data","row":{"table_name":"daily_sales"}}\n'])

    await expect(writeAndCollectNdjsonStream(stream, (chunk) => written.push(chunk))).resolves.toEqual({
      hasError: false,
      text: '{"type":"data","row":{"table_name":"daily_sales"}}\n',
    })
    expect(written.join('')).toBe('{"type":"data","row":{"table_name":"daily_sales"}}\n')
  })

  it('detects collected error lines', async () => {
    const stream = Readable.from(['{"type":"error","message":"bad sql"}\n'])

    await expect(writeAndCollectNdjsonStream(stream, () => undefined)).resolves.toEqual({
      hasError: true,
      text: '{"type":"error","message":"bad sql"}\n',
    })
  })
})

describe('isDataDictionarySql', () => {
  it('matches DB_DATA_DICTIONARY metadata queries case-insensitively', () => {
    expect(isDataDictionarySql('select * from eshop.DB_DATA_DICTIONARY limit 1')).toBe(true)
    expect(isDataDictionarySql('SELECT table_name FROM eshop.db_data_dictionary LIMIT 1')).toBe(true)
  })

  it('does not match ordinary business queries', () => {
    expect(isDataDictionarySql('select stat_date, gmv from eshop.daily_sales limit 10')).toBe(false)
  })
})

describe('data source options', () => {
  it('normalizes optional host, database, and schema values', () => {
    expect(normalizeDataSourceOptions({ host: ' pg-main ', database: ' orders ', schema: ' public ' })).toEqual({
      host: 'pg-main',
      database: 'orders',
      schema: 'public',
    })
  })

  it('requires host and database to be provided together', () => {
    expect(() => normalizeDataSourceOptions({ host: 'pg-main' })).toThrow('host and database must be provided together')
    expect(() => normalizeDataSourceOptions({ database: 'orders' })).toThrow(
      'host and database must be provided together',
    )
  })

  it('requires host and database for database operations', () => {
    expect(() => requireDataSourceOptions({ schema: 'public' })).toThrow('host and database are required')
    expect(requireDataSourceOptions({ host: 'pg-main', database: 'orders', schema: 'public' })).toEqual({
      host: 'pg-main',
      database: 'orders',
      schema: 'public',
    })
  })

  it('builds request params and query body without empty source fields', () => {
    const source = normalizeDataSourceOptions({ host: 'pg-main', database: 'orders' })

    expect(dataSourceParams(source)).toEqual({ host: 'pg-main', database: 'orders' })
    expect(databaseQueryBody('SELECT 1', source)).toEqual({
      sql: 'SELECT 1',
      host: 'pg-main',
      database: 'orders',
    })
    expect(dorisQueryBody('SELECT 1', source)).toEqual(databaseQueryBody('SELECT 1', source))
  })

  it('includes source values in cache keys', () => {
    expect(dataSourceCacheKey({ host: 'pg-main', database: 'orders' })).not.toBe(dataSourceCacheKey({}))
  })
})
