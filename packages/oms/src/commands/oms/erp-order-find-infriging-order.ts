// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindInfrigingOrder extends MBSCommand {
  static description = '侵权商品订单查询：查询命中侵权(已标注侵权但线上仍出单)的订单列表，按店铺、店长筛选并分页返回侵权订单及其侵权SKU、订单金额、状态、店铺等信息，供仪表盘“侵权或禁售”页签展示与后续作废/换图下架/标记处理。'

  static flags = {
    shopid: Flags.string({ description: '店铺ID。来源控件：店铺下拉框 #shopName3，未选则为空' }),
    shopManager: Flags.string({ description: '店长(店铺负责人)。来源控件：店长下拉框 #saleLeader3，未选则为空' }),
    currPage: Flags.string({ description: '当前页码。仅翻页时由分页组件回调 api.getCurrent() 追加；首次查询不传(后端默认第1页)。每页固定10条' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindInfrigingOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findInfrigingOrder', {}, { params: { "shopid": flags.shopid, "shopManager": flags.shopManager, "currPage": flags.currPage } })
    this.output(data)
  }
}
