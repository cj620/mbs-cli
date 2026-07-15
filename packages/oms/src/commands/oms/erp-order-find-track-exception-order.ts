// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindTrackExceptionOrder extends MBSCommand {
  static description = '投递失败(物流轨迹异常)订单列表查询：客户评价(差评)管理页「投递失败订单」标签页的分页列表查询：按店铺、店长、异常类型(固定4)、查询类型(固定"客服")等条件，查询物流投递失败/轨迹异常的订单，返回订单列表及分页信息。'

  static flags = {
    shopid: Flags.string({ description: '店铺ID（来源控件 #shopName7，本页 DOM 中无该控件，取值为 undefined，待人工确认）' }),
    shopManager: Flags.string({ description: '店长/销售负责人（来源控件 #saleLeader7，本页 DOM 中无该控件，取值为 undefined，待人工确认）' }),
    expressTypeId: Flags.string({ description: '物流渠道(物流方式)ID（当前固定传空字符串）' }),
    exceptionType: Flags.string({ description: '异常类型（固定 \'4\'，代表物流投递失败/轨迹异常；其他枚举待人工确认）' }),
    expressTimeStart: Flags.string({ description: '发货时间-起始（当前固定传空字符串）' }),
    expressTimeEnd: Flags.string({ description: '发货时间-结束（当前固定传空字符串）' }),
    queryType: Flags.string({ description: '查询类型/查询角色（固定 \'客服\'）' }),
    currPage: Flags.string({ description: '当前页码（currPage || 1，首次查询及标签切换为 1，分页回调传 api.getCurrent()；每页固定 10 条）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindTrackExceptionOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findTrackExceptionOrder', { "shopid": flags.shopid, "shopManager": flags.shopManager, "expressTypeId": flags.expressTypeId, "exceptionType": flags.exceptionType, "expressTimeStart": flags.expressTimeStart, "expressTimeEnd": flags.expressTimeEnd, "queryType": flags.queryType, "currPage": flags.currPage })
    this.output(data)
  }
}
