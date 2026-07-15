// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishGetPublishDetailInfo extends MBSCommand {
  static description = '刊登统计概览查询：ebay批量刊登页面初始化时调用，无入参，返回当前等待刊登、刊登中、昨日/今日刊登成功与失败数量等汇总统计，用于页面顶部状态条展示。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishGetPublishDetailInfo)

    const data = await this.client.post('/erpPublish/erpPublish/productPublish/getPublishDetailInfo', {})
    this.output(data)
  }
}
