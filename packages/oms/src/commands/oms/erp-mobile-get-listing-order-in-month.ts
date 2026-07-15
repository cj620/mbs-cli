// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetListingOrderInMonth extends MBSCommand {
  static description = '刊登商品近一月销量趋势查询：移动端「商品在线详情」页销量趋势图（echarts）数据来源接口：按商品(itemId/parentSPUId)与平台(platformId)查询该刊登商品近一个月内逐日的销量数据，返回销售时间(saleTime)与销量(saleNum)序列，前端据此绘制销量趋势折线图。'

  static flags = {
    parentSPUId: Flags.string({ description: '父级SPU/商品ID。来源：浏览器URL查询参数 itemId（GetQueryString("itemId")）；取不到时传空字符串' }),
    platformId: Flags.string({ description: '平台ID。来源：浏览器URL查询参数 platformId（GetQueryString("platformId")）；取不到时传空字符串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetListingOrderInMonth)

    const data = await this.client.post('/erpMobile/erpMobile/hotProductListing/getListingOrderInMonth', { "parentSPUId": flags.parentSPUId, "platformId": flags.platformId })
    this.output(data)
  }
}
