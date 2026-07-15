// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFirstList extends MBSCommand {
  static description = 'SeeBee平台开发报表-店铺首层列表查询：SeeBee平台开发报表首层数据查询：按开始/结束时间筛选，返回店长(店铺管理者)维度的店铺汇总报表行，含订单量、订单销售额、发货毛利额、新品/老品出单量与销售额、总产品数、爆B以上产品数及爆款率(均含搜索时间范围内与不受时间限制两套口径)。'

  static flags = {
    beginTime: Flags.string({ description: '开始时间(日期,格式 yyyy-MM-dd)。来源控件 #startTime(type=date)。前端会校验开始时间不能大于结束时间', required: true }),
    endTime: Flags.string({ description: '结束时间(日期,格式 yyyy-MM-dd)。来源控件 #endTime(type=date)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFirstList)

    const data = await this.client.post('/erpOrder/erpOrder/seebeeDevelopmentShop/firstList', { "beginTime": flags.beginTime, "endTime": flags.endTime })
    this.output(data)
  }
}
