// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceFinanceAccountMoveLineList extends MBSCommand {
  static description = '日记账凭证(分录)列表查询：日记账凭证页(journalVoucher)列表分页查询：按科目、账户、币种、凭证来源、费用日期区间、摘要等条件筛选，返回会计分录(account_move_line)列表及借贷方、状态、创建人等字段。'

  static flags = {
    accountAccountId: Flags.string({ description: '科目ID(会计科目 account_account ID)，来源科目下拉#AccountList，未选时传null' }),
    accountJournalId: Flags.string({ description: '账户ID(PayPal/日记账账户 id)，来源账户下拉#BalanceList，未选时传null' }),
    resCurrencyId: Flags.string({ description: '币种ID(res_currency ID)，来源币种下拉#CurrencyList，未选时传null' }),
    expenseName: Flags.string({ description: '凭证来源/费用来源名称，来源凭证来源下拉#expenseName(由getExpenseList接口填充)，未选时传null' }),
    feeDateStart: Flags.string({ description: '费用开始日期(yyyy-MM-dd)，来源日期框#startTime，默认当前日期前30天' }),
    feeDateEnd: Flags.string({ description: '费用结束日期(yyyy-MM-dd)，来源日期框#endTime，默认当天' }),
    ref: Flags.string({ description: '摘要搜索关键词，来源文本框#ref，为空时传null；仅search()首次查询提交，翻页回调不提交' }),
    page: Flags.string({ description: '当前页码，search()固定传1，MoveLineList()翻页时传当前页', required: true }),
    pageSize: Flags.string({ description: '每页条数，固定为100', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceFinanceAccountMoveLineList)

    const data = await this.client.post('/erpFinance/erpFinance/financeAccountMoveLine/financeAccountMoveLineList', { "accountAccountId": flags.accountAccountId, "accountJournalId": flags.accountJournalId, "resCurrencyId": flags.resCurrencyId, "expenseName": flags.expenseName, "feeDateStart": flags.feeDateStart, "feeDateEnd": flags.feeDateEnd, "ref": flags.ref, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
