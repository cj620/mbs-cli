// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetPurchaseanalysisOverSevenDay extends MBSCommand {
  static description = '超7天采购单详情查询：看板「超7天采购单」明细下钻：按销量级别(typename)、产品状态(status)、开发员(oper3)筛选，返回超7天未到货采购单明细列表(采购批次/供应商/SKU/采购员/销量级别/产品状态/开发员/待发货量/库存量/在途量)。'

  static flags = {
    typename: Flags.string({ description: '销量级别。值来自前端页面URL参数 typeName(拼接到后端键名为小写 typename)；可为空' }),
    status: Flags.string({ description: '产品状态。值来自前端页面URL参数 status；可为空' }),
    oper3: Flags.string({ description: '开发员。值来自前端页面URL参数 oper3；为空或 undefined 时前端置为空串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetPurchaseanalysisOverSevenDay)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/getPurchaseanalysisOverSevenDay', {}, { params: { "typename": flags.typename, "status": flags.status, "oper3": flags.oper3 } })
    this.output(data)
  }
}
