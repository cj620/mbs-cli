// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetManagerSalesPkMatch extends MBSCommand {
  static description = '二级部门经理销售PK榜单查询：实景大屏「业绩PK」播报页：按平台(aliexpress)与数据日期查询各二级部门经理的销售额PK榜单，返回上月/本月/预计本月/预计增长销售额及排名，前端以 el-table 渲染，前3名展示奖杯。'

  static flags = {
    time: Flags.string({ description: '数据日期，格式 YYYYMMDD；前端固定取「昨日」(当前时间-24h)，示例 URL 中为空串', required: true }),
    platform: Flags.string({ description: '平台标识，固定取值 aliexpress(速卖通)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetManagerSalesPkMatch)

    const data = await this.client.post('/erpOrder/erpOrder/pKmatchController/getManagerSalesPkMatch', {}, { params: { "time": flags.time, "platform": flags.platform } })
    this.output(data)
  }
}
