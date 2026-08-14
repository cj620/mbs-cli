// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderOrdersource extends MBSCommand {
  static description = '订单属性(订单来源)下拉数据查询：订单列表页初始化时调用，加载"订单属性/订单来源"下拉选择框的全部可选项。请求无入参，返回字符串数组 obj，前端通过 art-template ordersourceTemplate 渲染为 <select id="ordersource"> 的 <option>，所选值后续作为 ordersource 参数提交到订单列表查询接口 /erpOrder/erpOrder/orderNew/orderList。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderOrdersource)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/ordersource', {})
    this.output(data)
  }
}
