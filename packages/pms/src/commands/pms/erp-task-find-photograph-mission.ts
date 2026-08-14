// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskFindPhotographMission extends MBSCommand {
  static description = '拍照延迟任务列表查询：首页/看板"拍照延迟"面板分页查询：按完成状态与当前页码，返回拍照/作图任务列表（含SPU、任务类型、拍照耗时、拍摄备注、采购/物流、库存状态、创建人/时间、任务起止时间、拍照状态等）及分页信息(总数、总页数)，前端以art-template渲染成列表并分页。'

  static flags = {
    finishStatus: Flags.string({ description: '完成状态过滤，前端固定传1（拍照延迟/未完成任务）', required: true }),
    currentPage: Flags.string({ description: '当前页码。首次加载固定1；分页回调取分页控件api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskFindPhotographMission)

    const data = await this.client.post('/erpTask/erpTask/developMustDo/findPhotographMission', { "finishStatus": flags.finishStatus, "currentPage": flags.currentPage })
    this.output(data)
  }
}
