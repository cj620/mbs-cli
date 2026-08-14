// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListingCountryPlatformSaleInfo extends MBSCommand {
  static description = 'Listing 国家/平台销量分布查询：店铺热卖商品监控页 listing 悬浮图表数据源：按 itemId/平台/店铺/平台SPU 查询该 listing 的销量分布，返回国家维度与平台维度两组（标题数组+销量数组），前端用 ECharts 渲染上下两个横向柱状图。'

  static flags = {
    itemId: Flags.string({ description: '平台商品(listing)ID，定位要查询销量分布的 listing；来源悬停元素 data-itemid', required: true }),
    platformId: Flags.string({ description: '平台ID(如 2=Amazon、26=Shopee、120=TikTok 等)；来源悬停元素 data-platformid', required: true }),
    shopName: Flags.string({ description: '店铺名称；来源悬停元素 data-shopname', required: true }),
    platformSpu: Flags.string({ description: '平台SPU编号；来源悬停元素 data-platformspu' }),
    relationListing: Flags.string({ description: '关联 listing 标识(关联刊登/多仓关联标记)；来源悬停元素 data-relationlisting' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListingCountryPlatformSaleInfo)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/listingCountryPlatformSaleInfo', {}, { params: { "itemId": flags.itemId, "platformId": flags.platformId, "shopName": flags.shopName, "platformSpu": flags.platformSpu, "relationListing": flags.relationListing } })
    this.output(data)
  }
}
