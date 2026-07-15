// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetOverTwoDaysUnshippedDelivery extends MBSCommand {
  static description = '超2天未发货采购单详情查询：仪表盘下钻：按销量级别(typename)、产品状态(status)、开发员(oper3)筛选，查询超过2天仍未发货的采购单(采购批次)详情列表，返回采购批次、供应商、SKU、采购员、待发货/库存/在途量等字段。'

  static flags = {
    typename: Flags.string({ description: '销量级别/类型名(取自页面URL参数 typeName，用于按销量级别筛选)' }),
    status: Flags.string({ description: '产品状态(取自页面URL参数 status，按产品状态筛选)' }),
    oper3: Flags.string({ description: '开发员(取自页面URL参数 oper3；为空或 \'undefined\' 时前端置空串)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetOverTwoDaysUnshippedDelivery)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/getOverTwoDaysUnshippedDelivery', {}, { params: { "typename": flags.typename, "status": flags.status, "oper3": flags.oper3 } })
    this.output(data)
  }
}
