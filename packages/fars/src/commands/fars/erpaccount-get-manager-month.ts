// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetManagerMonth extends MBSCommand {
  static description = '经理月度考核查询：经理月度考核数据查询：按所选平台与月份返回各月经理（人员）的毛利额增长得分、新品销售额得分、爆款得分、总分及发货毛利率等考核字段，用于经理月度考核播报表格展示。'

  static flags = {
    platformName: Flags.string({ description: '平台名称。来源平台单选按钮组。枚举：ALIEXPRESS、AMAZON&WALMART、EBAY、SEA（初始默认值 ALIEXPRESS&WALMART）', required: true }),
    createTime: Flags.string({ description: '考核月份，月份选择器经 getMonth() 转换为 YYYY-M（月份未补零）；当前年月时传空字符串表示最新月' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetManagerMonth)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/getManagerMonth', { "platformName": flags.platformName, "createTime": flags.createTime })
    this.output(data)
  }
}
