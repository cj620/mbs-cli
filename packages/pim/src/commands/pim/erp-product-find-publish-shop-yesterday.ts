// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPublishShopYesterday extends MBSCommand {
  static description = 'SMT自动刊登-昨日刊登统计查询：查询昨日SMT自动刊登的汇总统计：返回昨日参与生成listing的店铺数、生成的listing总数、刊登成功数与失败数，用于页面顶部概况栏展示。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPublishShopYesterday)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/findPublishShopYesterday', {})
    this.output(data)
  }
}
