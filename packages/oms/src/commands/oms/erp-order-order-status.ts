// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderOrderStatus extends MBSCommand {
  static description = '订单状态下拉项查询：查询订单状态枚举列表，用于订单列表页左上“订单状态”筛选下拉框（#orderStatus）的初始化渲染。无请求参数，返回订单状态字符串数组，前端逐项渲染为 <option>，选中值作为 search() 提交的 status 字段。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderOrderStatus)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/orderStatus', {})
    this.output(data)
  }
}
