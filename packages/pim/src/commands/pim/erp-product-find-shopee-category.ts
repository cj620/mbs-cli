// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopeeCategory extends MBSCommand {
  static description = 'Shopee各站点类目查询：按 SKU 或 SPU 分页查询商品在 Shopee 七个站点(ID印尼/SG新加坡/MY马来/TH泰国/PH菲律宾/TW台湾/VN越南)的类目分类与属性值，返回分页列表供页面表格渲染、修改与批量修改。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码。search() 首次查询固定传 1；翻页时取分页控件 api.getCurrent() 的当前页', required: true }),
    sku: Flags.string({ description: 'SKU编号(关键词)。仅当搜索类型 #status=1(按SKU搜索) 时传入，值来自输入框 #skuCode；与 spu 互斥' }),
    spu: Flags.string({ description: 'SPU编号(关键词)。仅当搜索类型 #status=2(按SPU搜索) 时传入，值来自输入框 #skuCode；与 sku 互斥' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopeeCategory)

    const data = await this.client.post('/erpProduct/erpProduct/productReport/findShopeeCategory', { "currentPage": flags.currentPage, "sku": flags.sku, "spu": flags.spu })
    this.output(data)
  }
}
