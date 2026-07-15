// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAmazonPublishVariationTheme extends MBSCommand {
  static description = '获取亚马逊刊登变体主题(Variation Theme)列表：在亚马逊自动刊登确认列表页点击某行"主题"单元格时触发，无入参 POST 请求，后端返回当前可选的亚马逊变体主题(Variation Theme)名称列表，前端用 themeTypeTemplate 渲染为 select 下拉；用户选中后由 themeTypeChange 将所选 variationTheme 回写到对应 SPU/SKU。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAmazonPublishVariationTheme)

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/getAmazonPublishVariationTheme', {})
    this.output(data)
  }
}
