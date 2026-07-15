// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductReducePrice extends MBSCommand {
  static description = '降本SKU榜查询：降本排行榜页「降本SKU榜」分页查询：按SKU编号、开发员、采购员筛选，返回SKU降本明细（开发员/采购组、图片、产品名、降本持续天数、30天销量、当前采购价、累计降本金额、每周降本金额）及总数、总页数。'

  static flags = {
    sku: Flags.string({ description: 'SKU编号（来源输入框 #SKU，占位「请输入sku编号」；为空时查询全部）' }),
    developOper: Flags.string({ description: '开发员（来源下拉框 #developOper，选项由 /product/getEmpByDep?depId=62 加载；空值=全部）' }),
    purchaseOper: Flags.string({ description: '采购员（来源下拉框 #purchaseOper，选项由 /product/getEmpByDep?depId=65 加载；空值=全部）' }),
    pageSize: Flags.string({ description: '每页条数（前端固定传 50）', required: true }),
    page: Flags.string({ description: '当前页码（首次固定为 1，分页回调取 api.getCurrent()）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductReducePrice)

    const data = await this.client.post('/erpProduct/erpProduct/productExtend/getProductReducePrice', { "sku": flags.sku, "developOper": flags.developOper, "purchaseOper": flags.purchaseOper, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
