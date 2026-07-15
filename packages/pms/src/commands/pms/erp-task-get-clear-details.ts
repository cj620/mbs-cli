// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskGetClearDetails extends MBSCommand {
  static description = '开发必做事项清零明细查询：查询当前登录人（非人事部/总经办视角）的开发必做事项每日清零明细，返回按日期排列的重量异常、产品投诉、售后问题、采购异常、拍照、质检二套图、复审被拒、推荐品等各类事项的应完成/未完成数量及手动清零时间。当 content 为大酋长时额外展示组员(开发员)列。本接口无请求体参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskGetClearDetails)

    const data = await this.client.post('/erpTask/erpTask/developMustDo/getClearDetails', {})
    this.output(data)
  }
}
