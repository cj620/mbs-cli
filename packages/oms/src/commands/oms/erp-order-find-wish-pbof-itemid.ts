// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWishPbofItemid extends MBSCommand {
  static description = 'Wish按listing查询PB投放报表(findWishPBOfItemid)：Wish平台Product Boost(广告/推广)按 listing 维度的分页统计查询：依据交易时间区间、店长、店铺、产品ID等条件，按指定字段排序，返回每个 listing 的广告费(总/新品/老品)、广告销售额、ACOS、PB占比、刊登时间、要价、CPM、费用流量、订单成交、店铺店长、ERP成交额单量等汇总指标列表。'

  static flags = {
    startTime: Flags.string({ description: '交易时间-起始(来源 #startTime 日期控件，格式 yyyy-MM-dd；为空时前端弹窗拦截)', required: true }),
    endTime: Flags.string({ description: '交易时间-结束(来源 #endTime 日期控件，格式 yyyy-MM-dd；为空或早于起始时前端拦截)', required: true }),
    shopmanager: Flags.string({ description: '店长(来源 #Shopowner 店长下拉选择，空=不限)' }),
    shopName: Flags.string({ description: '店铺名称(来源 #shopName 店铺下拉选择，依店长联动，空=不限)' }),
    field: Flags.string({ description: '排序字段(来源 #rank 选择器)。枚举：mabangOrderNum=ERP总单量(默认);spend=总费用;mabanggvm=ERP成交总额;sales=订单数' }),
    productId: Flags.string({ description: '产品ID(来源 #productId 输入框，空=不限)' }),
    order: Flags.string({ description: '排序方向(来源 #descending 选择器)。枚举：asc=升序;desc=降序(默认)' }),
    currPage: Flags.string({ description: '当前页码(首次查询固定1，分页回调取 api.getCurrent())', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定100；列表底部文案标注\'每页50条\'，以实际请求100为准)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWishPbofItemid)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemid', { "startTime": flags.startTime, "endTime": flags.endTime, "shopmanager": flags.shopmanager, "shopName": flags.shopName, "field": flags.field, "productId": flags.productId, "order": flags.order, "currPage": flags.currPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
