// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWishPbofManager extends MBSCommand {
  static description = 'PB（广告）按人员维度统计查询：按交易时间区间，统计每个运营人员（店铺管理员）的销售收入（总/新品/老品）、销售订单数、毛利额、广告费（总/新品/老品）、广告销售额（总/新品/老品）、广告占比、PB占比、毛利率、ROI 等指标，按所选字段升/降序分页返回人员汇总列表。'

  static flags = {
    startTime: Flags.string({ description: '交易时间-起始（来源 #startTime 日期控件，格式 yyyy-MM-dd；前端校验不能为空）', required: true }),
    endTime: Flags.string({ description: '交易时间-结束（来源 #endTime 日期控件，格式 yyyy-MM-dd；前端校验不能为空且不小于起始）', required: true }),
    field: Flags.string({ description: '排序字段（来源 #rank 下拉）。枚举：totalSales=销售收入;orderTotalNum=订单数;totalFee=PB费;ml=毛利;mlrate=毛利率;roi=roi;feelimit=PB占比', required: true }),
    order: Flags.string({ description: '排序方向（来源 #descending 下拉）。枚举：asc=升序;desc=降序', required: true }),
    currPage: Flags.string({ description: '当前页码（首次查询固定为1；分页回调取 api.getCurrent()）', required: true }),
    pageSize: Flags.string({ description: '每页条数（search() 传 50；分页 paging() 回调传 100）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWishPbofManager)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findWishPBOfManager', { "startTime": flags.startTime, "endTime": flags.endTime, "field": flags.field, "order": flags.order, "currPage": flags.currPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
