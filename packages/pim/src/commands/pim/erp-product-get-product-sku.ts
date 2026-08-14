// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductSku extends MBSCommand {
  static description = 'SPU下SKU信息查询：SPU 详情页按 SPU 查询该 SPU 下全部 SKU 列表，返回每个 SKU 的图片、名称、库存/待发货、供应商、商品属性、销量等级、颜色尺寸、含运费成本、新品扶持期价格与剩余天数、毛净重、包装尺寸、近7/30/90天销量、开发员与创建时间等，用于渲染「SKU 信息」表格。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号，来源页面地址栏 ?SPU= 参数(GetQueryString(\'SPU\'))，URL query 传递', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductSku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getProductSku', {}, { params: { "spu": flags.spu } })
    this.output(data)
  }
}
