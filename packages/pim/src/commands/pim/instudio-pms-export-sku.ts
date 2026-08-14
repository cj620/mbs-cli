// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportSku extends MBSCommand {
  static description = '导出walmart刊登SKU：导出walmart刊登SKU'

  static flags = {
    teamManagerList: Flags.string({ description: '获取店铺 (comma-separated)' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    shopId: Flags.string({ description: '店铺ID（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    categoryName: Flags.string({ description: '类目名称（字段名推断,语义待核实）' }),
    displayFieldFlag: Flags.integer({ description: '1 只显示, 0 排除掉这些字段' }),
    variantAttributeNameList: Flags.string({ description: '变体属性名称列表（字段名推断,语义待核实） (comma-separated)' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    shopManagerList: Flags.string({ description: '店铺管理列表（字段名推断,语义待核实） (comma-separated)' }),
    spuList: Flags.string({ description: 'SPU列表（字段名推断,语义待核实） (comma-separated)' }),
    status: Flags.integer({ description: '刊登状态' }),
    createBy: Flags.string({ description: '创建人' }),
    startDate: Flags.string({ description: '创建时间查询的开始时间' }),
    endDate: Flags.string({ description: '创建时间查询的结束时间' }),
    requestIds: Flags.string({ description: '请求ID列表（字段名推断,语义待核实） (comma-separated)' }),
    firstCategoryName: Flags.string({ description: '首个类目名称（字段名推断,语义待核实）' }),
    secondCategoryName: Flags.string({ description: '秒类目名称（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportSku)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/walmart/publish/sku/export', { "teamManagerList": toArray(flags.teamManagerList, 'string'), "site": flags.site, "shopName": flags.shopName, "shopId": flags.shopId, "spu": flags.spu, "categoryName": flags.categoryName, "displayFieldFlag": flags.displayFieldFlag, "variantAttributeNameList": toArray(flags.variantAttributeNameList, 'string'), "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "shopManagerList": toArray(flags.shopManagerList, 'string'), "spuList": toArray(flags.spuList, 'string'), "status": flags.status, "createBy": flags.createBy, "startDate": flags.startDate, "endDate": flags.endDate, "requestIds": toArray(flags.requestIds, 'string'), "firstCategoryName": flags.firstCategoryName, "secondCategoryName": flags.secondCategoryName })
    this.output(data)
  }
}
