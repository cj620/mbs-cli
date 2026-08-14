// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDevelopManagerPkMatch extends MBSCommand {
  static description = '开发经理PK赛数据查询：大屏「经理擂台」PK 播报数据查询：按指定日期(默认昨天)与平台拉取各部门经理的爆款SKU数量、百元动销率及其排名榜单，前端 Element-Plus 表格滚动播报，超过21条滚动后跳转开发员榜单页。'

  static flags = {
    time: Flags.string({ description: '数据日期，URL query 参数；前端默认取昨天日期，格式 YYYYMMDD(由 new Date().getTime()-24*60*60*1000 计算后拼接年月日)。单位：日期(YYYYMMDD)', required: true }),
    platform: Flags.string({ description: '平台标识，URL query 参数；页面固定传 aliexpress(速卖通)。枚举：aliexpress=速卖通(本页固定)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDevelopManagerPkMatch)

    const data = await this.client.post('/erpOrder/erpOrder/pKmatchController/getDevelopManagerPkMatch', {}, { params: { "time": flags.time, "platform": flags.platform } })
    this.output(data)
  }
}
