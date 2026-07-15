// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindLowProfitOrder extends MBSCommand {
  static description = '低利润(限价)订单列表查询：仪表盘「限价订单」(低利润订单)页签的分页列表查询：按店长、店铺、任务类型、平台、推送时间区间、处理状态等条件筛选低利润/限价订单，返回订单列表及金额、国家、时间、运费、交易单号、订单备注、是否低利润等字段，前端用 art-template 渲染表格。'

  static flags = {
    shopManager: Flags.string({ description: '店长(店长筛选下拉 #saleLeader10 的值)' }),
    shopid: Flags.string({ description: '店铺ID(店铺筛选下拉 #shopName10 的值)' }),
    orderType: Flags.string({ description: '任务类型(下拉 #orderType)。\'\'=全部;1=不满足供应商限价;2=不满足公司内部毛利率要求;3=smt高成本低毛利率;4=ebay高金额低毛利率' }),
    platformId: Flags.string({ description: '平台ID(平台下拉 #platformes2 的值,选项由 getPlatformList2() 动态加载)' }),
    yearMonth: Flags.string({ description: '年月(原下拉 #yearMonth2,该控件在HTML中已被注释,当前实际取值为undefined,仅参数对象保留该键)(待人工确认)' }),
    operStatus: Flags.string({ description: '处理状态(下拉 #operStatus)。\'\'=全部;1=未完成(默认选中);2=已完成' }),
    pushStartTime: Flags.string({ description: '推送开始时间(日期区间组件 date-picker 的 timmer[0],选择时间区间后才追加)' }),
    pushEndTime: Flags.string({ description: '推送结束时间(日期区间组件 date-picker 的 timmer[1],选择时间区间后才追加)' }),
    currPage: Flags.string({ description: '当前页码(仅翻页 limitedPricePaging() 回调时追加;首次查询不传,后端默认第1页,每页10条)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindLowProfitOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findLowProfitOrder', { "shopManager": flags.shopManager, "shopid": flags.shopid, "orderType": flags.orderType, "platformId": flags.platformId, "yearMonth": flags.yearMonth, "operStatus": flags.operStatus, "pushStartTime": flags.pushStartTime, "pushEndTime": flags.pushEndTime, "currPage": flags.currPage })
    this.output(data)
  }
}
