// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetAliexpressPopProduct extends MBSCommand {
  static description = '速卖通POP半托管JIT预约商品列表查询：速卖通（AliExpress）POP半托管「立即加入JIT」页面的商品分页查询：按店铺、预约状态、item ID、库存区间筛选并支持排序，返回商品列表及每个商品的SKU明细（属性、销量级别、包装尺寸重量、价格、货品信息、各仓JIT可售库存）。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称（多选）。来源：店铺多选下拉，选项来自 shopDropDown 接口，默认全选 (comma-separated)' }),
    productId: Flags.string({ description: '商品 item ID。来源：item ID 输入框' }),
    page: Flags.string({ description: '当前页码（从1开始）', required: true }),
    size: Flags.string({ description: '每页条数，默认30，可选 30/50/100/200', required: true }),
    popStatus: Flags.string({ description: '预约状态（多选），默认[1]。1=待提交;2=成功;3=失败;4=已放弃;5=异常;6=已提交 (comma-separated)' }),
    total: Flags.string({ description: '总条数（前端分页展示字段，默认1，随 searchOption 一并提交，后端忽略）' }),
    minStock: Flags.string({ description: '库存下限（库存-小）。来源：库存-小 输入框' }),
    maxStock: Flags.string({ description: '库存上限（库存-大）。来源：库存-大 输入框' }),
    sort: Flags.string({ description: '排序方式，默认0。0=默认;1=最大库存降序;2=最大库存升序;3=listing30订单量降序;4=listing30订单量升序' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetAliexpressPopProduct)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/aliexpressPopProduct/getAliexpressPopProduct', { "shopName": toArray(flags.shopName, 'string'), "productId": flags.productId, "page": flags.page, "size": flags.size, "popStatus": toArray(flags.popStatus, 'number'), "total": flags.total, "minStock": flags.minStock, "maxStock": flags.maxStock, "sort": flags.sort })
    this.output(data)
  }
}
