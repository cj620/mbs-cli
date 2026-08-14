// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPurchaseSku2 extends MBSCommand {
  static description = 'SKU采购在途运单查询(getPurchaseSku2)：SPU管理列表中鼠标悬停某SKU在途小窗时触发，按SKU查询该SKU的采购在途运单明细（运单号、在途数量、到货状态、采购跟进日志、最新物流轨迹），渲染到 popover 弹窗。'

  static flags = {
    skuQuery: Flags.string({ description: 'URL查询参数，当前SKU编号(来源列表行 data-sid)', required: true }),
    skuBody: Flags.string({ description: '请求体参数，与query同值，当前SKU编号', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPurchaseSku2)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getPurchaseSku2', { "sku": flags.skuBody }, { params: { "sku": flags.skuQuery } })
    this.output(data)
  }
}
