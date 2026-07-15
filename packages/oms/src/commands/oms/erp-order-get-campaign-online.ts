// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetCampaignOnline extends MBSCommand {
  static description = '某日在线投放计划(活动)查询：Wish商品Boost(PB)趋势图中点击某一天的数据点时，按商品ID与日期查询当天正在进行的投放活动(Campaign)列表，弹窗展示活动名称、起止时间、关键字、订单数、活动状态、花费等明细；返回空数组时提示“此时间无投放计划在进行”。'

  static flags = {
    productId: Flags.string({ description: '商品ID。来源：浏览器地址栏查询参数 GetQueryString(\'productId\')，标识要查询投放活动的商品', required: true }),
    date: Flags.string({ description: '查询日期。来源：echarts 趋势图被点击数据点的 X 轴值 param.name(日期，格式 yyyy-MM-dd)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetCampaignOnline)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/getCampaignOnline', { "productId": flags.productId, "date": flags.date })
    this.output(data)
  }
}
