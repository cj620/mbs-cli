// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetPlatform extends MBSCommand {
  static description = '获取平台(回填默认排除平台)：借用运单号(Vova)页面加载时，根据浏览器 localStorage 中缓存的 platformId 调用本接口，取回当前用户对应的平台标识，用于回填页面顶部“排除平台”下拉框的默认选中值。'

  static flags = {
    platformId: Flags.string({ description: '平台ID。来源：浏览器 localStorage.platformId（取出后两次 replace(\'"\',\'\') 去除双引号）；以 Query String 形式拼接在 URL。无控件，由页面初始化逻辑自动取值', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetPlatform)

    const data = await this.client.get('/erpOrder/erpOrder/ERPOrder/getPlatform', { params: { "platformId": flags.platformId } })
    this.output(data)
  }
}
