// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceCaseId extends MBSCommand {
  static description = 'PayPal纠纷事件详情查询：根据纠纷事件编号(caseId)查询单条 PayPal 纠纷(case)事件详情：返回事件基本信息(店铺、客服/店长、账单、状态、到期日)、争议/交易/退款金额、物品信息列表、买卖双方对话消息列表以及当前可选的处理方式(taskList)，用于详情页(paypalcaseDetail.html)渲染。'

  static flags = {}

  static args = {
    caseId: Args.string({ required: true, description: 'PayPal 纠纷事件编号(事件ID)，拼接在接口 URL 末尾作为路径参数，来源于地址栏 query GetQueryString("caseId")' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(FarsErpFinanceCaseId)

    const data = await this.client.post(`/erpFinance/erpFinance/paypalcase/paypalCaseDetail/${args.caseId}`, {})
    this.output(data)
  }
}
