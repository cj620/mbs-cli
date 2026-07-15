// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorDetails extends MBSCommand {
  static description = '账户对账单监控-收支明细查询：账户对账单监控页面，根据交易时间区间、账户邮箱、收支类型、币种查询某账户的资金收支(进账/出账)流水明细，分页返回流水列表(币种、外币/人民币金额、来源去向、账户余额、平台、店铺、备注、交易日期)及总条数/总页数。'

  static flags = {
    startTime: Flags.string({ description: '交易开始时间(统计起始日期，格式 yyyy-MM-dd)，来源日期框 #startTime', required: true }),
    endTime: Flags.string({ description: '交易结束时间(统计结束日期，格式 yyyy-MM-dd)，来源日期框 #endTime', required: true }),
    email: Flags.string({ description: '账户邮箱(对账账户标识)，来源页面URL参数 email' }),
    currpage: Flags.string({ description: '当前页码(每页50条)，首次固定为1，翻页取 api.getCurrent()', required: true }),
    expend: Flags.string({ description: '收支类型(进/出账筛选标识)，来源页面URL参数 expend(枚举值待人工确认)' }),
    currency: Flags.string({ description: '币种(交易币种筛选)，来源页面URL参数 currency(翻页回调未带该参数)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorDetails)

    const data = await this.client.post('/erpmonitor/erpmonitor/accountStatementMonitor/details', {}, { params: { "startTime": flags.startTime, "endTime": flags.endTime, "email": flags.email, "currpage": flags.currpage, "expend": flags.expend, "currency": flags.currency } })
    this.output(data)
  }
}
