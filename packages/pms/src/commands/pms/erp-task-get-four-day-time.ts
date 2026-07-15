// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskGetFourDayTime extends MBSCommand {
  static description = '获取评价任务四/五天时间Tab信息：listing评价列表页(evaluationList.html)加载时调用，返回顶部若干个时间Tab（今天/昨天/前天/更早/精华等）的标题、任务数量与时间(区间)。前端据此渲染各Tab文案与徽标数字，并用第1个Tab的时间(TIMES)自动触发 reviewListingList 查询当日评价列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskGetFourDayTime)

    const data = await this.client.post('/erpTask/erpTask/reviewListingTask/getFourDayTime', {})
    this.output(data)
  }
}
