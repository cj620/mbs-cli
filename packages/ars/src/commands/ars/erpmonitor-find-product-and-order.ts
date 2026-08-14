// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFindProductAndOrder extends MBSCommand {
  static description = 'EZBuy 商品 & 订单报表查询：EZBuy 各店铺按品类的商品数/订单数监控报表分页查询：按统计时间区间、店铺过滤，返回每条统计日期-店铺-品类下的平台总商品数、平台总订单数、当日订单数及排名，并返回总条数与总页数用于前端分页。'

  static flags = {
    startDate: Flags.string({ description: '统计开始日期，来源控件#startDate(input type=date)，默认昨天，格式YYYY-MM-DD', required: true }),
    endDate: Flags.string({ description: '统计结束日期，来源控件#endDate(input type=date)，默认当天，格式YYYY-MM-DD，开始时间不能大于结束时间', required: true }),
    shopName: Flags.string({ description: '店铺(EZBuy店铺编码)，来源控件#shopName。枚举：空=全部;ezbuy001男装;ezbuy002女装;ezbuy003母婴;ezbuy004鞋包配饰;ezbuy005家具家居;ezbuy006 3C数码;ezbuy007运动户外;ezbuy008办公文具;ezbuy009美容个护;ezbuy010汽车配件' }),
    currPage: Flags.string({ description: '当前页码，首次search()固定1，分页回调取api.getCurrent()，每页50条', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFindProductAndOrder)

    const data = await this.client.post('/erpmonitor/erpmonitor/ezbuy/findProductAndOrder', {}, { params: { "startDate": flags.startDate, "endDate": flags.endDate, "shopName": flags.shopName, "currPage": flags.currPage } })
    this.output(data)
  }
}
