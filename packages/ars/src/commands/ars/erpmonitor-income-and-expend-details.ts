// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorIncomeAndExpendDetails extends MBSCommand {
  static description = '账户收支明细汇总查询：账户对账监控：按交易时间区间与账号(邮箱)查询各账号的收入/支出/余额汇总，返回账号、开户平台、币种、收入金额、支出金额、当前余额列表，供页面表格展示并提供「查看明细」跳转。'

  static flags = {
    startTime: Flags.string({ description: '交易时间-起始(统计起始日期，格式 yyyy-MM-dd)。来源控件 #startTime(type=date)，默认值为当前日期的前一天', required: true }),
    endTime: Flags.string({ description: '交易时间-结束(统计结束日期，格式 yyyy-MM-dd)。来源控件 #endTime(type=date)，默认值为当前日期的前一天', required: true }),
    email: Flags.string({ description: '账号(账户邮箱)。来源控件 #findAccount(账号下拉 select)；未选择时传空串，表示查询全部账号' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorIncomeAndExpendDetails)

    const data = await this.client.post('/erpmonitor/erpmonitor/accountStatementMonitor/incomeAndExpendDetails', {}, { params: { "startTime": flags.startTime, "endTime": flags.endTime, "email": flags.email } })
    this.output(data)
  }
}
