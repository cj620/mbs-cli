// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorHotProductWithShop extends MBSCommand {
  static description = '店铺热销商品(listing)查询：按平台、店铺、店铺负责人、原币种、销售金额区间、统计时间等条件，分页查询店铺维度的热销商品(listing)列表，返回商品图文、售价区间、7/30/90天销量、浏览量、收藏量等运营监控字段。'

  static flags = {
    plaformId: Flags.string({ description: '平台ID（来源下拉 #plaformId，取自 platform 接口返回的 platformId；原文拼写为 plaformId）' }),
    shopId: Flags.string({ description: '店铺ID（来源下拉 #shopId，取自 shopByPlatform 接口返回的 shopId）' }),
    currency: Flags.string({ description: '原币种（来源下拉 #currency，取自 currency 接口返回值）' }),
    minPrice: Flags.string({ description: '销售金额区间-最小值（来源输入框 #minPrice，单位：金额）' }),
    maxPrice: Flags.string({ description: '销售金额区间-最大值（来源输入框 #maxPrice，单位：金额）' }),
    saleLeader: Flags.string({ description: '店铺负责人（来源下拉 #saleLeader，取自 saleLeader3 接口返回值）' }),
    orderWay: Flags.string({ description: '排序方式。枚举：DESC=降序 / ASC=升序（来源 #orderFiled 选中项的 value-data 属性）' }),
    statisDate: Flags.string({ description: '统计/查询日期，格式 yyyy-M-d（来源时间下拉 #getTime：今天/昨天/前天，或自定义 #startTime；未选时为空）' }),
    orderFiled: Flags.string({ description: '排序字段。枚举：saven_days_sales_num=7天销量 / thirty_days_sales_num=30天销量 / ninety_days_sales_num=90天销量（来源下拉 #orderFiled）' }),
    currPage: Flags.string({ description: '当前页码（search() 固定传 1；翻页回调取 api.getCurrent()）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorHotProductWithShop)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/hotProductWithShop', { "plaformId": flags.plaformId, "shopId": flags.shopId, "currency": flags.currency, "minPrice": flags.minPrice, "maxPrice": flags.maxPrice, "saleLeader": flags.saleLeader, "orderWay": flags.orderWay, "statisDate": flags.statisDate, "orderFiled": flags.orderFiled, "currPage": flags.currPage })
    this.output(data)
  }
}
