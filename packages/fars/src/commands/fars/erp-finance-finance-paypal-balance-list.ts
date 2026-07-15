// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceFinancePaypalBalanceList extends MBSCommand {
  static description = 'PayPal账户(账户)列表查询：查询当前用户可用的 PayPal/收款账户列表，用于「日记账凭证」页面顶部账户筛选下拉框(#BalanceList)、创建凭证弹窗账户下拉(#addBalance)、编辑凭证弹窗账户下拉(#editBalance)的数据渲染。前端 financePaypalBalanceList() 在页面加载时调用，不传任何请求参数，返回账户数组(每项含账户ID与账户邮箱)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceFinancePaypalBalanceList)

    const data = await this.client.post('/erpFinance/erpFinance/financePaypalBalance/financePaypalBalanceList', {})
    this.output(data)
  }
}
