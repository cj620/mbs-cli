// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindLogisticsExpressType extends MBSCommand {
  static description = '物流类型(第二层)统计查询：物流跟进看板中，点击第一层「国家」行展开时按所选国家+物流类型+统计时间区间+排序方式查询该国家下各物流类型(expressType)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款数/退款率及各平台(wish/ebay/amz/smt/joom/其他)分布，并返回跟进次数、最后联系时间、跟进描述等跟单信息，用于渲染第二层(tbodyTwoTemplate)列表。'

  static flags = {
    country: Flags.string({ description: '国家。函数入参 country，来源：第一层默认展开取 data.obj[0].country，或点击第一层国家行的 data-country', required: true }),
    expressType: Flags.string({ description: '物流类型。来源控件 #expressType 下拉，选项由 findTrackExpressType 动态填充；默认空字符串(全部)' }),
    startTime: Flags.string({ description: '统计开始时间。来源控件 #startTime 日期框(type=date)，格式 yyyy-MM-dd，默认为当天前一天' }),
    endTime: Flags.string({ description: '统计结束时间。来源控件 #endTime 日期框(type=date)，格式 yyyy-MM-dd' }),
    orderby: Flags.string({ description: '排序方式。来源控件 #orderby 下拉。枚举：按发货单量倒序/按发货重量倒序/按运费总价倒序/按退款率倒序/按上网时效倒序/按妥投时效倒序' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindLogisticsExpressType)

    const data = await this.client.post('/erpOrder/erpOrder/trackController/findLogisticsExpressType', { "country": flags.country, "expressType": flags.expressType, "startTime": flags.startTime, "endTime": flags.endTime, "orderby": flags.orderby })
    this.output(data)
  }
}
