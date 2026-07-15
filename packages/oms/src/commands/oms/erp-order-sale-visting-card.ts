// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderSaleVistingCard extends MBSCommand {
  static description = '销售名片·东南亚/赛道战况播报查询：首页战况播报模块查询。基础路径 /erpOrder/erpOrder/saleVistingCard/，含两种 GET 形态：getTrackByTrackDny(东南亚战况，无入参) 与 {type}/getTrackByTrack(指定赛道战况，赛道经路径参数 type 传入)。返回 obj 列表(平台/团队/销售额/毛利率/增量/奖金等)及 content 更新文案，前端用 art-template 渲染战况播报表格。'

  static flags = {
    type: Flags.string({ description: '赛道类型，路径参数，仅 .../{type}/getTrackByTrack 形态使用。枚举 A/B/C/D/E/東(东南亚)。来源控件：首页 #circleBtn 赛道切换圆圈。getTrackByTrackDny 形态无此参数。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderSaleVistingCard)

    const data = await this.client.get('/erpOrder/erpOrder/saleVistingCard/', { params: {} })
    this.output(data)
  }
}
