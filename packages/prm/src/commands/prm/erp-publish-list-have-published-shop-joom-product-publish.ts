// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishListHavePublishedShopJoomProductPublish extends MBSCommand {
  static description = '查询已刊登过的店铺(Joom)：Joom 批量刊登页切换到"刊登完毕"视图时调用，获取已刊登过的 Joom 店铺列表，用于渲染"选择新刊登店铺"下拉框。无任何请求参数，返回店铺名称列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishListHavePublishedShopJoomProductPublish)

    const data = await this.client.post('/erpPublish/erpPublish/joomProductPublish/listHavePublishedShop', {})
    this.output(data)
  }
}
