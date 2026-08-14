// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetWeekMonthProductSalesVolume extends MBSCommand {
  static description = '月度商品销量(周/月)统计查询：业绩目标(月)看板顶部卡片数据查询：返回所选时段的年度已完成销售额及按周/月维度的销量目标完成列表(实际/目标 形式)，供 contentTemplate2 模板渲染「{year}年已完成 / 月业绩目标」区块。'

  static flags = {
    targetType: Flags.string({ description: '目标类型，固定取值 4(月-商品销量统计维度)，写死在 URL', required: true }),
    month: Flags.string({ description: '时段标识。取自 getSalesTargetFirst(week) 入参(来源 sessionStorage.productindex 或时段索引)，0=本月/当前时段，>0=历史时段索引', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetWeekMonthProductSalesVolume)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getWeekMonthProductSalesVolume', {}, { params: { "targetType": flags.targetType, "month": flags.month } })
    this.output(data)
  }
}
