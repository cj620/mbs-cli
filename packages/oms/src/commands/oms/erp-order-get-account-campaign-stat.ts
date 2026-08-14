// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetAccountCampaignStat extends MBSCommand {
  static description = '人员任务报表-账号Campaign统计查询：按时间区间与排序方式统计各业务员(ERP用户)的广告投放业绩：返回每个人的 campaigns 数量、消耗金额、转化价值、单量、ROI、周出单≥10 的 campaigns 数量、出单比例、点击、转化率等汇总指标，用于报表页表格渲染。'

  static flags = {
    starttime: Flags.string({ description: '统计开始时间。来源控件 #starttime(input type=date)，格式 YYYY-MM-DD；默认值=今天前7天' }),
    endtime: Flags.string({ description: '统计结束时间。来源控件 #endtime(input type=date)，格式 YYYY-MM-DD；默认值=今天' }),
    orderby: Flags.string({ description: '排序方式。来源控件 #desc(下拉选择)，枚举：campaigns数量升序/campaigns数量降序/消耗金额升序/消耗金额降序/转化价值升序/转化价值降序/单量升序/单量降序/ROI升序/ROI降序/周出单>=10的campagigns数量升序/周出单>=10的campagigns数量降序/出单比例升序/出单比例降序/点击升序/点击降序/转化率升序/转化率降序' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetAccountCampaignStat)

    const data = await this.client.post('/erpOrder/erpOrder/seebeeDevelopmentShop/getAccountCampaignStat', { "starttime": flags.starttime, "endtime": flags.endtime, "orderby": flags.orderby })
    this.output(data)
  }
}
