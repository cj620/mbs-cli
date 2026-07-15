// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindNoInventoryOrderForkf extends MBSCommand {
  static description = '清仓停产暂售缺货订单列表查询：成品仪表盘(finishedGoods)「清停暂售缺货」页签的分页列表查询：按当前页码 currPageStr 分页拉取因清仓/停产/暂售导致缺货的待处理订单，返回总条数、总页数及订单行列表，用于 notprodContentTemplate 渲染表格。'

  static flags = {
    currPageStr: Flags.string({ description: '当前页码(查询串)。首次固定传1，翻页取分页控件 api.getCurrent()。每页固定10条', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindNoInventoryOrderForkf)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findNoInventoryOrderForkf', {}, { params: { "currPageStr": flags.currPageStr } })
    this.output(data)
  }
}
