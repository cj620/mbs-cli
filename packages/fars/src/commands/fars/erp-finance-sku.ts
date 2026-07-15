// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceSku extends MBSCommand {
  static description = '出库单SKU明细查询：在「商品退回(供应商回款)」列表中点击某条出库单行展开时，按出库单号(orderId)懒加载该单下的 SKU 明细行，返回每个 SKU 的名称、数量、成本价/成本合计、零售价/零售合计及异常处理信息，用于在树形子行中展示。'

  static flags = {
    orderId: Flags.string({ description: '出库单号(订单号)。来源：被展开行 row.orderId（列表行的出库单号）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceSku)

    const data = await this.client.get('/erpFinance/erpFinance/manufacture/payment/get/order/sku', { params: { "orderId": flags.orderId } })
    this.output(data)
  }
}
