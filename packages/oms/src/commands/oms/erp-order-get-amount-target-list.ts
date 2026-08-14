// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetAmountTargetList extends MBSCommand {
  static description = '市场部月度毛利额目标列表查询：按部门与时间区间查询市场部（人员维度）月度毛利额目标完成情况，返回人员/部门列表（本月/上月/下月/年度的目标额、完成率、环比、销售额/毛利率/毛利额）及一行汇总 sum；列表为树形懒加载首层数据。'

  static flags = {
    departmentId: Flags.string({ description: '部门ID。源码固定写死为 54（市场部），来源：硬编码常量', required: true }),
    startTime: Flags.string({ description: '统计区间-起始时间（月份起始，格式 YYYY-MM-DD），来源：历史记录抽屉项 item.startTime / 当月计算值 YYYY-MM-01', required: true }),
    endTime: Flags.string({ description: '统计区间-结束时间（格式 YYYY-MM-DD），来源：历史记录抽屉项 item.endTime', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetAmountTargetList)

    const data = await this.client.post('/erpOrder/erpOrder/salesAmountTarget/getAmountTargetList', { "departmentId": flags.departmentId, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
