// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetBuyer extends MBSCommand {
  static description = '高级搜索-采购员下拉列表查询：订单列表页打开时调用，加载「高级搜索」中「采购员」筛选下拉框(#buyer)的全部可选项；返回当前用户可见的采购员名称列表，前端用 buyerTemplate 渲染为 option。所选采购员名称随订单列表查询(orderList)以 buyer 参数回传后端。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetBuyer)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getBuyer', {})
    this.output(data)
  }
}
