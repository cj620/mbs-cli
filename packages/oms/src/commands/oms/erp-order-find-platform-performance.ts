// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindPlatformPerformance extends MBSCommand {
  static description = '平台绩效月报查询：平台绩效月报页面按月查询各电商平台绩效数据：传入起始月份(starttime)、平台(platformid)、类型(type=2)，返回 obj.data 各平台行（本月/上月各项数据反馈、月度涨幅、近30天数据、毛利率等）与 obj.sum 汇总行，以及最后更新日期 obj.time。本月/上月/上上月/上三~六月各 Tab 均调用本接口，仅 starttime 不同。'

  static flags = {
    starttime: Flags.string({ description: '统计起始月份时间，来源 sessionStorage(thisweek/lastweek/beforeweek/moreWeek1~4)，值由 findMonth 接口返回；来源控件：Tab 切换', required: true }),
    platformid: Flags.string({ description: '平台ID，取自隐藏控件 #platformId（为空则查全部平台）' }),
    type: Flags.string({ description: '查询类型，各 Tab 固定传 \'2\'（平台绩效月报维度）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindPlatformPerformance)

    const data = await this.client.post('/erpOrder/erpOrder/platformPerformance/findPlatformPerformance', { "starttime": flags.starttime, "platformid": flags.platformid, "type": flags.type })
    this.output(data)
  }
}
