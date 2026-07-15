// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
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
