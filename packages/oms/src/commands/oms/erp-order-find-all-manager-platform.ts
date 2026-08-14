// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindAllManagerPlatform extends MBSCommand {
  static description = '速卖通广告-按平台查询全部店长(店长下拉)：速卖通(SMT)广告花费看板顶部「请选择店长」下拉框的数据源。前端在页面 onMounted 时调用，按平台ID(固定 platformId=10)查询该平台下的全部店长名称列表，返回字符串数组直接填充店长下拉选项。'

  static flags = {
    platformId: Flags.string({ description: '平台ID。前端固定传 10（对应速卖通 SMT 平台，本页为 smt-spending 速卖通广告看板）；来源：代码硬编码常量，非用户控件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindAllManagerPlatform)

    const data = await this.client.post('/erpOrder/erpOrder/eabyAdCampaignFee/findAllManagerPlatform', { "platformId": flags.platformId })
    this.output(data)
  }
}
