// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishListPublishShopSmtProductPublish extends MBSCommand {
  static description = 'SMT可刊登店铺列表查询：SMT批量刊登页打开“多选店铺”模态框时调用，获取当前可刊登(SMT/Lazada)店铺列表，用于渲染店铺多选复选框。请求体为空(不传任何参数)，返回店铺名称列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishListPublishShopSmtProductPublish)

    const data = await this.client.post('/erpPublish/erpPublish/smtProductPublish/listPublishShop', {})
    this.output(data)
  }
}
