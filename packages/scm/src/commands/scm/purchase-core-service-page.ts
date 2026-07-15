// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmPurchaseCoreServicePage extends MBSCommand {
  static description = '降本明细分页查询：降本优化报表「降本明细」页签的多条件分页查询：支持降本时间、入库时间区间、SPU、SKU、降本人、排序方式等筛选，返回降本明细列表（SPU/SKU/产品名/供应商/降本前后金额/降本差额/下降比率/累计降本金额）及总条数。'

  static flags = {
    downCostStartDate: Flags.string({ description: '降本时间-起始（降本时间 datePicker 起始）' }),
    downCostEndDate: Flags.string({ description: '降本时间-结束（降本时间 datePicker 结束）' }),
    stockStartDate: Flags.string({ description: '入库时间-起始（入库时间 datePicker 起始）' }),
    stockEndDate: Flags.string({ description: '入库时间-结束（入库时间 datePicker 结束）' }),
    spu: Flags.string({ description: 'SPU（SPU 输入框）' }),
    sku: Flags.string({ description: 'SKU（SKU 输入框）' }),
    downCostPerson: Flags.string({ description: '降本人（降本人 输入框）' }),
    orderBy: Flags.string({ description: '排序方式（默认 null 不排序）。1=降本差额降序；2=下降比率降序；3=累计降本金额降序' }),
    total: Flags.string({ description: '总条数（来源 detailPageInfo.total，初始 0，随请求带出）' }),
    page: Flags.string({ description: '当前页码（来源 detailPageInfo.page，请求前置为传入 index，默认 1）', required: true }),
    pageSize: Flags.string({ description: '每页条数（来源 detailPageInfo.pageSize，默认 100）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmPurchaseCoreServicePage)

    const data = await this.client.post('/gateway/purchase-core-service/down/cost/report/page', { "downCostStartDate": flags.downCostStartDate, "downCostEndDate": flags.downCostEndDate, "stockStartDate": flags.stockStartDate, "stockEndDate": flags.stockEndDate, "spu": flags.spu, "sku": flags.sku, "downCostPerson": flags.downCostPerson, "orderBy": flags.orderBy, "total": flags.total, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
