// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsYyfmsIdGetDeveloperBillDetail extends MBSCommand {
  static description = '开发员账单详情查询：按账单ID查询某开发员账期账单详情，返回结算汇总(settlement)、账单总额(bill)、账期起止、收入明细列表(incomeList)、支出明细列表(disburseList)；前端按岗位渲染不同的过程管理与最终绩效模块。'

  static flags = {}

  static args = {
    id: Args.string({ required: true, description: '账单ID，路径变量，拼接于接口URL末尾。来源：页面URL查询参数 id（GetQueryString(\'id\')）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(FarsYyfmsIdGetDeveloperBillDetail)

    const data = await this.client.get(`/yyfms/fms/settlement/getDeveloperBillDetail/${args.id}`, { params: {} })
    this.output(data)
  }
}
