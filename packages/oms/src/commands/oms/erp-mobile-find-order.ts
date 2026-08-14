// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindOrder extends MBSCommand {
  static description = '订单列表查询（移动端正常/缺货订单）：移动端订单列表分页查询：按店长、店铺类型、订单类型标志(正常/缺货)与模糊关键字(订单ID/交易ID/卖家ID/SKU)分页拉取订单列表，返回订单行及正常/缺货数量汇总，并下发当前用户头像。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码(初始1，加载更多自增)', required: true }),
    shopmanager: Flags.string({ description: '店长(店铺管理员)，来源URL userName(decodeURI)，仅userName非空时传' }),
    shoptypeid: Flags.string({ description: '店铺类型ID，来源URL shoptypeid' }),
    flag: Flags.string({ description: '订单类型标志。0=正常订单;1=缺货订单', required: true }),
    skus: Flags.string({ description: 'SKU，来源URL sku，仅userName与sku均非空分支传入' }),
    search: Flags.string({ description: '模糊搜索关键字(订单ID/交易ID/卖家ID/SKU)，来源输入框#search' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindOrder)

    const data = await this.client.post('/erpMobile/erpMobile/pushController/findOrder', { "currentPage": flags.currentPage, "shopmanager": flags.shopmanager, "shoptypeid": flags.shoptypeid, "flag": flags.flag, "skus": flags.skus, "search": flags.search })
    this.output(data)
  }
}
