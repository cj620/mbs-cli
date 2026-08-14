// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelInfoProcessFetcher extends MBSCommand {
  static description = '账单反查表查询：TikTok 核对域「账单反查表」列表分页查询：按付款单号/结算单号/店铺名称/所属公司等条件，返回账单反查明细列表（结算/付款单号、店铺、币种、总应收、平台费、物流费、广告费、税费、退款、打款金额、公司等）及总数。'

  static flags = {
    type: Flags.string({ description: 'URL 固定查询参数，固定取值 1（接口写死在请求 URL 上）', required: true }),
    paymentIds: Flags.string({ description: '付款单号；输入框多个以空格分隔，前端按空格拆分为数组（来源控件：Input「付款单号」） (comma-separated)' }),
    settlementIds: Flags.string({ description: '结算单号；输入框多个以空格分隔，前端按空格拆分为数组（来源控件：Input「结算单号」） (comma-separated)' }),
    shopName: Flags.string({ description: '店铺名称（来源控件：Input「店铺名称」）' }),
    companyId: Flags.string({ description: '所属公司。枚举：1=胤元；33=启元（来源控件：Select「所属公司」，默认空）' }),
    pageSize: Flags.string({ description: '每页条数；默认 100，分页可选 100/200/300/400（来源控件：t-pagination）', required: true }),
    page: Flags.string({ description: '当前页码；默认 1（来源控件：t-pagination 翻页 / 搜索时传 1）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelInfoProcessFetcher)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/parallelInfoProcessFetcher', { "type": flags.type, "paymentIds": toArray(flags.paymentIds, 'string'), "settlementIds": toArray(flags.settlementIds, 'string'), "shopName": flags.shopName, "companyId": flags.companyId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
