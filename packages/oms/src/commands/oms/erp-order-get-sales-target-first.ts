// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetSalesTargetFirst extends MBSCommand {
  static description = '月度销售业绩目标首页查询：月业绩目标看板首页加载：按 targetType=2(月) 与时间槽 week 查询当前层级(店铺/姓名)的本月/上月/下月业绩目标、实际销售额、毛利率、毛利额、完成率、环比涨跌、订单量等，返回可逐级下钻的 sales 列表及历史时间槽 timeSlot。'

  static flags = {
    targetType: Flags.string({ description: '目标类型,本接口固定2=月度', required: true }),
    week: Flags.string({ description: '时间槽序号(0=本月;历史槽传i+1;初次加载取sessionStorage.marketindex,无则0)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetSalesTargetFirst)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getSalesTargetFirst', {}, { params: { "targetType": flags.targetType, "week": flags.week } })
    this.output(data)
  }
}
