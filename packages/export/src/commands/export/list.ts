import { Command } from '@oclif/core'
import { listPlans } from '../../plan-store.js'

export default class ExportList extends Command {
  static description = 'List unexpired export plans (local-only, no auth required)'

  async run(): Promise<void> {
    const plans = listPlans()
    this.log(
      JSON.stringify({
        ok: true,
        data: plans.map((p) => ({
          id: p.id,
          createdAt: p.createdAt,
          expiresAt: p.expiresAt,
          source: p.source.type,
          columns: p.columns.length,
          estimatedRows: p.estimatedRows,
        })),
      }),
    )
  }
}
