// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFbaInventoryKx extends MBSCommand {
  static description = 'FBA库息（库存信息）查询：FBA产品状态报表中，点击某行 SKU 的“库息”按钮时，按 bindId/skuValue + 店铺名称分页查询该 SKU 的库息（库存周转）历史明细，返回时间、店铺、SKU、成本价、库存数、日均销量(DMS)、库息天数、创建/操作时间等列，并据 count/countPage 渲染分页。'

  static flags = {
    bindId: Flags.string({ description: '绑定ID。num==1 分支传入，值取被点击元素 data-sku；与 skuValue 互斥' }),
    skuValue: Flags.string({ description: 'SKU值。num!=1 分支传入，值取被点击元素 data-sku；与 bindId 互斥' }),
    shopName: Flags.string({ description: '店铺名称，取被点击元素 data-shopname' }),
    pageSize: Flags.string({ description: '每页条数，前端固定传 15', required: true }),
    page: Flags.string({ description: '当前页码。首次查询固定传 1，翻页时取分页器 api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFbaInventoryKx)

    const data = await this.client.post('/erpProduct/erpProduct/fbaProduct/fbaInventoryKx', { "bindId": flags.bindId, "skuValue": flags.skuValue, "shopName": flags.shopName, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
