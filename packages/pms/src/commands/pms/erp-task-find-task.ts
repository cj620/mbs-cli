// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskFindTask extends MBSCommand {
  static description = '我收到的任务列表查询：任务管理页「我收到的任务」分页查询：按日期区间、处理结果筛选，返回任务卡片列表（含分类、已读状态、标题、内容、创建人、处理结果、倒计时截止时间等），并驱动分页与倒计时渲染。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码。首次查询固定为1；分页回调取分页控件api.getCurrent()', required: true }),
    startdate: Flags.string({ description: '开始日期(yyyy-MM-dd)。来源#startTime或#getTime近N天(7/10/15/30/60/90/120天)换算，未选为空' }),
    enddate: Flags.string({ description: '结束日期(yyyy-MM-dd)。来源#endTime或近N天换算(默认当天)，未选为空' }),
    dealResult: Flags.string({ description: '处理结果筛选。枚举：已解决/无效/不处理/待处理(默认)/空=全部。来源#dealResult下拉' }),
    type: Flags.string({ description: '任务归属类型标识，固定传1(表示「我收到的任务」)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskFindTask)

    const data = await this.client.post('/erpTask/erpTask/taskController/findTask', { "currentPage": flags.currentPage, "startdate": flags.startdate, "enddate": flags.enddate, "dealResult": flags.dealResult, "type": flags.type })
    this.output(data)
  }
}
