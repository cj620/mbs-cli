// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderHasOrderEditAuthority extends MBSCommand {
  static description = '订单是否可编辑权限校验(hasOrderEditAuthority)：订单详情页加载完成后调用，校验当前登录用户对该订单是否拥有编辑/操作权限。返回 obj==1 表示有权限(展示编辑相关按钮)，否则隐藏 #draw、.draw 等操作区并将 orderdata 置空。'

  static flags = {
    orderid: Flags.string({ description: '订单ID，取自 GetQueryString("orderid")(basedata.orderid)，以 URL Query 拼接传递；POST body 为空对象 {}', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderHasOrderEditAuthority)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/hasOrderEditAuthority', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
