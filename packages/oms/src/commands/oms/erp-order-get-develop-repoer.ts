// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDevelopRepoer extends MBSCommand {
  static description = '开发大酋长报表查询：「开发大酋长报表」页面按周(本周/上周/上上周)查询开发员开发与业绩报表：返回开发员(含组员明细 reportList)的开发表现、业绩表现、工作表现、质量表现等多维指标及一行汇总(sum)。'

  static flags = {
    times: Flags.string({ description: '统计周时间标识。来源 getThreeWeekTime 返回的 obj[0](本周)/obj[1](上周)/obj[2](上上周)，经 sessionStorage(devthisweek/devlastweek/devbeforeweek) 回填。', required: true }),
    status: Flags.string({ description: '状态标识，前端固定传 1。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDevelopRepoer)

    const data = await this.client.post('/erpOrder/erpOrder/developReport/getDevelopRepoer', { "times": flags.times, "status": flags.status })
    this.output(data)
  }
}
