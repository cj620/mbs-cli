// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFbaInventoryKxSku extends MBSCommand {
  static description = 'FBA库存可销SKU明细查询：FBA库存可销(KX)报表的行下钻接口：点击「店铺负责人」行展开时，按该负责人(shopManager)查询其名下各SKU在各月份/周期的可销(kx)数据，返回 SKU + 周期可销数组，渲染到该行的子表格。'

  static flags = {
    sale: Flags.string({ description: '店铺负责人(店铺管理者)，来源 FBA库存可销报表行 data-shopmanger(=item.shopManager)，以 query 形式传递', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFbaInventoryKxSku)

    const data = await this.client.get('/erpProduct/erpProduct/fbaProduct/fbaInventoryKxSku', { params: {} })
    this.output(data)
  }
}
