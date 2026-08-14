// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetProductTargetFirst extends MBSCommand {
  static description = '月度业绩目标首页查询：月业绩目标页首屏加载：按 targetType=2（月）与 week（月偏移量）查询当前层级（level 1/2/3）下各销售/主管的本月业绩目标、环比涨跌、实际销售额/毛利率/毛利额、完成率，以及上月、下月目标等数据，并返回历史目标时段（timeSlot）列表用于切换查看。'

  static flags = {
    targetType: Flags.string({ description: '目标类型，固定传 2（月维度/月业绩目标）', required: true }),
    week: Flags.string({ description: '月偏移量/历史目标时段索引。0=本月；>0=对应 obj.timeSlot[i] 的时段；来源 sessionStorage productindex、切换链接、返回本月(0)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetProductTargetFirst)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getProductTargetFirst', {}, { params: { "targetType": flags.targetType, "week": flags.week } })
    this.output(data)
  }
}
