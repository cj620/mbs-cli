// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDistributionOrder extends MBSCommand {
  static description = '分销订单(自建商品订单)列表查询：采购桌面「自建商品」标签页的分销订单分页列表查询：按店铺、店长筛选并分页拉取分销订单，返回订单总数、总页数及订单行（订单号、状态、分销平台、店铺、币种/金额、客户国家、下单/建单时间、运费、交易号等），由 art-template buildContentTemplate 渲染表格。'

  static flags = {
    currPage: Flags.string({ description: '当前页码（分页控件 api.getCurrent() 取得；首次查询不传，翻页时传）' }),
    shopid: Flags.string({ description: '店铺ID（店铺筛选，示例局部变量固定传空字符串）' }),
    shopManager: Flags.string({ description: '店铺管理员/店长（示例局部变量固定传空字符串）' }),
    pageSize: Flags.string({ description: '每页条数（取自下拉框 #purchaseItemPageSize，枚举：10/20/50/100，默认10；首次查询时传）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDistributionOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findDistributionOrder', {}, { params: { "currPage": flags.currPage, "shopid": flags.shopid, "shopManager": flags.shopManager, "pageSize": flags.pageSize } })
    this.output(data)
  }
}
