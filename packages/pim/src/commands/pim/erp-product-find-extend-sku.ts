// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindExtendSku extends MBSCommand {
  static description = '查询SKU扩展记录(数量)：订单详情页加载销售产品列表后，对每个产品SKU调用本接口，查询该SKU是否已存在扩展SKU记录并返回其数量。前端据返回值是否为0，结合产品热度类型(旺A/爆A/爆B/超级爆款)与毛利(maoli<0)，决定是否显示扩展任务按钮。'

  static flags = {
    sku: Flags.string({ description: '商品SKU(产品编号)，来源 data.obj.list[i].productid，以 query string ?sku= 拼接在URL上', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindExtendSku)

    const data = await this.client.get('/erpProduct/erpProduct/productDetails/findExtendSku', { params: { "sku": flags.sku } })
    this.output(data)
  }
}
