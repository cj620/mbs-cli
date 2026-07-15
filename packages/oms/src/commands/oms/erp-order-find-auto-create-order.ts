// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindAutoCreateOrder extends MBSCommand {
  static description = '自动创建(自建)订单列表查询：订单看板「自动创建/自建订单」Tab的分页列表查询：按店长、店铺过滤，分页返回自建订单列表（订单编号、状态、店铺/客户、原币与RMB金额、国家、下单与拉单时间、运费、交易单号、是否低利润、备注等）。参数以URL查询串传递，无请求体。'

  static flags = {
    currPage: Flags.string({ description: '当前页码（来源：分页控件 .buildM-box 回调 api.getCurrent()；首屏不传，翻页携带）' }),
    shopid: Flags.string({ description: '店铺ID（来源：店铺下拉框 #shopName4；空串=不限店铺）' }),
    shopManager: Flags.string({ description: '店长（来源：店长下拉框 #saleLeader4；空串=不限店长）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindAutoCreateOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findAutoCreateOrder', {}, { params: { "currPage": flags.currPage, "shopid": flags.shopid, "shopManager": flags.shopManager } })
    this.output(data)
  }
}
