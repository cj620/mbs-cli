// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindLogisticsCountry extends MBSCommand {
  static description = '物流国家统计列表查询：物流跟进看板（任务跟进页）按国家维度统计查询：依据国家、物流类型、统计时间区间与排序方式，返回各国家的跟进次数、发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款数/退款率及各平台（wish/ebay/amz/smt/joom/其他）发货单量。'

  static flags = {
    country: Flags.string({ description: '国家。来源 #country 国家下拉（findTrackCountry 填充）；val() 为 null 时传空字符串（全部国家）' }),
    expressType: Flags.string({ description: '物流类型。来源 #expressType 类型下拉（findTrackExpressType 填充）' }),
    startTime: Flags.string({ description: '统计开始时间（日期，yyyy-MM-dd）。来源 #startTime 日期框，默认当天前一天' }),
    endTime: Flags.string({ description: '统计结束时间（日期，yyyy-MM-dd）。来源 #endTime 日期框' }),
    orderby: Flags.string({ description: '排序方式。来源 #orderby 下拉。枚举：按发货单量倒序/按发货重量倒序/按运费总价倒序/按退款率倒序/按上网时效倒序/按妥投时效倒序' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindLogisticsCountry)

    const data = await this.client.post('/erpOrder/erpOrder/trackController/findLogisticsCountry', { "country": flags.country, "expressType": flags.expressType, "startTime": flags.startTime, "endTime": flags.endTime, "orderby": flags.orderby })
    this.output(data)
  }
}
