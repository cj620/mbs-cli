// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishFindPublishShopTiktokProductController extends MBSCommand {
  static description = '查询刊登店铺及刊登概况：TikTok自动刊登页初始化时调用，返回当前用户头像、当前刊登成功/等待刊登数量，以及该用户可见的刊登店铺列表(含店铺名称、店铺ID、各店铺刊登成功数)，用于渲染顶部概况、左侧店铺导航及店铺下拉框。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishFindPublishShopTiktokProductController)

    const data = await this.client.post('/erpPublish/erpPublish/tiktokProductController/findPublishShop', {})
    this.output(data)
  }
}
