// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceFinanceAnalyticAccount extends MBSCommand {
  static description = '分析账户列表查询：日记账凭证(创建/编辑凭证)页面点击「分析账户」时，按名称关键词分页查询分析账户列表，供用户选择并回填到凭证的「分析账户」输入框。'

  static flags = {
    name: Flags.string({ description: '分析账户名称搜索关键词，来源控件 #accountName，无输入时传空字符串""' }),
    page: Flags.string({ description: '当前页码，首查/搜索固定1，翻页取api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数，固定100', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceFinanceAnalyticAccount)

    const data = await this.client.post('/erpFinance/erpFinance/financeResPartner/financeAnalyticAccount', { "name": flags.name, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
