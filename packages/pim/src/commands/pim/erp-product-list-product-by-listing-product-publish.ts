// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListProductByListingProductPublish extends MBSCommand {
  static description = 'eBay刊登Listing列表查询：eBay批量刊登页按刊登状态(等待刊登/刊登完毕)分页查询待刊登/已刊登的 Listing 列表，可按属性类型(单/多属性)、店铺过滤，返回 SPU 行及其下 SKU(ebayPublishSkuVo)明细、价格/毛利率/发货地/刊登店铺/刊登状态/刊登结果等字段。'

  static flags = {
    status: Flags.string({ description: '刊登状态(列表Tab)。等待刊登/刊登完毕。来源当前Tab并写入sessionStorage', required: true }),
    currentPage: Flags.string({ description: '当前页码。首次为1；翻页取自分页组件api.getCurrent()', required: true }),
    vtype: Flags.string({ description: '属性类型(#property)。0=全部;1=单属性;2=多属性' }),
    shopName: Flags.string({ description: '店铺名称。取#shopName选中值split(\',\')[1]，未选传空' }),
    shopId: Flags.string({ description: '店铺ID。取#shopName选中值split(\',\')[0]，未选传空' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListProductByListingProductPublish)

    const data = await this.client.post('/erpProduct/erpProduct/productPublish/listProductByListing', { "status": flags.status, "currentPage": flags.currentPage, "vtype": flags.vtype, "shopName": flags.shopName, "shopId": flags.shopId })
    this.output(data)
  }
}
