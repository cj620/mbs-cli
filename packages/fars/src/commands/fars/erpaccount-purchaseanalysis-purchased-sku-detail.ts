// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountPurchaseanalysisPurchasedSkuDetail extends MBSCommand {
  static description = '已采购的SKU明细查询：采购分析看板「已采购的SKU」下钻明细：根据销量级别(typename)、状态(status)、开发员(oper3)三个查询条件，查询对应分组下的已采购SKU列表，返回 SKU、销量级别、状态、缺货量、在途量、开发员、采购员等字段，前端用 art-template 渲染为表格。'

  static flags = {
    typename: Flags.string({ description: '销量级别/类型名称。来源当前页面URL参数typename(GetQueryString(\'typename\'))，为接口主查询条件。枚举随采购分析看板分组而定(待人工确认)。', required: true }),
    status: Flags.string({ description: '状态(采购/库存状态)。来源当前页面URL参数status(GetQueryString(\'status\'))。枚举待人工确认。' }),
    oper3: Flags.string({ description: '开发员。来源当前页面URL参数oper3(GetQueryString(\'oper3\'))；为空或\'undefined\'时前端置为空串\'\'。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountPurchaseanalysisPurchasedSkuDetail)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/purchaseanalysisPurchasedSkuDetail', {}, { params: { "typename": flags.typename, "status": flags.status, "oper3": flags.oper3 } })
    this.output(data)
  }
}
