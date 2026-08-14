// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetPlatformPublishInfo extends MBSCommand {
  static description = '平台正常在售产品刊登报表查询：财务管理看板加载“正常在售产品刊登报表”：无入参，按商品类目返回 EBAY/ALIEXPRESS/WISH/AMAZON/LAZADA/SHOPEE 六大平台的在线老品SKU数、在线新品SKU数(新品=30天内创建的sku)、平均刊登量，前端用 art-template 渲染为表格。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetPlatformPublishInfo)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/getPlatformPublishInfo', {})
    this.output(data)
  }
}
