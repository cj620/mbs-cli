// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetProductdepartmentPkmatch extends MBSCommand {
  static description = '各产品部门PK赛战报查询：产品部门新品PK赛大屏战报：查询各部门(队伍)新品销售额、订单销售额预估增长率、发货毛利额预估增长率及各项排名，按队伍逐行返回用于大屏 el-table 滚动播报展示。'

  static flags = {
    time: Flags.string({ description: '战报期次/时间标识，源码固定硬编码为 203308，拼接在 URL Query 上，无来源控件。具体业务取值规则(待人工确认)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetProductdepartmentPkmatch)

    const data = await this.client.post('/erpOrder/erpOrder/pKmatchController/getProductdepartmentPkmatch', {}, { params: { "time": flags.time } })
    this.output(data)
  }
}
