// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopeeLogo extends MBSCommand {
  static description = '查询Shopee水印(Logo)样式列表：打开"设置自动刊登参数"弹窗时调用，查询当前可选的Shopee水印(Logo)样式列表，用于渲染"水印样式"下拉，供刊登时为图片加水印选择样式。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopeeLogo)

    const data = await this.client.get('/erpProduct/erpProduct/shopeeProductPublish/findShopeeLogo', { params: {} })
    this.output(data)
  }
}
