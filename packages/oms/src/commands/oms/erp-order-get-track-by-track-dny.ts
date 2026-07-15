// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetTrackByTrackDny extends MBSCommand {
  static description = '东南亚战况播报(各赛道排名查询)：首页仪表盘(common.html)加载时调用，拉取「东南亚X月战况播报」榜单：按销售平台返回店长/员工的奖金、入围店铺毛利率明细、毛利率、总积分等，渲染到 #DeskRank 表格；同时返回播报更新时间(content)写入 #updateTime。无任何请求入参。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetTrackByTrackDny)

    const data = await this.client.get('/erpOrder/erpOrder/saleVistingCard/getTrackByTrackDny', { params: {} })
    this.output(data)
  }
}
