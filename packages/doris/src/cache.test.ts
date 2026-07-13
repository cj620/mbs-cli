import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { DORIS_METADATA_CACHE_TTL_MS, readDorisMetadataCache, writeDorisMetadataCache } from './cache.js'

const originalConfigDir = process.env.MBS_CONFIG_DIR
let tempDir: string | null = null

function useTempConfigDir(): void {
  tempDir = mkdtempSync(join(tmpdir(), 'mbs-doris-cache-'))
  process.env.MBS_CONFIG_DIR = tempDir
}

afterEach(() => {
  if (tempDir) rmSync(tempDir, { recursive: true, force: true })
  tempDir = null
  if (originalConfigDir === undefined) {
    delete process.env.MBS_CONFIG_DIR
  } else {
    process.env.MBS_CONFIG_DIR = originalConfigDir
  }
})

describe('Doris metadata cache', () => {
  it('reads cached my-tables metadata', () => {
    useTempConfigDir()

    writeDorisMetadataCache('my-tables', 'current-user', [{ tableName: 'orders' }])

    expect(readDorisMetadataCache('my-tables', 'current-user')).toEqual([{ tableName: 'orders' }])
  })

  it('reads a cached value by kind and key', () => {
    useTempConfigDir()

    writeDorisMetadataCache('schemas', 'all', [{ database: 'eshop', tables: ['daily_sales'] }])

    expect(readDorisMetadataCache('schemas', 'all')).toEqual([{ database: 'eshop', tables: ['daily_sales'] }])
  })

  it('does not reuse a cache entry for a different key', () => {
    useTempConfigDir()

    writeDorisMetadataCache('show-create-table', 'eshop.daily_sales', 'CREATE TABLE daily_sales')

    expect(readDorisMetadataCache('show-create-table', 'eshop.orders')).toBeNull()
  })

  it('returns null when the entry is older than the ttl', () => {
    useTempConfigDir()

    writeDorisMetadataCache('data-dictionary-query', 'select 1', 'cached')

    expect(readDorisMetadataCache('data-dictionary-query', 'select 1', -1)).toBeNull()
  })

  it('uses a 30-minute ttl for all metadata caches by default', () => {
    expect(DORIS_METADATA_CACHE_TTL_MS).toBe(30 * 60 * 1000)
  })
})
