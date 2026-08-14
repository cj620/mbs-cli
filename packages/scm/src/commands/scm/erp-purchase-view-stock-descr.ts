// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseViewStockDescr extends MBSCommand {
  static description = '查看签收入库注意事项：采购审批页“入库注意事项”弹窗点开时，按采购批次序号ID(sequenceid)查询该批次已保存的签收入库注意事项(stockdescr)，回填到弹窗文本域中供查看/编辑。'

  static flags = {
    sequenceid: Flags.string({ description: '采购批次序号ID(主键)。来源：列表行数据 id.sequenceid，经 attentionModal(id) 传入 viewStockDescr(id)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseViewStockDescr)

    const data = await this.client.post('/erpPurchase/erpPurchase/purchaseApproval/viewStockDescr', { "sequenceid": flags.sequenceid })
    this.output(data)
  }
}
