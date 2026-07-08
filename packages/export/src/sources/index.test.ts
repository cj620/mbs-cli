import { Readable } from 'node:stream'
import type { APIClient } from '@mb-it-org/shared'
import { describe, expect, it, vi } from 'vitest'
import { previewSource, runSource } from './index.js'

function fakeClient(lines: string[]): APIClient {
  return {
    postStream: vi.fn().mockResolvedValue(Readable.from(lines)),
  } as unknown as APIClient
}

describe('database export source', () => {
  it('previews database sources through the legacy database query endpoint', async () => {
    const client = fakeClient([
      '{"type":"header","columns":["id"]}\n',
      '{"type":"data","row":{"id":1}}\n',
      '{"type":"end","totalRows":1}\n',
    ])

    await expect(
      previewSource(
        client,
        { type: 'database', sql: 'SELECT id FROM orders LIMIT 1', host: 'pg-main', database: 'orders' },
        5,
      ),
    ).resolves.toEqual({
      columns: [{ name: 'id' }],
      estimatedRows: null,
      sampleRows: [{ id: 1 }],
    })
    expect(client.postStream).toHaveBeenCalledWith('/cli-service/cli/doris/query', {
      sql: 'SELECT id FROM orders LIMIT 1',
      host: 'pg-main',
      database: 'orders',
    })
  })

  it('runs legacy doris plans as database sources', async () => {
    const client = fakeClient(['{"type":"data","row":{"id":2}}\n{"type":"end","totalRows":1}\n'])
    const rows = []

    for await (const row of runSource(client, { type: 'doris', sql: 'SELECT id FROM orders LIMIT 1' }, [])) {
      rows.push(row)
    }

    expect(rows).toEqual([{ id: 2 }])
  })

  it('reports database query errors without Doris-only wording', async () => {
    const client = fakeClient(['{"type":"error","message":"bad sql"}\n'])

    await expect(previewSource(client, { type: 'database', sql: 'SELECT bad' }, 5)).rejects.toThrow(
      'Database query error: bad sql',
    )
  })
})
