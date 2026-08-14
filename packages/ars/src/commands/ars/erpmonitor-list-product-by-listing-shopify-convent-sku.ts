// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorListProductByListingShopifyConventSku extends MBSCommand {
  static description = '刊登商品列表查询（按刊登状态分页）：Shopify刊登管理页的商品刊登记录分页列表查询：按刊登状态（刊登中/刊登完毕/刊登成功/刊登失败）与页码分页拉取，返回 SPU 刊登记录列表（含主图、加密SPU、标题、分类、刊登店铺/人/状态/时间）及其下的 SKU 变体明细（加密SKU、原价、售卖价、库存等）。'

  static flags = {
    status: Flags.string({ description: '刊登状态。始终随请求发送：search() 默认 刊登中，search2() 默认 刊登完毕；若状态下拉 #status 选中则取其值，枚举=刊登中/刊登成功/刊登失败。来源控件：#status 下拉框', required: true }),
    currentPage: Flags.string({ description: '当前页码。首次查询固定 1，翻页时取分页控件 api.getCurrent() 的当前页。来源控件：.M-box/.M-box2 分页组件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorListProductByListingShopifyConventSku)

    const data = await this.client.post('/erpmonitor/erpmonitor/shopifyConventSku/listProductByListing', { "status": flags.status, "currentPage": flags.currentPage })
    this.output(data)
  }
}
