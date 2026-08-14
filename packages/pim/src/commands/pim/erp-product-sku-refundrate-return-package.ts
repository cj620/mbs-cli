// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
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
