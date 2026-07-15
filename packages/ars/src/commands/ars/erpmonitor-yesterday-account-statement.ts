// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorYesterdayAccountStatement extends MBSCommand {
  static description = '昨日账户收支监控查询：首页仪表盘财务看板加载时自动调用，查询昨日账户收支汇总，返回昨日支出金额(expend)与昨日收入金额(income)，分别渲染到看板支出/收入两个数字卡片。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorYesterdayAccountStatement)

    const data = await this.client.get('/erpmonitor/erpmonitor/accountStatementMonitor/yesterdayAccountStatement', { params: {} })
    this.output(data)
  }
}
