// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinancePaypalCaseReason extends MBSCommand {
  static description = 'PayPal Case 原因列表查询：查询 PayPal 纠纷案件（Case）的全部「原因」枚举项，用于 PayPal Case 列表页顶部「请选择原因」多选下拉框的渲染。无请求参数，页面加载时调用一次，返回原因值/名称数组供用户多选筛选。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinancePaypalCaseReason)

    const data = await this.client.post('/erpFinance/erpFinance/paypalcase/paypalCaseReason', {})
    this.output(data)
  }
}
