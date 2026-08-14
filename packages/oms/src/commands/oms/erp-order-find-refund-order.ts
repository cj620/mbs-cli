// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindRefundOrder extends MBSCommand {
  static description = '退包(退款)订单列表查询：仪表盘「退包订单」页签的列表查询：按店铺(shopid)、店长(shopManager)、页码(currPage)过滤，返回退款/退包订单分页列表，并返回 total/pages 供分页。参数以 URL Query 传递，无请求体。'

  static flags = {
    shopid: Flags.string({ description: '店铺ID。来源店铺下拉#shopName5；URL固定带?shopid=,未选为空串' }),
    shopManager: Flags.string({ description: '店长。来源店长下拉#saleLeader5' }),
    currPage: Flags.string({ description: '当前页码。来源分页控件.returnM-box;首次查询不传,翻页时传,每页10条' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindRefundOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findRefundOrder', {}, { params: { "shopid": flags.shopid, "shopManager": flags.shopManager, "currPage": flags.currPage } })
    this.output(data)
  }
}
