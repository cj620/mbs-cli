// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPlatformProduct extends MBSCommand {
  static description = '平台列表查询：查询全部平台列表，用于详情页筛选区平台下拉选择框的选项数据源。页面加载时调用一次，返回平台集合，前端以 sequenceid 作为选项值、name 作为选项显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPlatformProduct)

    const data = await this.client.post('/erpProduct/erpProduct/product/findPlatform', {})
    this.output(data)
  }
}
