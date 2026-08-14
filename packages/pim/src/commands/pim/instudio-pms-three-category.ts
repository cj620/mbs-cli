// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsThreeCategory extends MBSCommand {
  static description = '开发中台的三级分类列表数据：开发中台的三级分类列表数据'

  static flags = {
    times: Flags.string({ description: '时间 (yyyy-MM)' }),
    firstCategoryName: Flags.string({ description: '一级类目' }),
    page: Flags.integer({ description: '页码' }),
    pageSize: Flags.integer({ description: '页容量' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    firstCategoryList: Flags.string({ description: '首个类目列表（字段名推断,语义待核实） (comma-separated)' }),
    secondCategoryName: Flags.string({ description: '二级类目' }),
    secondCategoryList: Flags.string({ description: '秒类目列表（字段名推断,语义待核实） (comma-separated)' }),
    companyId: Flags.integer({ description: '公司ID（字段名推断,语义待核实）' }),
    exportTimeList: Flags.string({ description: '导出使用的时间字段 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsThreeCategory)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/skuCategory/threeCategory', { "times": flags.times, "firstCategoryName": flags.firstCategoryName, "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "firstCategoryList": toArray(flags.firstCategoryList, 'string'), "secondCategoryName": flags.secondCategoryName, "secondCategoryList": toArray(flags.secondCategoryList, 'string'), "companyId": flags.companyId, "exportTimeList": toArray(flags.exportTimeList, 'string') })
    this.output(data)
  }
}
