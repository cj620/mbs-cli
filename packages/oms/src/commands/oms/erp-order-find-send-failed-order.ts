// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindSendFailedOrder extends MBSCommand {
  static description = '发货失败订单列表查询：销售融合订单中心-发货失败订单页签的分页列表查询：按店长、店铺、平台筛选，返回发货失败订单分页列表（订单编号、状态、店铺/客户、金额、国家、时间、运费、交易单号、备注等），并返回总条数与总页数供前端分页。'

  static flags = {
    shopManager: Flags.string({ description: '店长（来源下拉控件 #saleLeader10，未选传空串）' }),
    shopid: Flags.string({ description: '店铺ID（来源下拉控件 #shopName10，未选传空串）' }),
    platformId: Flags.string({ description: '平台ID（来源下拉控件 #platformes2，未选传空串）' }),
    currPage: Flags.string({ description: '当前页码（分页组件回调追加；首次查询不传，由后端默认第1页）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindSendFailedOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findSendFailedOrder', { "shopManager": flags.shopManager, "shopid": flags.shopid, "platformId": flags.platformId, "currPage": flags.currPage })
    this.output(data)
  }
}
