// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetPlatformShortageRate extends MBSCommand {
  static description = '八个平台缺货率查询：平台店长看板（platformleader）加载时调用，按平台维度统计各电商平台的库存缺货率与按时发货率，返回平台缺货率列表，前端据缺货率高低用不同颜色卡片渲染（≥15%红/10~15%黄/5~10%灰/<5%绿），并可点击查看单平台缺货 SKU 明细。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetPlatformShortageRate)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/getPlatformShortageRate', {})
    this.output(data)
  }
}
