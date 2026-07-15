// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureCustomerOrderList extends MBSCommand {
  static description = '客户订购产品列表查询：客户详情页「订购产品」卡片的分页列表查询：按当前客户(sequenceid)聚合其订购的主产品行，支持 SKU 模糊搜索、排序、分页，返回订购主产品(主SKU、下单时间、代发订单数、订购总金额、订购总数量、SKU个数)列表及总数/总页数。'

  static flags = {
    search: Flags.string({ description: '模糊搜索关键词(按SKU搜索)，来源输入框 #search' }),
    customer: Flags.string({ description: '客户ID，来源页面URL query sequenceid，限定查询当前客户的订购数据', required: true }),
    orderBy: Flags.string({ description: '排序字段(含排序方向)，来源排序下拉 #selectOrder。枚举：a.mainProduct desc/asc nulls last、a.currentDate desc/asc nulls last、a.orderNum asc/desc nulls last、a.orderAmount desc/asc nulls last、a.productNum desc/asc nulls last；首屏无参调用时为 undefined' }),
    pageSize: Flags.string({ description: '每页条数，来源选择器 #selectPagesize。枚举：10/50/100', required: true }),
    page: Flags.string({ description: '当前页码。search() 固定传 1；分页回调传 api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureCustomerOrderList)

    const data = await this.client.post('/erpManufacture/erpManufacture/customer/customerOrderList', { "search": flags.search, "customer": flags.customer, "orderBy": flags.orderBy, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
