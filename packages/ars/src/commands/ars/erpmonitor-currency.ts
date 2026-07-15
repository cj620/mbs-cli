// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorCurrency extends MBSCommand {
  static description = '原币种列表查询：热销商品监控页初始化时加载「原币种(currency)」下拉选择框的可选值列表。该接口为无参 POST，返回全部可选原币种字符串数组，前端用 art-template 模板 contentTemplate4 渲染为 select#currency 的 option 项，供搜索时按原币种过滤。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorCurrency)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/currency', {})
    this.output(data)
  }
}
