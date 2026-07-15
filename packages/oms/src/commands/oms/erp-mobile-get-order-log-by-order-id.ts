// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetOrderLogByOrderId extends MBSCommand {
  static description = '订单操作日志查询：根据订单ID查询该订单的全部操作日志记录，返回操作人、操作时间、操作描述的列表；前端在订单详情页“操作日志”模块中，将列表前10条渲染到 OperTemplate1，第10条之后渲染到 OperTemplate2(点击查看更多展开)。'

  static flags = {
    orderId: Flags.string({ description: '订单ID。取自前端页面URL查询参数 orderid(GetQueryString(\'orderid\'))；无枚举、无单位；为该接口唯一查询条件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetOrderLogByOrderId)

    const data = await this.client.get('/erpMobile/erpMobile/pushController/getOrderLogByOrderId', { params: {} })
    this.output(data)
  }
}
