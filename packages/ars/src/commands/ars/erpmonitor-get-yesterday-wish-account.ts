// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetYesterdayWishAccount extends MBSCommand {
  static description = '昨日wish放款额度查询：财务看板初始化时调用，查询 payoneer 接口提供的 wish 店铺昨日可放款总额，前端直接渲染到看板「昨日wish放款额度」卡片(#WishAccount)。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetYesterdayWishAccount)

    const data = await this.client.get('/erpmonitor/erpmonitor/accountStatementMonitor/getYesterdayWishAccount', { params: {} })
    this.output(data)
  }
}
