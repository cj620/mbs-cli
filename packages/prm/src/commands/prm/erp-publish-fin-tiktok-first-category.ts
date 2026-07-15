// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishFinTiktokFirstCategory extends MBSCommand {
  static description = '查询TikTok一级分类：TikTok 自动刊登页加载时调用，获取 TikTok 全部一级分类名称列表，用于渲染页面「TikTok一级分类」筛选下拉框(#tiktokFirstCategory)。请求体为空对象，不需要任何入参；返回值 obj 为分类名称字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishFinTiktokFirstCategory)

    const data = await this.client.post('/erpPublish/erpPublish/tiktokProductController/finTiktokFirstCategory', {})
    this.output(data)
  }
}
