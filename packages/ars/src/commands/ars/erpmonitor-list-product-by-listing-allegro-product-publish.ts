// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorListProductByListingAllegroProductPublish extends MBSCommand {
  static description = 'Allegro已导入商品(Listing)列表查询：查询 Allegro 商品导入(刊登 listing)结果列表：按 SPU、导入结果状态、导入人分页筛选，返回导入商品(SPU)行及其下 SKU 明细、店铺、毛利率、备货时长、物流模板、价格、导入人、导入结果与时间等字段；列表行可展开查看 SKU 价格/库存/币种。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码(来源 baseData.currentPage，默认1，分页回调 api.getCurrent() 更新)', required: true }),
    pagesize: Flags.string({ description: '每页条数(前端固定传 200)', required: true }),
    spu: Flags.string({ description: 'SPU 搜索(来源输入框 #spuCode，支持 spu 或 sku)' }),
    status: Flags.string({ description: '导入结果状态(来源下拉 #status)。空=全部;导入成功;导入失败' }),
    employee: Flags.string({ description: '导入人(来源下拉 #employee，值为 employee_id)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorListProductByListingAllegroProductPublish)

    const data = await this.client.post('/erpmonitor/erpmonitor/allegroProductPublish/listProductByListing', { "currentPage": flags.currentPage, "pagesize": flags.pagesize, "spu": flags.spu, "status": flags.status, "employee": flags.employee })
    this.output(data)
  }
}
