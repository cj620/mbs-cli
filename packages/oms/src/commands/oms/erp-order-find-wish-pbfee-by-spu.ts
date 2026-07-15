// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWishPbfeeBySpu extends MBSCommand {
  static description = '按SPU查询商品推广(PB)费用统计：按交易时间区间与排序条件，分页查询各 SPU 的销售收入(总/新品/老品)、订单数、订单毛利额、广告费(总/新品/老品)、广告销售额(总/新品/老品)、广告占比(ACOS)、PB占比与 ROI 等统计指标，用于 PB费用-按SPU查看 报表页渲染。'

  static flags = {
    startTime: Flags.string({ description: '交易时间-起始(来源 #startTime date 控件，格式 YYYY-MM-DD；为空时前端拦截)', required: true }),
    endTime: Flags.string({ description: '交易时间-结束(来源 #endTime date 控件，格式 YYYY-MM-DD；为空或小于起始时前端拦截)', required: true }),
    field: Flags.string({ description: '排序字段(来源 #rank 下拉)。枚举：totalSales=销售收入;orderTotalNum=订单数;totalFee=PB费;ml=毛利;roi=roi;feelimit=PB占比', required: true }),
    order: Flags.string({ description: '排序方向(来源 #descending 下拉)。枚举：asc=升序;desc=降序(默认)', required: true }),
    currPage: Flags.string({ description: '当前页码(首次查询固定为 1；分页时取 api.getCurrent())', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定 100；页面文案显示每页50条，实际请求传 100)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWishPbfeeBySpu)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findWishPBFeeBySpu', { "startTime": flags.startTime, "endTime": flags.endTime, "field": flags.field, "order": flags.order, "currPage": flags.currPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
