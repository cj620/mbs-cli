// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetManagerPeopleName extends MBSCommand {
  static description = '获取客服人员名称列表：eBay Case 退货任务管理页面初始化时调用，返回客服人员名称列表，用于渲染「客服」筛选下拉框选项。页面加载即自动触发，无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetManagerPeopleName)

    const data = await this.client.post('/erpOrder/erpOrder/ebayCaseTask/getManagerPeopleName', {})
    this.output(data)
  }
}
