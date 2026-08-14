// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishFindPublishShopShopeeProductController extends MBSCommand {
  static description = '查询Shopee自动刊登店铺及刊登统计：Shopee自动刊登页面加载时调用，查询当前用户的头像、当前刊登成功数、当前等待刊登数，以及该用户名下的Shopee店铺列表（含每个店铺的店铺名、店铺ID、已刊登成功数量）。返回结果用于渲染顶部统计、左侧店铺树与店铺下拉框。该接口无请求参数，依赖登录态识别当前用户。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishFindPublishShopShopeeProductController)

    const data = await this.client.post('/erpPublish/erpPublish/shopeeProductController/findPublishShop', {})
    this.output(data)
  }
}
