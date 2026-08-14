// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindBuchaOrder extends MBSCommand {
  static description = '补差大订单列表查询：订单看板「补差大」标签页的分页列表查询：按店铺、店长筛选，分页返回亏损补差较大的订单列表（含订单号、SKU、金额、亏损额、国家、物流方式、下单/建单时间等），用于补差大订单的处理（解除禁止/作废/标记已完成）。'

  static flags = {
    currPage: Flags.string({ description: '当前页码。首次查询固定传1，翻页时由分页回调 api.getCurrent() 传入', required: true }),
    shopid: Flags.string({ description: '店铺ID（店铺筛选，取自下拉框 #shopName9，未选则为空串）' }),
    shopManager: Flags.string({ description: '店长（按店长筛选，取自下拉框 #saleLeader9，未选则为空串）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindBuchaOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findBuchaOrder', {}, { params: { "currPage": flags.currPage, "shopid": flags.shopid, "shopManager": flags.shopManager } })
    this.output(data)
  }
}
