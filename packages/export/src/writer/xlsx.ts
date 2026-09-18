import ExcelJS from 'exceljs'
import { mkdirSync, renameSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import type { ColumnSpec, Row } from '../types.js'

export interface WriteOptions {
  filePath: string
  sheetName?: string
  columns: ColumnSpec[]
  rows: AsyncIterable<Row>
  onProgress?: (count: number) => void
  progressEvery?: number
  maxDataRowsPerSheet?: number
}

export interface WriteResult {
  filePath: string
  rows: number
}

/**
 * Streams rows into a temporary XLSX workbook and publishes it atomically after a successful commit.
 *
 * <p>Only one row is materialized at a time by ExcelJS's streaming writer. A failure never exposes the
 * incomplete workbook at the requested final path; callers can retain their durable staging data and invoke
 * this function again.</p>
 *
 * @param opts Output path, worksheet metadata, asynchronous row stream, and optional progress callback.
 * @returns Final absolute file path and number of data rows written.
 * @throws Error When row iteration, workbook serialization, or final publication fails.
 */
export async function writeXlsx(opts: WriteOptions): Promise<WriteResult> {
  const filePath = resolve(opts.filePath)
  const temporaryPath = `${filePath}.part`
  const maxDataRowsPerSheet = opts.maxDataRowsPerSheet ?? 1_048_575
  if (!Number.isInteger(maxDataRowsPerSheet) || maxDataRowsPerSheet < 1 || maxDataRowsPerSheet > 1_048_575) {
    throw new Error('maxDataRowsPerSheet must be an integer between 1 and 1048575')
  }
  mkdirSync(dirname(filePath), { recursive: true })
  rmSync(temporaryPath, { force: true })
  const workbook = new ExcelJS.stream.xlsx.WorkbookWriter({
    filename: temporaryPath,
    useStyles: false,
    useSharedStrings: false,
  })
  let sheetIndex = 1
  let sheet = createWorksheet(workbook, opts.sheetName ?? 'Sheet1', sheetIndex, opts.columns)
  let sheetRows = 0

  let count = 0
  const every = opts.progressEvery ?? 1000
  try {
    for await (const row of opts.rows) {
      if (sheetRows >= maxDataRowsPerSheet) {
        sheet.commit()
        sheetIndex += 1
        sheet = createWorksheet(workbook, opts.sheetName ?? 'Sheet1', sheetIndex, opts.columns)
        sheetRows = 0
      }
      const values: Record<string, unknown> = {}
      for (const col of opts.columns) {
        const v = row[col.name]
        values[col.name] = v === undefined || v === null ? null : normalize(v)
      }
      sheet.addRow(values).commit()
      count += 1
      sheetRows += 1
      if (opts.onProgress && count % every === 0) opts.onProgress(count)
    }
    sheet.commit()
    await workbook.commit()
    renameSync(temporaryPath, filePath)
  } catch (error) {
    const stream = (workbook as unknown as { stream?: { destroy?: () => void } }).stream
    stream?.destroy?.()
    rmSync(temporaryPath, { force: true })
    throw error
  }
  if (opts.onProgress) opts.onProgress(count)
  return { filePath, rows: count }
}

/**
 * Creates one streaming worksheet with a valid, deterministic split-sheet name and shared columns.
 *
 * @param workbook Active streaming workbook.
 * @param baseName User-selected base sheet name.
 * @param index One-based split index.
 * @param columns Export columns written as the header row.
 * @returns Newly configured streaming worksheet.
 */
function createWorksheet(
  workbook: ExcelJS.stream.xlsx.WorkbookWriter,
  baseName: string,
  index: number,
  columns: ColumnSpec[],
): ReturnType<ExcelJS.stream.xlsx.WorkbookWriter['addWorksheet']> {
  const suffix = index === 1 ? '' : `_${index}`
  const sanitized = baseName.replace(/[\\/*?:\[\]]/g, '_').trim() || 'Sheet'
  const name = `${sanitized.slice(0, 31 - suffix.length)}${suffix}`
  const sheet = workbook.addWorksheet(name)
  sheet.columns = columns.map((column) => ({ header: column.name, key: column.name }))
  return sheet
}

/**
 * Converts nested values into deterministic cell text while preserving primitive scalars and dates.
 *
 * @param v Source row value.
 * @returns Excel-compatible scalar value.
 */
function normalize(v: unknown): unknown {
  if (v instanceof Date) return v
  if (typeof v === 'object') return JSON.stringify(v)
  return v
}
