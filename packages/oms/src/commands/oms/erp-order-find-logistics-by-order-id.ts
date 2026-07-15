// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindLogisticsByOrderId extends MBSCommand {
  static description = '订单物流轨迹查询(按订单ID)：在"投递失败订单"列表行操作菜单点击"查看轨迹"时调用，按订单编号 orderId 查询该订单的物流轨迹明细，返回一组(时间+状态描述)记录，前端拼接为多行文本后 alert 展示，无数据时提示"无"。'

  static flags = {
    orderId: Flags.string({ description: '订单编号(订单ID)，来源为投递失败订单列表行数据 v.orderId', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindLogisticsByOrderId)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findLogisticsByOrderId', { "orderId": flags.orderId })
    this.output(data)
  }
}
