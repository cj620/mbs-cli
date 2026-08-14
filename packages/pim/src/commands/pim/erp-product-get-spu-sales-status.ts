// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSpuSalesStatus extends MBSCommand {
  static description = 'SPU各平台销售状况查询：在SPU管理列表的“毛利率”单元格鼠标悬浮时触发，按SKU查询该商品在各销售平台的销售额、毛利、退款、广告费汇总，渲染为气泡内的平台明细表格。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编号(取自毛利率单元格 data-sid,即列表当前行SKU),作为 query 参数随URL拼接传入', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSpuSalesStatus)

    const data = await this.client.get('/erpProduct/erpProduct/product/getSpuSalesStatus', { params: { "sku": flags.sku } })
    this.output(data)
  }
}
