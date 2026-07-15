// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountFindForLogisticscompany extends MBSCommand {
  static description = '物流公司维度物流统计查询：物流统计看板「按物流公司查看」维度的统计查询：按统计时间区间与排序方式，返回各物流公司的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款情况及各平台(wish/ebay/amazon/aliexpress/joom/其他)发货单量。'

  static flags = {
    sortorder: Flags.string({ description: '排序方式。来源控件 #sortorder 下拉。枚举：发货单量降序(默认)/发货单量升序/运费升序/运费降序/重量升序/重量降序/单价升序/单价降序' }),
    types2: Flags.string({ description: '物流类型(平邮小包/挂号小包/挂号大货)。来源控件 #types2；该下拉在页面中已被注释，$(\'#types2\').val() 实际返回 undefined(待人工确认)' }),
    startTime: Flags.string({ description: '统计开始时间(格式 yyyy-MM-dd)。来源控件 #startTime 日期框，默认值为当天的前一天' }),
    endTime: Flags.string({ description: '统计结束时间(格式 yyyy-MM-dd)。来源控件 #endTime 日期框' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountFindForLogisticscompany)

    const data = await this.client.post('/erpaccount/erpaccount/logisticsController/findForLogisticscompany', { "sortorder": flags.sortorder, "types2": flags.types2, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
