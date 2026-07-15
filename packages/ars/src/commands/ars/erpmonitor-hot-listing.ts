// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorHotListing extends MBSCommand {
  static description = '热销Listing列表查询：在线商品监控页「热销」标签页列表查询：按销售风向(上涨/下跌/不变)筛选，分页返回热销listing列表，含商品信息、店铺/负责人、售价、7/30/90天销量、浏览量、收藏量、销售风向、毛利率、退款风向、退款率等汇总字段(前端最多展示100条)。'

  static flags = {
    salesWind: Flags.string({ description: '销售风向筛选。来源 #salesWind 下拉框。枚举：\'\'=销售风向(不限/全部);1=上涨;-1=下跌;0=不变' }),
    currpage: Flags.string({ description: '当前页码。来源分页控件 api.getCurrent()，首次查询固定为 1', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorHotListing)

    const data = await this.client.post('/erpmonitor/erpmonitor/managerHotProduct/hotListing', {}, { params: { "salesWind": flags.salesWind, "currpage": flags.currpage } })
    this.output(data)
  }
}
