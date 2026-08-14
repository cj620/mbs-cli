// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListPublishShopShopeeProductPublish extends MBSCommand {
  static description = '未刊登店铺列表查询：查询当前用户可用于 Shopee 商品刊登的“未刊登店铺”列表，用于填充刊登页面 #shopName（未刊登店铺）下拉框及批量刊登店铺选择器。无请求参数，返回店铺名称集合。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListPublishShopShopeeProductPublish)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductPublish/listPublishShop', {})
    this.output(data)
  }
}
