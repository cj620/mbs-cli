// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetLeaveMessage extends MBSCommand {
  static description = '订单留言查询：订单详情页加载时，根据订单号查询该订单的「订单留言」列表，返回每条留言的内容、操作人、操作时间，前端用 art-template 渲染到「订单留言」区域。'

  static flags = {
    orderid: Flags.string({ description: '订单号(订单ID)。来源：当前页面 URL 查询参数 GetQueryString(\'orderid\')，拼接在接口 URL ?orderid= 之后。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetLeaveMessage)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getLeaveMessage', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
