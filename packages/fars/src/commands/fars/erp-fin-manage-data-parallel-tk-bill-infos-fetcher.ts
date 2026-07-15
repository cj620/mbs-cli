// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelTkBillInfosFetcher extends MBSCommand {
  static description = 'TikTok账单核对表查询：TikTok核销·账单核对明细列表分页查询：按汇总单号/订单编号/付款单号/结算单号/店铺名称/账单时间/问题反馈/异常分类/是否核销/付款反查/所属公司等条件筛选，返回账单核对行明细及总条数。type=1 标识账单核对表。'

  static flags = {
    type: Flags.string({ description: 'URL固定查询参数 type=1（账单核对表标识），非请求体字段', required: true }),
    relatedOrderIds: Flags.string({ description: '汇总单号（全部订单汇总），输入框多个空格分隔后拆分为字符串数组 (comma-separated)' }),
    orderIds: Flags.string({ description: '订单编号，多个空格分隔拆分为数组 (comma-separated)' }),
    paymentIds: Flags.string({ description: '付款单号，多个空格分隔拆分为数组 (comma-separated)' }),
    settlementIds: Flags.string({ description: '结算单号，多个空格分隔拆分为数组 (comma-separated)' }),
    shopName: Flags.string({ description: '店铺名称' }),
    shortSettlementTime: Flags.string({ description: '账单时间-起始(yyyy-MM-dd)，默认空' }),
    longSettlementTime: Flags.string({ description: '账单时间-结束(yyyy-MM-dd)，默认空' }),
    problem: Flags.string({ description: '问题反馈枚举(账单核对表)。1=无异常;2=核对金额小于0;3=核对金额大于0;4=属于平台优惠运费;5=未归纳到反馈问题' }),
    secondProblem: Flags.string({ description: '二级问题反馈(多选)；账单核对表一级项无下级，固定为[] (comma-separated)' }),
    companyId: Flags.string({ description: '所属公司。1=胤元;33=启元' }),
    zdMonthType: Flags.string({ description: '异常分类。0=无结算单或付款单;1=无结算单且无付款单;2=有结算单但无付款单;3=无结算单但有付款单' }),
    isVerification: Flags.string({ description: '是否核销。0=否;1=是' }),
    isExistPayment: Flags.string({ description: '付款反查。0=否;1=是' }),
    pageSize: Flags.string({ description: '每页条数，默认100，可选100/200/300/400', required: true }),
    page: Flags.string({ description: '当前页码，从1开始', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelTkBillInfosFetcher)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/parallelTkBillInfosFetcher', { "relatedOrderIds": toArray(flags.relatedOrderIds, 'string'), "orderIds": toArray(flags.orderIds, 'string'), "paymentIds": toArray(flags.paymentIds, 'string'), "settlementIds": toArray(flags.settlementIds, 'string'), "shopName": flags.shopName, "shortSettlementTime": flags.shortSettlementTime, "longSettlementTime": flags.longSettlementTime, "problem": flags.problem, "secondProblem": toArray(flags.secondProblem, 'string'), "companyId": flags.companyId, "zdMonthType": flags.zdMonthType, "isVerification": flags.isVerification, "isExistPayment": flags.isExistPayment, "pageSize": flags.pageSize, "page": flags.page }, { params: { "type": flags.type } })
    this.output(data)
  }
}
