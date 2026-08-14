// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSaleNumBySku1 extends MBSCommand {
  static description = '按SKU查询备货额度统计(getSaleNumBySku1)：批量备货页中，按 SKU 与所选备货规则(stockUpID)查询该 SKU 当日全员已提交数量、平台申请备货最大值、平台申请备货额度，用于行内提示展示。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编码(来源导入明细行 item.sku / 表格行 row.sku)', required: true }),
    stockUpID: Flags.string({ description: '备货规则ID(applyForStockUpRule 规则记录ID，来源 entryObject.id / 命中规则 obj.id)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSaleNumBySku1)

    const data = await this.client.post('/erpProduct/erpProduct/product/getSaleNumBySku1', { "sku": flags.sku, "stockUpID": flags.stockUpID })
    this.output(data)
  }
}
