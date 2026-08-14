// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetWeekMonthSalesVolume extends MBSCommand {
  static description = '月业绩目标销量(已完成)统计查询：月业绩看板头部卡片数据查询：返回当前用户/部门本年度已完成销售额(万)及「月业绩目标」列表(各周/月时段销量，格式 目标/实际)，渲染于页面顶部卡片 #contentTemplate2。由月业绩首屏 getSalesTargetFirst() 成功回调内联调用。'

  static flags = {
    targetType: Flags.string({ description: '目标类型(维度)。固定取值=4(月维度统计)。来源：代码硬编码，非控件', required: true }),
    month: Flags.string({ description: '时段/月标识。透传自首屏 getSalesTargetFirst(week) 的 week 值：0=本月，1..n=obj.timeSlot 时段序号；示例 URL 中可为空(month=)。来源：页面「返回本月/时段目标业绩」链接 onclick=getSalesTargetFirst(i)，非输入控件' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetWeekMonthSalesVolume)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getWeekMonthSalesVolume', {}, { params: { "targetType": flags.targetType, "month": flags.month } })
    this.output(data)
  }
}
