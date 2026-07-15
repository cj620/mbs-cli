// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpOrderGetTrackByTrackDny extends MBSCommand {
  static description = '东南亚战况播报(DeskRank)查询：客服工作台首页(customerservice.html)加载完成后自动调用，拉取东南亚X月战况播报排行榜数据：按销售平台列出店长、入围店铺毛利率、发货毛利率、总积分/奖金等，渲染到#DeskRank表格；同时用content更新更新时间。GET请求，无查询参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpOrderGetTrackByTrackDny)

    const data = await this.client.get('/dev/erpOrder/erpOrder/saleVistingCard/getTrackByTrackDny', { params: {} })
    this.output(data)
  }
}
