// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindLogisticsExpressName extends MBSCommand {
  static description = '物流货运渠道(三级)统计查询：物流跟进看板(taskFollow)第三层下钻接口：在「国家→货运类型」展开后，按所选国家、货运类型及统计时间区间、排序方式，返回该货运类型下各具体货运渠道(物流商)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款订单数/退款率以及 wish/ebay/amazon/aliexpress/joom/其他 各平台单量；同时回传上层员工头像、跟进描述与跟进总次数用于头部展示。'

  static flags = {
    country: Flags.string({ description: '国家(来源：上层行 data-country，原值来自国家下拉 #country)。空字符串表示不限国家' }),
    expressType: Flags.string({ description: '货运类型/物流类型(来源：上层二级行 data-expresstype，原值来自类型下拉 #expressType)' }),
    empAvatar: Flags.string({ description: '员工头像URL(来源：上层行 data-empavatar，回传供头部展示)' }),
    descr: Flags.string({ description: '跟进描述/员工描述(来源：上层行 data-descr，回传供头部展示)' }),
    followUpNum: Flags.string({ description: '跟进总次数(来源：上层行 data-followupnum，回传供头部展示)' }),
    startTime: Flags.string({ description: '统计开始时间(来源：日期控件 #startTime，格式 yyyy-MM-dd)' }),
    endTime: Flags.string({ description: '统计结束时间(来源：日期控件 #endTime，格式 yyyy-MM-dd)' }),
    orderby: Flags.string({ description: '排序方式(来源：排序下拉 #orderby)。枚举：按发货单量倒序/按发货重量倒序/按运费总价倒序/按退款率倒序/按上网时效倒序/按妥投时效倒序' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindLogisticsExpressName)

    const data = await this.client.post('/erpOrder/erpOrder/trackController/findLogisticsExpressName', { "country": flags.country, "expressType": flags.expressType, "empAvatar": flags.empAvatar, "descr": flags.descr, "followUpNum": flags.followUpNum, "startTime": flags.startTime, "endTime": flags.endTime, "orderby": flags.orderby })
    this.output(data)
  }
}
