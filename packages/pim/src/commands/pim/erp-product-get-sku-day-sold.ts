// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSkuDaySold extends MBSCommand {
  static description = 'SKU每日销量查询(getSkuDaySold)：进入SKU详情页时，按当前SKU查询其各SID(子SKU/库存单元)的销量值，前端拼成 sid: reserve9 字符串后展示在"当日销量"区域(#skuDatSold)。'

  static flags = {
    sku: Flags.string({ description: 'SKU编号(query 参数)。来源：页面 URL 的 SKU 参数，经 GetQueryString("SKU") 取得后拼接到接口地址 ?sku= 之后', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSkuDaySold)

    const data = await this.client.get('/erpProduct/erpProduct/productDetails/getSkuDaySold', { params: { "sku": flags.sku } })
    this.output(data)
  }
}
