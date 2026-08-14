// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetSalesTarget extends MBSCommand {
  static description = '业绩目标(大酋长/月)查询：大酋长业绩目标页加载/切换时段时调用：按 targetType=4（大酋长口径）、week（时段下标）拉取业绩目标数据，返回组员目标(bigChief)、店铺/汇总目标(sales)、可选历史时段(timeSlot)及 isLast 是否当前月标记，前端用 art-template(contentTemplate) 渲染本月/下月各三档目标表。'

  static flags = {
    targetType: Flags.string({ description: '目标口径类型，本页固定 4（大酋长/月维度）。来源：URL 硬编码 targetType=4', required: true }),
    week: Flags.string({ description: '时段下标。0=本月（默认）；>0=历史时段，取值为 obj.timeSlot 数组下标+1。来源：getSalesTarget(week) 入参拼接到 week=', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetSalesTarget)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getSalesTarget', {}, { params: { "targetType": flags.targetType, "week": flags.week } })
    this.output(data)
  }
}
