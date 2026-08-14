// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetHwcorderDeliveryInfo extends MBSCommand {
  static description = '订单SKU标签/装箱单标签信息查询：订单详情页根据订单ID与标签类型(sku标签/装箱单标签)，查询该订单已上传的标签信息列表，用于在装运信息区渲染标签内容及删除入口。业务参数以URL查询串传递，无JSON请求体。'

  static flags = {
    orderid: Flags.string({ description: '订单ID，标识要查询标签的订单(来源:页面URL查询参数 GetQueryString(\'orderid\'))', required: true }),
    labeltype: Flags.string({ description: '标签类型。枚举:sku标签=SKU标签;装箱单标签=装箱单标签', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetHwcorderDeliveryInfo)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getHwcorderDeliveryInfo', {}, { params: { "orderid": flags.orderid, "labeltype": flags.labeltype } })
    this.output(data)
  }
}
