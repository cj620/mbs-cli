// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetCategoryDevelopInfo extends MBSCommand {
  static description = '类目昨日开发/经营表现查询：销售看板右侧「类目昨日表现」卡片数据源：按类目返回昨日发货销售额、发货订单量、发货毛利率、订单缺货率、按时发货率及各项环比涨跌幅，前端遍历渲染为类目表现卡片列表。GET 无入参，由当前登录态(会话/Cookie)确定数据范围。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetCategoryDevelopInfo)

    const data = await this.client.get('/erpOrder/erpOrder/saleVistingCard/getCategoryDevelopInfo', { params: {} })
    this.output(data)
  }
}
