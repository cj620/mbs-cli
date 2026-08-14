// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWeekPlatformPerformance extends MBSCommand {
  static description = '平台绩效周报-周时间点查询：平台绩效周报页面加载时调用，返回本周、上周、上上周三个周起始时间点；前端分别存入 sessionStorage(thisweek/lastweek/beforeweek) 作为后续 findPlatformPerformance 的 starttime 入参，并用于页面起止日期展示。前端未提交任何请求体参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWeekPlatformPerformance)

    const data = await this.client.post('/erpOrder/erpOrder/platformPerformance/findWeek', {})
    this.output(data)
  }
}
