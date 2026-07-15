// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderVovafindDelayOrder extends MBSCommand {
  static description = 'Vova延迟订单查询：按订单时间区间与店铺分页查询 Vova 订单列表（含借用运单/借用物流等信息），用于页面表格渲染与分页。页面加载即自动调用一次。'

  static flags = {
    ordertimestart: Flags.string({ description: '订单开始时间。来源控件 #ordertimestart(type=date)，格式 yyyy-MM-dd' }),
    ordertimeend: Flags.string({ description: '订单结束时间。来源控件 #ordertimeend(type=date)，格式 yyyy-MM-dd；需≥开始时间' }),
    currPage: Flags.string({ description: '当前页码。首次固定1，翻页取分页组件 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数。固定值50', required: true }),
    shopName: Flags.string({ description: '店铺名称。来源控件 #shopName 下拉。枚举：空=全部；vova027=vova027' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderVovafindDelayOrder)

    const data = await this.client.post('/erpOrder/erpOrder/ERPOrder/vovafindDelayOrder', { "ordertimestart": flags.ordertimestart, "ordertimeend": flags.ordertimeend, "currPage": flags.currPage, "pageSize": flags.pageSize, "shopName": flags.shopName })
    this.output(data)
  }
}
