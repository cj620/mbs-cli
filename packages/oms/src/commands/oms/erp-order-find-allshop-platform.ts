// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindAllshopPlatform extends MBSCommand {
  static description = '查询平台全部店铺（findAllshopPlatform）：SMT（速卖通）广告报表页初始化时调用，按平台ID查询该平台下的全部店铺列表，用于「请选择店铺」下拉框选项渲染。当前页面固定传 platformId=10。'

  static flags = {
    platformId: Flags.string({ description: '平台ID。SMT广告报表页固定传 10（速卖通/SMT 平台），用于过滤该平台下的店铺。来源：源码硬编码常量（非页面控件输入）。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindAllshopPlatform)

    const data = await this.client.post('/erpOrder/erpOrder/eabyAdCampaignFee/findAllshopPlatform', { "platformId": flags.platformId })
    this.output(data)
  }
}
