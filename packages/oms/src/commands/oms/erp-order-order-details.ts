// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderOrderDetails extends MBSCommand {
  static description = '订单详情查询：马帮ERP订单详情页主数据加载接口：依据订单ID返回单个订单的全量信息(状态/标志位、买家资料、收货地址、Paypal地址、物流详情、支付账号、费用核算、毛利等)，结果赋给 orderdata 渲染整页。'

  static flags = {
    orderid: Flags.string({ description: '订单ID。来源：浏览器地址栏查询参数 GetQueryString("orderid") → basedata.orderid，以 query string 拼接到 URL；POST body 为空 {}', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderOrderDetails)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/orderDetails', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
