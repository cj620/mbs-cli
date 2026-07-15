// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
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
