// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductPoorSkuList extends MBSCommand {
  static description = '国内不良库存SKU列表查询：国内/海外仓不良库存SKU分页查询：按SKU、海外仓类型、直邮类型、销量级别、产品状态、开发员(开发组员)、采购员等条件筛选，返回不良库存SKU列表及SKU/SPU总数与各项汇总。'

  static flags = {
    pageSize: Flags.string({ description: '每页条数(可选 50/100/200/300，默认50)', required: true }),
    pageNum: Flags.string({ description: '当前页码(默认1)', required: true }),
    skuList: Flags.string({ description: 'SKU列表(输入框按空格拆分，空则传 []) (comma-separated)' }),
    overseasType: Flags.string({ description: '海外仓类型(多选，值为 warehouseTypeId) (comma-separated)' }),
    directMailType: Flags.string({ description: '直邮类型(多选，枚举：TEMU仓/JIT仓/上海代发仓) (comma-separated)' }),
    salesLevel: Flags.string({ description: '销量级别(多选，值为 typeName) (comma-separated)' }),
    productStatus: Flags.string({ description: '产品状态(多选，枚举：正常/清仓/停产/自动创建/暂停销售) (comma-separated)' }),
    developer: Flags.string({ description: '开发员/开发组员(组员姓名；未选时默认取全部组员名) (comma-separated)' }),
    purchaser: Flags.string({ description: '采购员(多选，选项来自 getEmpByDep depId=65) (comma-separated)' }),
    lastProcurement: Flags.string({ description: '末次采购备货人(多选，前端本页过滤用，仍随请求提交) (comma-separated)' }),
    highProcurement: Flags.string({ description: '滞销分析占比最高备货人(多选，前端本页过滤用，仍随请求提交) (comma-separated)' }),
    orderBy: Flags.string({ description: '排序字段(降序=列prop+1，升序=列prop+2，清除=null，默认3)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductPoorSkuList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/indonesia/poorSkuList', { "pageSize": flags.pageSize, "pageNum": flags.pageNum, "skuList": toArray(flags.skuList, 'string'), "overseasType": toArray(flags.overseasType, 'string'), "directMailType": toArray(flags.directMailType, 'string'), "salesLevel": toArray(flags.salesLevel, 'string'), "productStatus": toArray(flags.productStatus, 'string'), "developer": toArray(flags.developer, 'string'), "purchaser": toArray(flags.purchaser, 'string'), "lastProcurement": toArray(flags.lastProcurement, 'string'), "highProcurement": toArray(flags.highProcurement, 'string'), "orderBy": flags.orderBy })
    this.output(data)
  }
}
