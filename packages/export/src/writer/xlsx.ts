import ExcelJS from 'exceljs'
import type { ColumnSpec, Row } from '../types.js'

export interface WriteOptions {
  filePath: string
  sheetName?: string
  columns: ColumnSpec[]
  rows: AsyncIterable<Row>
  onProgress?: (count: number) => void
  progressEvery?: number
}

export interface WriteResult {
  filePath: string
  rows: number
}

export async function writeXlsx(opts: WriteOptions): Promise<WriteResult> {
  const workbook = new ExcelJS.stream.xlsx.WorkbookWriter({
    filename: opts.filePath,
    useStyles: false,
    useSharedStrings: false,
  })
  const sheet = workbook.addWorksheet(opts.sheetName ?? 'Sheet1')
  sheet.columns = opts.columns.map((c) => ({ header: c.name, key: c.name }))

  let count = 0
  const every = opts.progressEvery ?? 1000
  for await (const row of opts.rows) {
    const values: Record<string, unknown> = {}
    for (const col of opts.columns) {
      const v = row[col.name]
      values[col.name] = v === undefined || v === null ? null : normalize(v)
    }
    sheet.addRow(values).commit()
    count += 1
    if (opts.onProgress && count % every === 0) opts.onProgress(count)
  }
  sheet.commit()
  await workbook.commit()
  if (opts.onProgress) opts.onProgress(count)
  return { filePath: opts.filePath, rows: count }
}

function normalize(v: unknown): unknown {
  if (v instanceof Date) return v
  if (typeof v === 'object') return JSON.stringify(v)
  return v
}
