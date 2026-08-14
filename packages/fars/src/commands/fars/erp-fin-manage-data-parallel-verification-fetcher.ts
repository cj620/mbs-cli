// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelVerificationFetcher extends MBSCommand {
  static description = '异常账单表-平行核对数据查询：TikTok「异常账单明细」表的平行核对数据分页查询：按汇总单号/订单编号/结算单号/店铺名称/账单时间区间/问题反馈/所属公司等条件分页查询异常账单核对明细，返回明细列表及总记录数。'

  static flags = {
    relatedOrderIds: Flags.string({ description: '汇总单号(全部订单汇总)，多个空格分隔拆成数组，空时为[] (comma-separated)' }),
    orderIds: Flags.string({ description: '订单编号，多个空格分隔拆数组，空时为[] (comma-separated)' }),
    settlementIds: Flags.string({ description: '结算单号，多个空格分隔拆数组，空时为[] (comma-separated)' }),
    shopName: Flags.string({ description: '店铺名称(单值输入)' }),
    shortSettlementTime: Flags.string({ description: '账单时间-起始(账单时间区间起)，初始默认\'\'' }),
    longSettlementTime: Flags.string({ description: '账单时间-结束(账单时间区间止)，初始默认\'\'' }),
    problem: Flags.string({ description: '问题反馈枚举(异常账单表)：1=无异常;2=核对金额小于0;3=核对金额大于0;4=属于平台优惠运费' }),
    secondProblem: Flags.string({ description: '二级问题反馈，仅账-付-流对比表展开；异常账单表固定为空数组[] (comma-separated)' }),
    companyId: Flags.string({ description: '所属公司：1=胤元;33=启元；初始默认\'\'' }),
    pageSize: Flags.string({ description: '每页条数，默认100，可选100/200/300/400', required: true }),
    page: Flags.string({ description: '当前页码(page.countPage)，默认1', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelVerificationFetcher)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/parallelVerificationFetcher', { "relatedOrderIds": toArray(flags.relatedOrderIds, 'string'), "orderIds": toArray(flags.orderIds, 'string'), "settlementIds": toArray(flags.settlementIds, 'string'), "shopName": flags.shopName, "shortSettlementTime": flags.shortSettlementTime, "longSettlementTime": flags.longSettlementTime, "problem": flags.problem, "secondProblem": toArray(flags.secondProblem, 'string'), "companyId": flags.companyId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
