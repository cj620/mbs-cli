import { Flags } from '@oclif/core'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { MBSCommand } from '@mb-it-org/shared'
import { loadPlan } from '../../plan-store.js'
import { runSource } from '../../sources/index.js'
import { writeXlsx } from '../../writer/xlsx.js'

export default class ExportRun extends MBSCommand {
  static description = 'Execute a saved export plan and write rows to an .xlsx file. Run `mbs export plan` first.'

  static examples = [
    'mbs export run --plan plan_abc123',
    'mbs export run --plan plan_abc123 --out ./orders.xlsx --sheet Orders',
  ]

  static flags = {
    plan: Flags.string({ required: true, description: 'Plan id returned by `mbs export plan`' }),
    out: Flags.string({ description: 'Output .xlsx path (default: tmp dir)' }),
    sheet: Flags.string({ default: 'Sheet1', description: 'Sheet name' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ExportRun)
    const plan = loadPlan(flags.plan)
    const outPath = flags.out ?? join(tmpdir(), `mbs-export-${plan.id}-${Date.now()}.xlsx`)
    const startedAt = Date.now()

    const result = await writeXlsx({
      filePath: outPath,
      sheetName: flags.sheet,
      columns: plan.columns,
      rows: runSource(this.client, plan.source, plan.columns),
      onProgress: (count) => {
        this.logToStderr(JSON.stringify({ progress: count }))
      },
    })

    this.output({
      planId: plan.id,
      file: result.filePath,
      rows: result.rows,
      columns: plan.columns.length,
      durationMs: Date.now() - startedAt,
    })
  }
}
