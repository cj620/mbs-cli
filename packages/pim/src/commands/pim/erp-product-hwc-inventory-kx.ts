// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductHwcInventoryKx extends MBSCommand {
  static description = '海外仓产品库息(明细)查询：海外仓产品报表(notFbareport)中，点击某商品的“昨日库息”数值时弹出“库息明细”弹窗，按 SKU(或捆绑商品 bindId)+海外仓分页查询该商品逐条库息记录(时间、单个成本、库存、日均销量、库息、创建/操作时间)。'

  static flags = {
    bindId: Flags.string({ description: '捆绑商品ID(num==1 即捆绑商品时传入，取自 data-sku)。与 skuValue 互斥' }),
    skuValue: Flags.string({ description: 'SKU编码(num==2 即普通商品时传入，取自 data-sku)。与 bindId 互斥' }),
    pageSize: Flags.string({ description: '每页条数(前端固定传 15)', required: true }),
    page: Flags.string({ description: '当前页码(首次查询固定 1；翻页取分页器 api.getCurrent())', required: true }),
    shopName: Flags.string({ description: '海外仓名称(店铺名，取自被点击元素 data-shopname)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductHwcInventoryKx)

    const data = await this.client.post('/erpProduct/erpProduct/hwcProduct/HwcInventoryKx', { "bindId": flags.bindId, "skuValue": flags.skuValue, "pageSize": flags.pageSize, "page": flags.page, "shopName": flags.shopName })
    this.output(data)
  }
}
