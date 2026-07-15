// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsCrmWebServiceCheckCancelEligibility extends MBSCommand {
  static description = '校验订单取消资格(checkCancelEligibility)：订单详情页点击「取消订单」时调用：根据订单ID校验该订单是否满足取消条件，并返回可选的取消理由列表(cancelReasonList)，用于取消订单弹窗中的「取消理由」下拉。code!=200 时弹出 message 错误提示并中断。'

  static flags = {
    orderId: Flags.string({ description: '订单ID。取自页面URL查询参数 orderid(GetQueryString("orderid") → basedata.orderid)，用于定位待取消订单', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsCrmWebServiceCheckCancelEligibility)

    const data = await this.client.post('/gateway/crm-web-service/cancelOrder/1/checkCancelEligibility', { "orderId": flags.orderId })
    this.output(data)
  }
}
