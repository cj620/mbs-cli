// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindOtherBanOrder extends MBSCommand {
  static description = '其他禁止订单分页查询：订单监控看板「其他禁止」标签页的列表查询：按店铺、店长筛选并分页拉取“其他原因被禁止发货”的订单，返回订单总数、总页数及订单行，前端用 art-template otherContentTemplate 渲染表格。'

  static flags = {
    currPage: Flags.string({ description: '当前页码。来源：分页组件回调 api.getCurrent()；首屏 otherSearch() 不传，翻页时由 otherPaging() 拼接' }),
    shopid: Flags.string({ description: '店铺ID(可多选/为空表示全部)。来源控件：#shopName2 下拉' }),
    shopManager: Flags.string({ description: '店长/店铺管理员。来源控件：#saleLeader2 下拉' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindOtherBanOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findOtherBanOrder', {}, { params: { "currPage": flags.currPage, "shopid": flags.shopid, "shopManager": flags.shopManager } })
    this.output(data)
  }
}
