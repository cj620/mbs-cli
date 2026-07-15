// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseGetOrderInfos extends MBSCommand {
  static description = '采购批次订单信息查询：按采购批次分组ID(groupId)查询该批次完整订单信息：批次头部(供应商/仓库/付款方式/马帮与平台金额/运单号/跟单日志/财务审核)及其下 purchaseList 采购明细行(SKU/采购状态/缺货/采购量到货量/1688采购信息/退款)。前端采购跟单任务页刷新单条批次时调用。'

  static flags = {
    groupId: Flags.string({ description: '采购批次分组ID(URL 查询串)。取当前批次 groupid，由 refreshgroup*(id, grop) 传入(id.groupid 或 grop)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseGetOrderInfos)

    const data = await this.client.post('/erpPurchase/erpPurchase/purchaseDevelop/getOrderInfos', {}, { params: { "groupId": flags.groupId } })
    this.output(data)
  }
}
