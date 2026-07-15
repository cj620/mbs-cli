// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetCustomSkuOrderList extends MBSCommand {
  static description = '定制SKU订单列表查询：仪表盘「定制sku」面板分页查询定制订单列表：按确认状态(未确认/已确认/已下单/所有)、店长、店铺过滤，返回订单+SKU+定制内容(文字/图片1/2/3)+采购发货等行数据及总条数，供 Element Plus 表格渲染与批量确认。'

  static flags = {
    page: Flags.string({ description: '当前页码(搜索固定传1)', required: true }),
    pageSize: Flags.string({ description: '每页条数(固定100)', required: true }),
    isConfirm: Flags.string({ description: '确认状态。0=未确认;1=已确认;2=已下单;3=所有(选3时传null)' }),
    shopManager: Flags.string({ description: '店长(店长下拉的name,空串=全部)' }),
    shopName: Flags.string({ description: '店铺名称(店铺下拉的SHOPNAME,空串=全部)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetCustomSkuOrderList)

    const data = await this.client.post('/erpOrder/erpOrder/customOrder/getCustomSkuOrderList', { "page": flags.page, "pageSize": flags.pageSize, "isConfirm": flags.isConfirm, "shopManager": flags.shopManager, "shopName": flags.shopName })
    this.output(data)
  }
}
