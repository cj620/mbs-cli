// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetOptimalPurchase extends MBSCommand {
  static description = '最优采购/预计到货信息查询：在店铺爆款监控列表中点击某行预计到货/日志入口时，按该行 ERP SKU 查询其最优采购方案下采购发货、采购到货、仓库签收等各环节的开始/完成/预警时间及整体预计到货时间，在预计到货弹窗以步骤表展示。'

  static flags = {
    sku: Flags.string({ description: 'URL查询串中的SKU，值=当前列表行ERP SKU(item.erpSku，经 sessionStorage(\'logsku\') 中转)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetOptimalPurchase)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getOptimalPurchase', { "sku": flags.sku }, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
