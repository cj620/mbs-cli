// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountPurchaseanalysisPurchaseOrderDetail extends MBSCommand {
  static description = '超4天采购单详情查询：Dashboard“超4天采购单详情”明细查询：按销量级别(类型名称)、产品状态、开发员三项过滤条件，返回符合条件的采购单明细行（采购批次、供应商、SKU、采购员、销量级别、产品状态、开发员、待发货量、库存量、在途量）。前端以 art-template 渲染为明细表。'

  static flags = {
    typename: Flags.string({ description: '销量级别/类型名称（按销量级别过滤）。来源：当前页面 URL 参数 typeName。query 键名为小写 typename。' }),
    status: Flags.string({ description: '产品状态（按产品状态过滤）。来源：当前页面 URL 参数 status。' }),
    oper3: Flags.string({ description: '开发员（按开发员过滤）。来源：当前页面 URL 参数 oper3；为空或 \'undefined\' 时置为空串。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountPurchaseanalysisPurchaseOrderDetail)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/purchaseanalysisPurchaseOrderDetail', {}, { params: { "typename": flags.typename, "status": flags.status, "oper3": flags.oper3 } })
    this.output(data)
  }
}
