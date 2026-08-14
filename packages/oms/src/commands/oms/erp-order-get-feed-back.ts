// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetFeedBack extends MBSCommand {
  static description = '订单评价(反馈)查询：订单详情页加载时根据订单号查询该订单的客户评价(反馈)列表，返回好评/中评/差评类型、评价内容、评价时间及星期，前端渲染于「订单评价」卡片。'

  static flags = {
    orderid: Flags.string({ description: '订单号(订单ID)。来源：页面 URL query 参数 GetQueryString("orderid")，以 query string 拼接在接口 URL 末尾', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetFeedBack)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getFeedBack', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
