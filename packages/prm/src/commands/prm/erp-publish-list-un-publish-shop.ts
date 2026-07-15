// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishListUnPublishShop extends MBSCommand {
  static description = '查询未刊登过的店铺列表(Joom)：进入 Joom 批量刊登页或切换到「等待刊登」标签时，在 search() 成功回调内调用，拉取当前用户「未刊登过」的 Joom 店铺列表，用于渲染 #shopName 店铺下拉框。该接口不携带任何请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishListUnPublishShop)

    const data = await this.client.post('/erpPublish/erpPublish/joomProductPublish/listUnPublishShop', {})
    this.output(data)
  }
}
