// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductSkuRefundrateReturnPackage extends MBSCommand {
  static description = 'SKU平台退款率/退包率查询：在SPU管理列表中，鼠标悬浮某行的退款/退包入口时，按SKU查询该SKU在各销售平台上的退款率、质差退款率、退包率，前端渲染成平台/退款率/质差退款率/退包率的悬浮表格。'

  static flags = {
    sku: Flags.string({ description: 'SKU编号（按SKU查询其各平台退款率/退包率），来源为列表行元素的 data-sid，拼接到 URL ?sku= 后', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductSkuRefundrateReturnPackage)

    const data = await this.client.get('/erpProduct/erpProduct/product/skuRefundrateReturnPackage', { params: { "sku": flags.sku } })
    this.output(data)
  }
}
