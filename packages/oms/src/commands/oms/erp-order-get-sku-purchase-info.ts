// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetSkuPurchaseInfo extends MBSCommand {
  static description = '订单SKU采购信息查询：订单详情页订单状态条「采购中」图标鼠标移上(onmouseover)时触发，弹出「采购中」模态框，按订单ID查询该订单下各SKU的采购单信息(SKU、采购批次/组ID、备注、采购状态)，渲染到 skuInfosTemplate 列表。'

  static flags = {
    orderid: Flags.string({ description: '订单ID，URL Query 参数，标识要查询采购信息的订单', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetSkuPurchaseInfo)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getSkuPurchaseInfo', { "orderid": flags.orderid })
    this.output(data)
  }
}
