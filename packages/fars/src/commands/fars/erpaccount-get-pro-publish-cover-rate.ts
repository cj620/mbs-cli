// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetProPublishCoverRate extends MBSCommand {
  static description = '正常在售产品刊登覆盖率查询：商品刊登覆盖率看板查询：按商品类目维度统计马帮老品/新品 SKU 数量，以及老品、新品在 EBAY/ALIEXPRESS/WISH/AMAZON/LAZADA/SHOPEE 六大平台的铺货覆盖率（新品=30天内创建的 sku）。页面加载即自动调用，无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetProPublishCoverRate)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/getProPublishCoverRate', {})
    this.output(data)
  }
}
