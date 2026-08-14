// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderOrderTypeList extends MBSCommand {
  static description = '订单类型列表查询：获取全部订单类型名称列表，用于订单列表页顶部筛选区 #ordertype 下拉框选项渲染。前端页面加载时(IIFE)调用一次，返回的字符串数组逐项渲染为 <option>，选中值随订单列表查询(orderList)以 ordertype 参数提交。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderOrderTypeList)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/orderTypeList', {})
    this.output(data)
  }
}
