// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceFinanceAccountAccountList extends MBSCommand {
  static description = '科目(会计科目)列表查询：查询全部会计科目(account.account)列表，用于日记账凭证页面顶部筛选栏“科目”下拉框，以及创建/修改凭证弹窗中的“科目/银行科目”下拉框数据填充。页面加载时一次性拉取全部科目，前端用 art-template 渲染为 <option>。前端为不带请求体的空 POST。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceFinanceAccountAccountList)

    const data = await this.client.post('/erpFinance/erpFinance/financeAccountAccount/financeAccountAccountList', {})
    this.output(data)
  }
}
