// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindNoInventoryOrderNew extends MBSCommand {
  static description = '清仓停产(无货)订单列表查询：仪表盘订单中心“清停暂收/清仓停产”页签：按店铺、店长筛选，分页查询马帮内清仓停产不再采购但线上仍出单的“无货”订单，返回订单列表(订单编号、状态、延迟天数、店铺、客户、金额、时间、运费、交易单号、备注等)及总条数/总页数。'

  static flags = {
    currPage: Flags.string({ description: '当前页码。来源分页控件 .notprodM-box 的 api.getCurrent()；首次调用不传，后端默认第1页' }),
    shopid: Flags.string({ description: '店铺ID。来源下拉控件 #shopName6，不选时传空串' }),
    shopManager: Flags.string({ description: '店长/店铺管理员。来源下拉控件 #saleLeader6，不选时传空串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindNoInventoryOrderNew)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findNoInventoryOrderNEW', {}, { params: { "currPage": flags.currPage, "shopid": flags.shopid, "shopManager": flags.shopManager } })
    this.output(data)
  }
}
