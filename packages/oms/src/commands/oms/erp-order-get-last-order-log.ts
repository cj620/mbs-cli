// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetLastOrderLog extends MBSCommand {
  static description = '获取订单最新操作日志：进入订单详情页时调用，根据订单ID查询并返回该订单的最近一条操作日志（已是后端拼接好的文本/HTML片段），前端直接渲染到详情页头部 #lastOrderLog 区域展示。'

  static flags = {
    orderid: Flags.string({ description: '订单ID/订单编号，来源页面URL查询参数(GetQueryString(\'orderid\'))，拼接到接口URL查询串', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetLastOrderLog)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getLastOrderLog', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
