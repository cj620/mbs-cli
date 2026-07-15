// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceType extends MBSCommand {
  static description = 'PayPal纠纷案件处理意见列表查询：在 PayPal 纠纷案件详情页加载处理意见(建议)列表：以路径方式传入案件编号 caseId 与查询类型 2，返回该案件下全部处理意见记录(含处理意见内容、提交人/时间、状态、完成人、驳回原因等)，前端用 suggestTemplate 渲染到 #suggestContent 表格。'

  static flags = {}

  static args = {
    caseId: Args.string({ required: true, description: 'PayPal纠纷事件编号(案件ID)，来源浏览器地址栏 query caseId，拼接为第一个路径段' }),
    type: Args.string({ required: true, description: '查询类型/视角标识，前端固定传 2(硬编码)；其余取值含义待人工确认' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(FarsErpFinanceType)

    const data = await this.client.post(`/erpFinance/erpFinance/paypalcase/getpaypalCaseSuggest/${args.caseId}/${args.type}`, {})
    this.output(data)
  }
}
