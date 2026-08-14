// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureCustomerList extends MBSCommand {
  static description = '客户(CRM)列表查询：CRM 客户列表分页查询：支持按客户名称模糊、所属销售、订单数量区间、订单总金额区间、累计毛利额区间、是否有跟进日志、最新跟进日志时间区间、是否已录入客户信息等条件筛选，并按下单时间/订单数量/订单总金额/客单价/毛利率/累计毛利额排序，返回客户列表及其订单、毛利、退款、跟进等汇总字段。'

  static flags = {
    search: Flags.string({ description: '客户名称模糊搜索关键词(来源输入框 #searchName)' }),
    sales: Flags.string({ description: '所属销售(来源输入框 #saleNames,有值时[值],无值时空数组[]) (comma-separated)' }),
    isEdit: Flags.string({ description: '是否已录入客户信息(来源复选框 #isEdit,勾选=1,未勾选=\'\')' }),
    minOrderNum: Flags.string({ description: '订单数量-起始(来源数字框 #minOrderNum)' }),
    maxOrderNum: Flags.string({ description: '订单数量-结束(来源数字框 #maxOrderNum)' }),
    minOrderAmount: Flags.string({ description: '订单总金额-起始(来源数字框 #minOrderAmount)' }),
    maxOrderAmount: Flags.string({ description: '订单总金额-结束(来源数字框 #maxOrderAmount)' }),
    minProfitAmount: Flags.string({ description: '累计毛利额-起始(来源数字框 #minProfitAmount)' }),
    maxProfitAmount: Flags.string({ description: '累计毛利额-结束(来源数字框 #maxProfitAmount)' }),
    isHaveTaskLog: Flags.string({ description: '是否有跟进日志(来源下拉 #isHaveTaskLog,\'\'=请选择;0=无跟进日志;1=有跟进日志)' }),
    updateLogDateStart: Flags.string({ description: '最新跟进日志时间-起始(来源日期框 #updateLogDateStart,yyyy-MM-dd)' }),
    updateLogDateEnd: Flags.string({ description: '最新跟进日志时间-结束(来源日期框 #updateLogDateEnd,yyyy-MM-dd)' }),
    orderBy: Flags.string({ description: '排序方式(来源下拉 #orderBy,1=下单时间倒序;2=订单数量降序;3=订单总金额降序;4=客单价降序;5=毛利率降序;6=累计毛利额降序)' }),
    pageSize: Flags.string({ description: '每页条数(来源下拉 #selectPagesize,10/50/100)', required: true }),
    page: Flags.string({ description: '当前页码(search()固定传1;分页回调传 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureCustomerList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpManufacture/erpManufacture/customer/customerList', { "search": flags.search, "sales": toArray(flags.sales, 'string'), "isEdit": flags.isEdit, "minOrderNum": flags.minOrderNum, "maxOrderNum": flags.maxOrderNum, "minOrderAmount": flags.minOrderAmount, "maxOrderAmount": flags.maxOrderAmount, "minProfitAmount": flags.minProfitAmount, "maxProfitAmount": flags.maxProfitAmount, "isHaveTaskLog": flags.isHaveTaskLog, "updateLogDateStart": flags.updateLogDateStart, "updateLogDateEnd": flags.updateLogDateEnd, "orderBy": flags.orderBy, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
