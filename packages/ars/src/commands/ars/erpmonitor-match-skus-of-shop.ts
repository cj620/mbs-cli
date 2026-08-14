// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorMatchSkusOfShop extends MBSCommand {
  static description = '店铺下架商品SKU匹配查询：修正刊登监控-下架明细页加载时调用：根据页面 URL 携带的店铺名称(shopName)与 SKU 集合(skus)查询该店铺下匹配到的商品 SKU 列表，返回店铺名称、商品标题、商品编号、平台SKU、主图、库存等，用于下架明细列表渲染。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称，指定要查询/下架的目标店铺(URL query，来源 GetQueryString(\'shopName\'))', required: true }),
    skus: Flags.string({ description: 'SKU集合(多值通常逗号分隔,待人工确认),用于匹配店铺下商品SKU(URL query,来源 GetQueryString(\'skus\'))' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorMatchSkusOfShop)

    const data = await this.client.post('/erpmonitor/erpmonitor/ReviseListingMonitor/matchSkusOfShop', {}, { params: { "shopName": flags.shopName, "skus": flags.skus } })
    this.output(data)
  }
}
