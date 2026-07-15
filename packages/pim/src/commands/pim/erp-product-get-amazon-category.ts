// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAmazonCategory extends MBSCommand {
  static description = '获取亚马逊子目录(类目)列表：亚马逊自动刊登确认页加载时调用，获取亚马逊「子目录」(类目)下拉列表，用于渲染筛选区 #categoryId 下拉框的选项（option 的 value=子目录ID、文本=子目录名称）。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAmazonCategory)

    const data = await this.client.get('/erpProduct/erpProduct/amazonProductPublish/getAmazonCategory', { params: {} })
    this.output(data)
  }
}
