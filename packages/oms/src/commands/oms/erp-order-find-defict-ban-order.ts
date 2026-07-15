// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDefictBanOrder extends MBSCommand {
  static description = '亏损禁止发货订单列表查询：销售融合订单-亏损禁止发货订单分页列表查询：按店长、店铺筛选，分页返回因亏损被禁止发货的订单列表，并返回总数与总页数用于分页。参数以URL Query String传递，无请求体。'

  static flags = {
    currPage: Flags.string({ description: '当前页码（分页控件 api.getCurrent()；首次查询不传，翻页时传入，未传默认第1页）' }),
    shopid: Flags.string({ description: '店铺ID（来源店铺下拉 #shopName1；空=全部店铺）' }),
    shopManager: Flags.string({ description: '店长（来源店长下拉 #saleLeader1；空=全部店长）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDefictBanOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findDefictBanOrder', {}, { params: { "currPage": flags.currPage, "shopid": flags.shopid, "shopManager": flags.shopManager } })
    this.output(data)
  }
}
