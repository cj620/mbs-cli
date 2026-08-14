// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindOrderToday extends MBSCommand {
  static description = '今日订单概况查询：移动端「我的桌面」首页按订单时间查询当天的订单概况：返回今日订单数/销售额/退款单、总待发货/待发销售额、今日退款金额、今日新增缺货单、总缺货单量/缺货销售额、利润、毛利率、缺货率等汇总指标，以及当前用户头像。'

  static flags = {
    ordertimestr: Flags.string({ description: '订单查询日期字符串,格式YYYY-MM-DD,取自页面#nowDate(前一天/后一天切换),默认当天', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindOrderToday)

    const data = await this.client.post('/erpMobile/erpMobile/pushController/findOrderToday', { "ordertimestr": flags.ordertimestr })
    this.output(data)
  }
}
