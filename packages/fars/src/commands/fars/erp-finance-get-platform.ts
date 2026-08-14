// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetPlatform extends MBSCommand {
  static description = '获取平台列表：财务报表(平台账单)页加载时调用，无入参，返回当前用户可见的平台列表，用于渲染页面顶部「平台」下拉选择框(art-template PlatformTemplate)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetPlatform)

    const data = await this.client.post('/erpFinance/erpFinance/bill/getPlatform', {})
    this.output(data)
  }
}
