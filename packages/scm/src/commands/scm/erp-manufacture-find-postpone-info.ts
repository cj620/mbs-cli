// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindPostponeInfo extends MBSCommand {
  static description = '延长收货订单分页查询：延长收货订单管理页查询：按订单编号、买家、时间(订单/发货)区间、店铺、店铺负责人、物流类型/方式、剩余收货时间区间、排序及 Tab 状态(延长收货订单/延长中)分页查询，返回订单列表及订单金额、毛利、物流、剩余收货时间、延长状态等字段。'

  static flags = {
    page: Flags.string({ description: '当前页码；首次/搜索固定传 1，分页回调传 api.getCurrent()', required: true }),
    tradeId: Flags.string({ description: '订单编号(来源控件 #tradeId 输入框)' }),
    customerId: Flags.string({ description: '买家名称(来源控件 #customerId 输入框)' }),
    timeType: Flags.string({ description: '时间类型(配合 beginTime/finishTime)。0=订单时间;1=发货时间(默认)' }),
    beginTime: Flags.string({ description: '开始时间(日期 yyyy-MM-dd,来源控件 #beginTime)' }),
    finishTime: Flags.string({ description: '结束时间(日期 yyyy-MM-dd,来源控件 #finishTime)' }),
    shopType: Flags.string({ description: '店铺(店铺名,来源控件 #shopNames 下拉,选项来自 shopTypeList)' }),
    shopManager: Flags.string({ description: '店铺负责人(来源控件 #shopManger 下拉,选项来自 operList)' }),
    orderBy: Flags.string({ description: '排序方式。orderTime=订单时间正序;orderTime desc=订单时间倒序;expressTime=发货时间正序(默认);expressTime desc=发货时间倒序' }),
    surplusBeginTime: Flags.string({ description: '剩余收货时间-天数下限(单位:天,来源控件 #surplusBeginTime)' }),
    surplusFinishTime: Flags.string({ description: '剩余收货时间-天数上限(单位:天,来源控件 #surplusFinishTime)' }),
    expressName: Flags.string({ description: '物流类型。平邮;挂号(来源控件 #expressName 下拉)' }),
    expressType: Flags.string({ description: '物流方式(来源控件 #expressType 下拉,选项来自 expressList)' }),
    status: Flags.string({ description: 'Tab 状态标识(由 findPostponeInfo(num) 入参传入)。0=延长收货订单;1=延长中', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindPostponeInfo)

    const data = await this.client.post('/erpManufacture/erpManufacture/postponeInfo/findPostponeInfo', { "page": flags.page, "tradeId": flags.tradeId, "customerId": flags.customerId, "timeType": flags.timeType, "beginTime": flags.beginTime, "finishTime": flags.finishTime, "shopType": flags.shopType, "shopManager": flags.shopManager, "orderBy": flags.orderBy, "surplusBeginTime": flags.surplusBeginTime, "surplusFinishTime": flags.surplusFinishTime, "expressName": flags.expressName, "expressType": flags.expressType, "status": flags.status })
    this.output(data)
  }
}
