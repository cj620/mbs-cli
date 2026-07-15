// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountFindAllLogistics extends MBSCommand {
  static description = '物流(货运渠道)统计明细查询：物流明细看板按统计时间区间查询各货运渠道(默认按货运渠道维度)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款/回归退款、各平台(wish/ebay/amz/smt/joom/其他)单量及覆盖国家等统计指标；支持类型筛选与多种排序方式。'

  static flags = {
    sortorder: Flags.string({ description: '排序方式。枚举：发货单量降序/发货单量升序/无物流轨迹占比升序/无物流轨迹占比降序/上网时效升序/上网时效降序/妥投时效升序/妥投时效降序/运费升序/运费降序/重量升序/重量降序/单价升序/单价降序' }),
    types2: Flags.string({ description: '类型。枚举：空("")=全部/平邮小包/挂号小包/挂号大货' }),
    startTime: Flags.string({ description: '统计开始时间，格式 yyyy-MM-dd(默认昨天)' }),
    endTime: Flags.string({ description: '统计结束时间，格式 yyyy-MM-dd(默认昨天)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountFindAllLogistics)

    const data = await this.client.post('/erpaccount/erpaccount/logisticsController/findAllLogistics', { "sortorder": flags.sortorder, "types2": flags.types2, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
