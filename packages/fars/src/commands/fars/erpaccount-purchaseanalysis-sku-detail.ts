// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountPurchaseanalysisSkuDetail extends MBSCommand {
  static description = '未采购SKU明细查询：财务域 Dashboard「未采购的SKU」明细查询：按销量级别(typename)、状态(status)、开发员(oper3)三项条件查询未采购SKU列表，返回SKU、销量级别、状态、缺货量、在途量、开发员、采购员等字段，前端用 art-template 渲染为表格。'

  static flags = {
    typename: Flags.string({ description: '销量级别（由页面URL query typename 透传）' }),
    status: Flags.string({ description: '状态（由页面URL query status 透传）' }),
    oper3: Flags.string({ description: '开发员（由页面URL query oper3 透传；取值为空或 \'undefined\' 时置为空串）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountPurchaseanalysisSkuDetail)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/purchaseanalysisSkuDetail', {}, { params: { "typename": flags.typename, "status": flags.status, "oper3": flags.oper3 } })
    this.output(data)
  }
}
