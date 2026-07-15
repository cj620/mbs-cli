// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindRefusedIssue extends MBSCommand {
  static description = '拒绝并新增（仅退款）纠纷方案：在“纠纷详情”页中，卖家点击“拒绝并新增仅退款方案”弹窗确定时调用：携带被拒绝的买家方案ID列表、卖家新增方案类型、退款金额、方案说明，提交后端处理；成功后弹出后端提示信息并刷新纠纷详情。'

  static flags = {
    buyerSolutionIdList: Flags.string({ description: '被拒绝的买家方案ID列表（数组，元素为买家方案 schemeid；来源模板 obj.result[0].schemeid 经 data-ids 收集入 refArr） (comma-separated)', required: true }),
    addSolutionType: Flags.string({ description: '卖家新增方案类型。枚举：refund=仅退款/拒绝退款；return_and_refund=退货退款（退货退款单选项禁用，常态取 refund）', required: true }),
    refundAmount: Flags.string({ description: '退款金额，单位 USD（拒绝退款填 0；控件 #refundAmount 当前禁用，默认提交 "0"）' }),
    solutionContext: Flags.string({ description: '卖家方案说明/问题详细描述（来源文本域 #solutionContext，页面标注必填）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindRefusedIssue)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpManufacture/erpManufacture/issueInfo/findRefusedIssue', { "buyerSolutionIdList": toArray(flags.buyerSolutionIdList, 'string'), "addSolutionType": flags.addSolutionType, "refundAmount": flags.refundAmount, "solutionContext": flags.solutionContext })
    this.output(data)
  }
}
