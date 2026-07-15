// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindSmtAdCampaignWeeks extends MBSCommand {
  static description = 'SMT广告报表-周期(周)列表查询：SMT(速卖通)广告报表页加载时获取可选「周期(周)」下拉列表，并据 isSelect 标记默认选中的当前周；前端用于初始化周期多选框及默认筛选周。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindSmtAdCampaignWeeks)

    const data = await this.client.get('/erpOrder/erpOrder/eabyAdCampaignFee/findSmtAdCampaignWeeks', { params: {} })
    this.output(data)
  }
}
