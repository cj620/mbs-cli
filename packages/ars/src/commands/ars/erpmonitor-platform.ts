// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorPlatform extends MBSCommand {
  static description = '平台列表查询（热销商品监控-平台下拉）：热销商品监控页面初始化时调用，获取全部平台列表用于「平台」下拉选择框(#plaformId)渲染。无请求参数，返回平台ID与平台名称集合。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorPlatform)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/platform', {})
    this.output(data)
  }
}
