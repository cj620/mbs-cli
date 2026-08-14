// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskFindDispatchClerk extends MBSCommand {
  static description = '分派任务者统计查询：任务管理（我收到的任务）页面右侧「分派任务者」栏统计：按日期区间、处理结果、任务分类类型统计各分派人（任务创建人）名下的任务数量，返回分派人头像、账号及任务数，用于渲染分派人列表。'

  static flags = {
    startdate: Flags.string({ description: '开始日期(格式 yyyy-MM-dd)。来源：全局 startTime，由顶部按日期下拉 #getTime(近7/10/15/30/60/100/120天,据当天回推)或 #startTime 日期控件得到；未选择时传空字符串' }),
    enddate: Flags.string({ description: '结束日期(格式 yyyy-MM-dd)。来源：全局 endTime，选择近N天时默认为当天,或由 #endTime 日期控件得到；未选择时传空字符串' }),
    dealResult: Flags.string({ description: '处理结果。来源 #dealResult 下拉。枚举：已解决/无效/不处理/待处理(默认待处理)；选占位项时传空字符串' }),
    type: Flags.string({ description: '任务分类类型，前端固定传 1(我收到的任务)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskFindDispatchClerk)

    const data = await this.client.post('/erpTask/erpTask/taskController/findDispatchClerk', { "startdate": flags.startdate, "enddate": flags.enddate, "dealResult": flags.dealResult, "type": flags.type })
    this.output(data)
  }
}
