// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSellPriceBySku extends MBSCommand {
  static description = '获取到售价：获取到售价'

  static flags = {
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）', required: true }),
    grossProfitRate: Flags.string({ description: '毛利润比率（字段名推断,语义待核实）', required: true }),
    logisticsName: Flags.string({ description: '物流名称（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSellPriceBySku)

    const data = await this.client.post('/yypms/pms/wishPublishInfo/getSellPriceBySku', {}, { params: { "spu": flags.spu, "grossProfitRate": flags.grossProfitRate, "logisticsName": flags.logisticsName } })
    this.output(data)
  }
}
