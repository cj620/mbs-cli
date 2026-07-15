// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopifyShop extends MBSCommand {
  static description = '查询Shopify店铺列表：查询当前用户可见的全部 Shopify 店铺名称列表，用于「shopify批量下架」页面顶部店铺多选下拉框(#shopName)的数据填充。页面加载时自动调用，无任何入参；返回店铺名称字符串数组，前端用 art-template 渲染成 <option>。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopifyShop)

    const data = await this.client.post('/erpProduct/erpProduct/shopifyProductController/findShopifyShop', {})
    this.output(data)
  }
}
