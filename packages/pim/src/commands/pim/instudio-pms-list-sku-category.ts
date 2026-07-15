// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsListSkuCategory extends MBSCommand {
  static description = '开发中台的一级分类列表数据：开发中台的一级分类列表数据'

  static flags = {
    times: Flags.string({ description: '时间 (yyyy-MM)' }),
    status: Flags.integer({ description: '数据维度(1 一级类目 2 二级类目)' }),
    firstCategory: Flags.string({ description: '一级类目' }),
    secondCategory: Flags.string({ description: '二级类目' }),
    categoryList: Flags.string({ description: '数据权限 可以查看的一级类目 (comma-separated)' }),
    page: Flags.integer({ description: '页码' }),
    pageSize: Flags.integer({ description: '页容量' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    chartType: Flags.string({ description: '趋势图类别' }),
    companyId: Flags.integer({ description: '公司ID（字段名推断,语义待核实）' }),
    warningIndexList: Flags.string({ description: '警戒指标 选中, 显示对应指标触发警戒的, 如果选择多个 or的关系 (comma-separated)' }),
    exportTitleList: Flags.string({ description: '需要导出的标题头 (comma-separated)' }),
    exportTimeList: Flags.string({ description: '导出使用的时间字段 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsListSkuCategory)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/skuCategory/list', { "times": flags.times, "status": flags.status, "firstCategory": flags.firstCategory, "secondCategory": flags.secondCategory, "categoryList": toArray(flags.categoryList, 'string'), "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "chartType": flags.chartType, "companyId": flags.companyId, "warningIndexList": toArray(flags.warningIndexList, 'string'), "exportTitleList": toArray(flags.exportTitleList, 'string'), "exportTimeList": toArray(flags.exportTimeList, 'string') })
    this.output(data)
  }
}
