// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
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
