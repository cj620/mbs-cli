// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetOrderRefund extends MBSCommand {
  static description = '订单退款记录查询：订单详情页加载时，根据订单ID查询该订单的全部退款记录（退款申请单列表），渲染至「退款」卡片表格；返回为空则隐藏该模块。'

  static flags = {
    orderid: Flags.string({ description: '订单ID（URL 查询参数，取自页面全局变量 orderid，来源订单详情页上下文）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetOrderRefund)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getOrderRefund', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
