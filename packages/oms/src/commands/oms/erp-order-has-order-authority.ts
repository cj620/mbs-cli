// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderHasOrderAuthority extends MBSCommand {
  static description = '校验当前用户对指定订单的查看权限：订单详情页加载时调用：除部门=66且用户名=罗梦娅外，所有用户进入详情页都会以 orderid 调用本接口校验是否有该订单的查看权限；返回 obj==0 表示无权限，前端清空订单数据并提示“无法查询订单”，否则继续加载订单详情。'

  static flags = {
    orderid: Flags.string({ description: '订单ID(URL查询参数)。来源 basedata.orderid，由详情页 GetQueryString("orderid") 从浏览器地址栏取得', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderHasOrderAuthority)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/hasOrderAuthority', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
