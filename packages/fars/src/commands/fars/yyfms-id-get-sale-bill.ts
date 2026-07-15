// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsYyfmsIdGetSaleBill extends MBSCommand {
  static description = '销售账单(绩效结算账单)查询：按账单ID查询销售人员账期内的绩效结算账单详情：含账单周期、收入/支出汇总、收入明细列表、支出明细列表，以及绩效结算(目标销售额、完成率、各档提点、折扣、最终绩效、各项奖金/罚款/补贴等)数据，供绩效结算账单页面渲染。'

  static flags = {}

  static args = {
    id: Args.string({ required: true, description: '账单ID(路径参数)。来源：当前页面URL查询参数id，经GetQueryString(\'id\')取得后拼接到接口URL末尾。' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(FarsYyfmsIdGetSaleBill)

    const data = await this.client.get(`/yyfms/fms/settlement/getSaleBill/${args.id}`, { params: {} })
    this.output(data)
  }
}
