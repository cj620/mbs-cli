// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPublishShopAmazonProductPublish extends MBSCommand {
  static description = '亚马逊待刊登-侧边店铺列表渲染（findPublishShop）：进入亚马逊自动刊登页左侧渲染当前用户的可刊登店铺树：返回用户头像、刊登成功总数、UPC使用/可用数量，以及店铺列表（每店含店铺ID/名称/刊登成功数/是否开启推荐刊登/是否UPC豁免）。无请求参数，后端按当前登录用户上下文返回。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPublishShopAmazonProductPublish)

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/findPublishShop', {})
    this.output(data)
  }
}
