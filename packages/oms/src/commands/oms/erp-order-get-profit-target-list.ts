// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetProfitTargetList extends MBSCommand {
  static description = '市场部月度毛利目标列表查询：市场部月目标页面按部门与时间区间查询各负责人(部门/团队)月度毛利额目标完成情况列表，返回本月/上月/下月/年度累计等字段及汇总(sum)行；前端以懒加载树表展示，可下钻经理与店铺。'

  static flags = {
    departmentId: Flags.string({ description: '部门ID(代码固定值54=市场部)', required: true }),
    startTime: Flags.string({ description: '目标周期-起始日期(yyyy-MM-01,来源当前月首日或历史记录项)', required: true }),
    endTime: Flags.string({ description: '目标周期-结束日期(yyyy-MM-dd,来源当前周期或历史记录项)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetProfitTargetList)

    const data = await this.client.post('/erpOrder/erpOrder/salesProfitTarget/getProfitTargetList', { "departmentId": flags.departmentId, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
