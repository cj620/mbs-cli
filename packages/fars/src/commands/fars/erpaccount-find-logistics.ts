// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountFindLogistics extends MBSCommand {
  static description = '昨天货运渠道监控报表查询：物流员/销售首页仪表盘加载时调用，按时间区间统计昨天各货运渠道的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比及渠道启用状态，返回渠道监控列表用于「昨天货运渠道监控报表」表格渲染。'

  static flags = {
    sortStyle: Flags.string({ description: '排序方式。前端固定传\'发货单量降序\'(来源:代码常量,无控件)', required: true }),
    endnum: Flags.string({ description: '查询条数(取前N条)。前端固定传\'20\'(来源:代码常量,无控件)', required: true }),
    startTime: Flags.string({ description: '统计开始时间(yyyy-MM-dd)。前端取当前日期前一天(getBeforeMonth(new Date())),即\'昨天\'(来源:代码计算,无控件)', required: true }),
    endTime: Flags.string({ description: '统计结束时间(yyyy-MM-dd)。源码赋值为startTime(与开始时间相同,疑为笔误)(来源:代码计算,无控件)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountFindLogistics)

    const data = await this.client.post('/erpaccount/erpaccount/logisticsController/findLogistics', { "sortStyle": flags.sortStyle, "endnum": flags.endnum, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
