// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
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
