// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceFinanceResCurrencyList extends MBSCommand {
  static description = '币种(资源币种)列表查询：日记账凭证页面初始化时获取全部资源币种列表，用于渲染「币种」筛选下拉、创建凭证弹窗(addCurrency)与编辑凭证弹窗(editCurrency)的币种选择框。接口无请求参数，直接返回币种数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceFinanceResCurrencyList)

    const data = await this.client.post('/erpFinance/erpFinance/financeResCurrency/financeResCurrencyList', {})
    this.output(data)
  }
}
