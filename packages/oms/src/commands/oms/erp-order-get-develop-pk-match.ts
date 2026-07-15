// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDevelopPkMatch extends MBSCommand {
  static description = '开发员PK榜单查询：开发员PK大屏数据查询：按指定日期与平台，返回各开发员的爆款SKU数量、百元动销率、新品销售额及对应排名，用于 developer.html 全屏轮播榜单展示。'

  static flags = {
    time: Flags.string({ description: '数据日期，格式 YYYYMMDD。前端取昨天日期作为 yesterday 传入', required: true }),
    platform: Flags.string({ description: '平台标识。页面固定传 aliexpress(速卖通)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDevelopPkMatch)

    const data = await this.client.post('/erpOrder/erpOrder/pKmatchController/getDevelopPkMatch', {}, { params: { "time": flags.time, "platform": flags.platform } })
    this.output(data)
  }
}
