import { existsSync } from 'node:fs'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import ExcelJS from 'exceljs'
import { afterEach, describe, expect, it } from 'vitest'
import { writeXlsx } from './xlsx.js'

const cleanup: string[] = []

afterEach(async () => {
  await Promise.all(cleanup.splice(0).map((directory) => rm(directory, { recursive: true, force: true })))
})

describe('streaming xlsx writer', () => {
  it('streams rows into a temporary workbook and atomically publishes the final file', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'mbs-xlsx-'))
    cleanup.push(directory)
    const filePath = join(directory, 'orders.xlsx')

    async function* rows() {
      yield { id: 1, name: 'first' }
      yield { id: 2, name: 'second' }
    }

    const result = await writeXlsx({
      filePath,
      columns: [{ name: 'id' }, { name: 'name' }],
      rows: rows(),
    })

    expect(result.rows).toBe(2)
    expect(existsSync(filePath)).toBe(true)
    expect(existsSync(`${filePath}.part`)).toBe(false)
    const workbook = new ExcelJS.Workbook()
    await workbook.xlsx.readFile(filePath)
    expect(workbook.worksheets[0]?.rowCount).toBe(3)
  })

  it('never exposes an incomplete workbook at the final path', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'mbs-xlsx-'))
    cleanup.push(directory)
    const filePath = join(directory, 'orders.xlsx')

    async function* rows() {
      yield { id: 1 }
      throw new Error('interrupted')
    }

    await expect(writeXlsx({ filePath, columns: [{ name: 'id' }], rows: rows() })).rejects.toThrow('interrupted')
    expect(existsSync(filePath)).toBe(false)
  })

  it('splits large row streams before the Excel worksheet row limit', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'mbs-xlsx-'))
    cleanup.push(directory)
    const filePath = join(directory, 'orders.xlsx')

    async function* rows() {
      yield { id: 1 }
      yield { id: 2 }
      yield { id: 3 }
    }

    await writeXlsx({
      filePath,
      sheetName: 'Orders',
      columns: [{ name: 'id' }],
      rows: rows(),
      maxDataRowsPerSheet: 2,
    })
    const workbook = new ExcelJS.Workbook()
    await workbook.xlsx.readFile(filePath)
    expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual(['Orders', 'Orders_2'])
    expect(workbook.worksheets.map((sheet) => sheet.rowCount)).toEqual([3, 2])
  })
})
