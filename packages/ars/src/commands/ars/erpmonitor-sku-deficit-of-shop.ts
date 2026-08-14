// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorSkuDeficitOfShop extends MBSCommand {
  static description = '店铺亏损SKU明细查询：按店铺查询亏损SKU明细列表，分页返回该店铺下商品(SPU/SKU)的店铺、图片、上架时间、售价、总成本、预估亏损金额、售出数量、是否加钻、库存等，用于亏损监控与批量下架/立即拉取商品。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID。来源：页面URL查询参数，GetQueryString(\'shopId\')读取；决定查询哪个店铺的亏损明细', required: true }),
    currPage: Flags.string({ description: '当前页码。首屏固定为1；翻页时取分页组件api.getCurrent()。单位：页', required: true }),
    orderBy: Flags.string({ description: '排序方式。来源控件：#orderBy下拉框。枚举：12=上架时间倒序排列(默认)；11=上架时间正序排列' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorSkuDeficitOfShop)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/skuDeficitOfShop', {}, { params: { "shopId": flags.shopId, "currPage": flags.currPage, "orderBy": flags.orderBy } })
    this.output(data)
  }
}
