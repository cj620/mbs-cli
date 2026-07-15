// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSkuView extends MBSCommand {
  static description = '查询SKU查看：查询SKU查看(源码无注释,按方法名推断)'

  static flags = {
    searchSku: Flags.string({ description: '搜索SKU（字段名推断,语义待核实）' }),
    searchFinallyExressStartTime: Flags.string({ description: '搜索FinallyExress开始时间（字段名推断,语义待核实）' }),
    searchFinallyExressEndTime: Flags.string({ description: '搜索FinallyExress结束时间（字段名推断,语义待核实）' }),
    searchSkuList: Flags.string({ description: '搜索SKU列表（字段名推断,语义待核实） (comma-separated)' }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    projectName: Flags.string({ description: '项目名称（字段名推断,语义待核实）' }),
    nowSchedule: Flags.string({ description: '当前进度' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    start: Flags.integer({ description: '开始（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    orderBy: Flags.string({ description: '1 根据sku添加时间排序, 2 根据库存排序, 3 根据累计发货数量排序, 4 根据累计商品成本排序' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSkuView)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/hwcDevelopmentProject/getSkuView', { "searchSku": flags.searchSku, "searchFinallyExressStartTime": flags.searchFinallyExressStartTime, "searchFinallyExressEndTime": flags.searchFinallyExressEndTime, "searchSkuList": toArray(flags.searchSkuList, 'string'), "sku": flags.sku, "projectName": flags.projectName, "nowSchedule": flags.nowSchedule, "page": flags.page, "start": flags.start, "pageSize": flags.pageSize, "orderBy": flags.orderBy })
    this.output(data)
  }
}
