// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetHistorylist extends MBSCommand {
  static description = '历史订单列表查询：订单详情页据当前订单的客户ID(customerid)查询该客户的历史订单列表，返回每条历史订单的商品图、SKU、产品名、下单时间、订单编号、店铺、状态、国家邮编、订单金额、货运单号/方式、邮寄地址等，用于「历史订单」区块表格展示。'

  static flags = {
    orderid: Flags.string({ description: '当前订单ID(来自页面URL query 参数 orderid)', required: true }),
    customerid: Flags.string({ description: '客户ID(取自 orderDetails 接口返回对象 obj.customerid，按该客户查其全部历史订单)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetHistorylist)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getHistorylist', {}, { params: { "orderid": flags.orderid, "customerid": flags.customerid } })
    this.output(data)
  }
}
