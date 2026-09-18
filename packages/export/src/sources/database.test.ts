import { Readable } from 'node:stream'
import type { APIClient } from '@mb-it-org/shared'
import { describe, expect, it, vi } from 'vitest'
import { buildDatabaseCursorSql, fetchDatabaseCursorBatch, quoteSqlIdentifier } from './database.js'

describe('database keyset pagination', () => {
  it('quotes Chinese identifiers with the selected database dialect', () => {
    expect(quoteSqlIdentifier('订单编号', 'doris')).toBe('`订单编号`')
    expect(quoteSqlIdentifier('订单编号', 'mysql')).toBe('`订单编号`')
    expect(quoteSqlIdentifier('订单编号', 'postgresql')).toBe('"订单编号"')
  })

  it('builds an explicit-column Doris keyset page without a bare SELECT star', () => {
    const sql = buildDatabaseCursorSql(
      {
        type: 'database',
        sql: 'SELECT `订单编号`, `创建时间`, `销售金额` FROM `订单明细`',
        pagination: {
          type: 'cursor',
          columns: ['创建时间', '订单编号'],
          dialect: 'doris',
          pageSize: 500,
        },
      },
      [{ name: '订单编号' }, { name: '创建时间' }, { name: '销售金额' }],
      ['2026-09-18 10:00:00', 100],
    )

    expect(sql).toContain('SELECT `__mbs_page`.`订单编号`, `__mbs_page`.`创建时间`, `__mbs_page`.`销售金额`')
    expect(sql).toContain('(`__mbs_page`.`创建时间`, `__mbs_page`.`订单编号`) > (\'2026-09-18 10:00:00\', 100)')
    expect(sql).toContain('ORDER BY `__mbs_page`.`创建时间`, `__mbs_page`.`订单编号`')
    expect(sql).toMatch(/LIMIT 500$/)
    expect(sql).not.toMatch(/^SELECT \*/)
  })

  it('rejects unsafe identifiers and cursor arity mismatches', () => {
    expect(() => quoteSqlIdentifier('id` DESC', 'doris')).toThrow('Unsafe SQL identifier')
    expect(() =>
      buildDatabaseCursorSql(
        {
          type: 'database',
          sql: 'SELECT id, created_at FROM orders',
          pagination: {
            type: 'cursor',
            columns: ['created_at', 'id'],
            dialect: 'postgresql',
            pageSize: 100,
          },
        },
        [{ name: 'id' }, { name: 'created_at' }],
        ['2026-09-18'],
      ),
    ).toThrow('Cursor value count')
  })

  it('returns a durable next cursor from one bounded server page', async () => {
    const postStream = vi.fn().mockResolvedValue(Readable.from([
      '{"type":"data","row":{"created_at":"2026-09-18","id":10,"amount":1}}\n',
      '{"type":"data","row":{"created_at":"2026-09-18","id":11,"amount":2}}\n',
      '{"type":"end","totalRows":2}\n',
    ]))
    const client = { postStream } as unknown as APIClient
    const source = {
      type: 'database' as const,
      sql: 'SELECT created_at, id, amount FROM orders',
      host: 'pg-main',
      database: 'orders',
      pagination: {
        type: 'cursor' as const,
        columns: ['created_at', 'id'],
        dialect: 'postgresql' as const,
        pageSize: 2,
      },
    }

    const result = await fetchDatabaseCursorBatch(
      client,
      source,
      [{ name: 'created_at' }, { name: 'id' }, { name: 'amount' }],
    )

    expect(result.rows).toHaveLength(2)
    expect(result.nextState).toEqual({
      type: 'database-cursor',
      cursor: ['2026-09-18', 11],
      totalSeen: 2,
      done: false,
    })
    expect(postStream).toHaveBeenCalledWith('/cli-service/cli/doris/query', expect.objectContaining({
      host: 'pg-main',
      database: 'orders',
      sql: expect.stringContaining('ORDER BY "__mbs_page"."created_at", "__mbs_page"."id" LIMIT 2'),
    }))
  })
})
