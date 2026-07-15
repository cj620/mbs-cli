// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountPlatformPullDown extends MBSCommand {
  static description = '平台下拉列表查询：仪表盘销售员页加载时调用，返回当前用户可见的平台名称列表，用于填充销量趋势图/销售占比图的平台下拉选择框。请求无任何业务参数，后端依据登录态返回平台名称字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountPlatformPullDown)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/platformPullDown', {})
    this.output(data)
  }
}
