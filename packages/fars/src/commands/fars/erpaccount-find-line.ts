// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountFindLine extends MBSCommand {
  static description = '物流方式统计查询(findLine)：物流仪表盘统计接口：按统计时间区间与排序方式，统计各物流方式(/货运渠道/国家/物流公司，随页面 viewMode 切换)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款及各平台(wish/ebay/amz/smt/joom/其他)单量。'

  static flags = {
    sortorder: Flags.string({ description: '排序方式。枚举：发货单量降序(默认)/发货单量升序/运费升序/运费降序/重量升序/重量降序/单价升序/单价降序。来源 #sortorder 下拉' }),
    types2: Flags.string({ description: '物流类型。枚举：平邮小包/挂号小包/挂号大货。当前页面 #types2 下拉已注释，实际传空，字段保留以备恢复' }),
    startTime: Flags.string({ description: '统计开始时间，格式 yyyy-MM-dd。来源 #startTime 日期控件(默认昨天)' }),
    endTime: Flags.string({ description: '统计结束时间，格式 yyyy-MM-dd。来源 #endTime 日期控件(默认昨天)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountFindLine)

    const data = await this.client.post('/erpaccount/erpaccount/logisticsController/findLine', { "sortorder": flags.sortorder, "types2": flags.types2, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
