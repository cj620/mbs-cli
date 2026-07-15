// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetTurnoverRatioList extends MBSCommand {
  static description = '查询动销率统计：查询动销率统计'

  static flags = {
    teamIds: Flags.string({ description: '团队ID列表（字段名推断,语义待核实）' }),
    userId: Flags.string({ description: '用户ID（字段名推断,语义待核实）' }),
    startDate: Flags.string({ description: '开始日期（字段名推断,语义待核实）' }),
    endDate: Flags.string({ description: '结束日期（字段名推断,语义待核实）' }),
    leaderName: Flags.string({ description: '组长名称（字段名推断,语义待核实）' }),
    index: Flags.string({ description: '索引（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetTurnoverRatioList)

    const data = await this.client.post('/yypms/pms/product/getTurnoverRatioList', {}, { params: { "teamIds": flags.teamIds, "userId": flags.userId, "startDate": flags.startDate, "endDate": flags.endDate, "leaderName": flags.leaderName, "index": flags.index } })
    this.output(data)
  }
}
