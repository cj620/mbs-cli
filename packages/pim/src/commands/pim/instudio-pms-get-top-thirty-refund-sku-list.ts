// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetTopThirtyRefundSkuList extends MBSCommand {
  static description = '开发中台查看当月退款TOP30的sku：开发中台查看当月退款TOP30的sku'

  static flags = {
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    refundFee: Flags.string({ description: '退款费用（字段名推断,语义待核实）' }),
    detail: Flags.string({ description: '详情（字段名推断,语义待核实）' }),
    seller: Flags.string({ description: '卖家（字段名推断,语义待核实）' }),
    dateTime: Flags.string({ description: '日期时间（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetTopThirtyRefundSkuList)

    const data = await this.client.post('/yypms/pms/skuManager/getTopThirtyRefundSkuList', { "sku": flags.sku, "refundFee": flags.refundFee, "detail": flags.detail, "seller": flags.seller, "dateTime": flags.dateTime })
    this.output(data)
  }
}
