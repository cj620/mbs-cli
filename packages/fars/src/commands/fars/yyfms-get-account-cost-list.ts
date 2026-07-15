// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsYyfmsGetAccountCostList extends MBSCommand {
  static description = '账户费用(对账)列表查询：Payoneer 账户费用对账列表分页查询：按币种、起止日期、邮箱、描述等条件查询账户收支流水（账户类型、金额、收入/支出、人民币折算、余额、来源/目标、日期等），返回流水列表及总记录数，供页面表格展示与分页。'

  static flags = {
    currency: Flags.string({ description: '币种(来源控件：el-input postdata.currency,占位"请输入币种")' }),
    startDate: Flags.string({ description: '开始日期(来源控件：el-date-picker,格式 YYYY-MM-DD;默认今天前30天)' }),
    endDate: Flags.string({ description: '结束日期(来源控件：el-date-picker,格式 YYYY-MM-DD;默认今天)' }),
    email: Flags.string({ description: '邮箱(来源控件：el-input postdata.email,占位"请输入邮箱")' }),
    description: Flags.string({ description: '描述(来源控件：el-input postdata.description,占位"请输入描述")' }),
    page: Flags.string({ description: '当前页码(getdata(index),搜索时为1,分页时为当前页)', required: true }),
    size: Flags.string({ description: '每页条数(前端固定为200)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsYyfmsGetAccountCostList)

    const data = await this.client.post('/yyfms/fms/accountcostexport/getAccountCostList', { "currency": flags.currency, "startDate": flags.startDate, "endDate": flags.endDate, "email": flags.email, "description": flags.description, "page": flags.page, "size": flags.size })
    this.output(data)
  }
}
