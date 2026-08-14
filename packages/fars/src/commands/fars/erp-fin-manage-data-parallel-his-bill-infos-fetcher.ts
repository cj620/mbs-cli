// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelHisBillInfosFetcher extends MBSCommand {
  static description = '非当月账单明细查询：TikTok 对账中心「非当月账单明细」分页查询：按汇总单号/财务单号/订单编号/付款单号/结算单号/店铺名称/账单时间/问题反馈/账单分类/所属公司等条件筛选，返回账单明细列表及总条数。'

  static flags = {
    relatedOrderIds: Flags.string({ description: '汇总单号（全部订单汇总），多个值空格分隔→字符串数组 (comma-separated)' }),
    sequecneIds: Flags.string({ description: '财务单号，多个值空格分隔→字符串数组 (comma-separated)' }),
    orderIds: Flags.string({ description: '订单编号，多个值空格分隔→字符串数组 (comma-separated)' }),
    paymentIds: Flags.string({ description: '付款单号，多个值空格分隔→字符串数组 (comma-separated)' }),
    settlementIds: Flags.string({ description: '结算单号，多个值空格分隔→字符串数组 (comma-separated)' }),
    shopName: Flags.string({ description: '店铺名称' }),
    shortSettlementTime: Flags.string({ description: '账单时间-起始（日期范围左值）' }),
    longSettlementTime: Flags.string({ description: '账单时间-结束（日期范围右值）' }),
    problem: Flags.string({ description: '问题反馈（一级）。1=无异常;2=核对金额小于0;3=核对金额大于0;4=属于平台优惠运费;5=未归纳到反馈问题' }),
    secondProblem: Flags.string({ description: '二级问题反馈（多选），默认[]，非当月账单表下不展示二级联动 (comma-separated)' }),
    zdMonthType: Flags.string({ description: '账单分类。1=往月代收;2=往月遗漏;3=下月账单' }),
    companyId: Flags.string({ description: '所属公司。1=胤元;33=启元' }),
    pageSize: Flags.string({ description: '每页条数（默认100，可选100/200/300/400）', required: true }),
    page: Flags.string({ description: '当前页码（默认1）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelHisBillInfosFetcher)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/parallelHisBillInfosFetcher', { "relatedOrderIds": toArray(flags.relatedOrderIds, 'string'), "sequecneIds": toArray(flags.sequecneIds, 'string'), "orderIds": toArray(flags.orderIds, 'string'), "paymentIds": toArray(flags.paymentIds, 'string'), "settlementIds": toArray(flags.settlementIds, 'string'), "shopName": flags.shopName, "shortSettlementTime": flags.shortSettlementTime, "longSettlementTime": flags.longSettlementTime, "problem": flags.problem, "secondProblem": toArray(flags.secondProblem, 'string'), "zdMonthType": flags.zdMonthType, "companyId": flags.companyId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
