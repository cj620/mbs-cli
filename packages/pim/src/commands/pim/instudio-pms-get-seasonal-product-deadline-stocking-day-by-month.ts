// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSeasonalProductDeadlineStockingDayByMonth extends MBSCommand {
  static description = '季节产品截止备货月份：季节产品截止备货月份'

  static flags = {
    month: Flags.string({ description: '月份（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSeasonalProductDeadlineStockingDayByMonth)

    const data = await this.client.post('/yypms/pms/AllMessage/getSeasonalProductDeadlineStockingDayByMonth', {}, { params: { "month": flags.month } })
    this.output(data)
  }
}
