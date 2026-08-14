// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDirectorSalesPkmatch extends MBSCommand {
  static description = '二级部门销售PK榜(总监)查询：销售PK大屏播报：按平台与日期查询各二级部门(及负责人/总监)的上月销售额、当月销售额、预计当月销售额、预计增长额、排名与预估输赢，渲染于 Element-Plus 表格大屏轮播。'

  static flags = {
    time: Flags.string({ description: '查询日期(Query)。格式 yyyyMMdd；前端取当前时间-1天(昨天)拼接而成。来源：JS自动计算', required: true }),
    platform: Flags.string({ description: '平台(Query)。固定取值 aliexpress(速卖通)。来源：代码硬编码', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDirectorSalesPkmatch)

    const data = await this.client.post('/erpOrder/erpOrder/pKmatchController/getDirectorSalesPKMatch', {}, { params: { "time": flags.time, "platform": flags.platform } })
    this.output(data)
  }
}
