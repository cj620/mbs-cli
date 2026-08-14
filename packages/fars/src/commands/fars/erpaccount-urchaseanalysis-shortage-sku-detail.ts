// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountUrchaseanalysisShortageSkuDetail extends MBSCommand {
  static description = '缺货SKU明细查询：采购分析-缺货SKU明细查询：根据销量级别(typename)、状态(status)、开发员(oper3)查询对应缺货SKU列表，返回每个缺货SKU的图片、名称、SKU、状态、成本价、供应商、缺货量、在途量、开发员/采购员等信息，用于「缺货SKU」看板明细渲染。'

  static flags = {
    typename: Flags.string({ description: '销量级别/类型名称，从当前页URL query读取并拼接到接口URL', required: true }),
    status: Flags.string({ description: '状态(如清仓/停产等产品状态)，从当前页URL query读取', required: true }),
    oper3: Flags.string({ description: '开发员，从当前页URL query读取；为空或\'undefined\'时置为空串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountUrchaseanalysisShortageSkuDetail)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/urchaseanalysisShortageSkuDetail', {}, { params: { "typename": flags.typename, "status": flags.status, "oper3": flags.oper3 } })
    this.output(data)
  }
}
