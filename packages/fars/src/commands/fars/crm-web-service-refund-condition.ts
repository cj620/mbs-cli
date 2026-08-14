// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsCrmWebServiceRefundCondition extends MBSCommand {
  static description = '订单退款条件查询（发起退款明细）：订单详情页点击“发起退款(send refund)”时调用，按订单ID查询该订单的可退款条件：退款币种、退款总额、可退款SKU明细及原始金额、可选退款理由列表，以及ERP/平台两侧的历史退款记录，用于回填发起退款弹窗。'

  static flags = {
    orderId: Flags.string({ description: '订单ID（订单号）。来源 basedata.orderid，即页面URL参数 GetQueryString("orderid")，无对应输入控件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsCrmWebServiceRefundCondition)

    const data = await this.client.post('/crm-web-service/cancelOrder/1/refundCondition', { "orderId": flags.orderId })
    this.output(data)
  }
}
