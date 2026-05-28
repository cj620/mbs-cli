import { Readable } from 'node:stream'
import { describe, expect, it } from 'vitest'
import { DORIS_API_PREFIX, MAX_SQL_LENGTH, resolveSql, writeNdjsonStream } from './doris.js'

describe('Doris API paths', () => {
  it('uses cli-service gateway prefix', () => {
    expect(`${DORIS_API_PREFIX}/schemas`).toBe('/gateway/cli-service/cli/doris/schemas')
    expect(`${DORIS_API_PREFIX}/show-create-table`).toBe('/gateway/cli-service/cli/doris/show-create-table')
    expect(`${DORIS_API_PREFIX}/query`).toBe('/gateway/cli-service/cli/doris/query')
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
