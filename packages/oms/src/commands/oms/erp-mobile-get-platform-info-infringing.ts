// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetPlatformInfoInfringing extends MBSCommand {
  static description = '侵权平台信息查询：移动端马帮ERP“提交侵权”页面加载时调用，获取可选的侵权平台列表，用于渲染“侵权平台”复选框（前4个直接展示，第5个及以后归入“更多平台”折叠区）。本接口不需要任何请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetPlatformInfoInfringing)

    const data = await this.client.post('/erpMobile/erpMobile/infringing/getPlatformInfo', {})
    this.output(data)
  }
}
