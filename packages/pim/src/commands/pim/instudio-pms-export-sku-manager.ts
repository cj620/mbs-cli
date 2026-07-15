// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportSkuManager extends MBSCommand {
  static description = '开发中台的列表数据：开发中台的列表数据'

  static flags = {
    skuOper: Flags.string({ description: '开发姓名' }),
    times: Flags.string({ description: '时间 (yyyy-MM)' }),
    position: Flags.integer({ description: '职位' }),
    skuOperList: Flags.string({ description: '开发员 (comma-separated)' }),
    page: Flags.integer({ description: '页码' }),
    pageSize: Flags.integer({ description: '页容量' }),
    directors: Flags.string({ description: '总监 (comma-separated)' }),
    managers: Flags.string({ description: '经理 (comma-separated)' }),
    shopManagerIds: Flags.string({ description: '店长id (comma-separated)' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    area: Flags.string({ description: '区域（字段名推断,语义待核实）' }),
    areaSpecial: Flags.string({ description: '启元人只能看启元的' }),
    companyId: Flags.integer({ description: '公司ID（字段名推断,语义待核实）' }),
    permissionsOperList: Flags.string({ description: '开发员 (comma-separated)' }),
    chartType: Flags.string({ description: '趋势图字段' }),
    gtInductionTime: Flags.string({ description: '入职时间大于' }),
    ltInductionTime: Flags.string({ description: '入职时间小于' }),
    hideSkuOperList: Flags.string({ description: '隐藏开发员 (comma-separated)' }),
    warningIndexList: Flags.string({ description: '警戒指标 选中, 显示对应指标触发警戒的, 如果选择多个 or的关系 (comma-separated)' }),
    exportTitleList: Flags.string({ description: '需要导出的标题头 (comma-separated)' }),
    exportTimeList: Flags.string({ description: '导出使用的时间字段 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportSkuManager)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/skuManager/export', { "skuOper": flags.skuOper, "times": flags.times, "position": flags.position, "skuOperList": toArray(flags.skuOperList, 'string'), "page": flags.page, "pageSize": flags.pageSize, "directors": toArray(flags.directors, 'string'), "managers": toArray(flags.managers, 'string'), "shopManagerIds": toArray(flags.shopManagerIds, 'string'), "startIndex": flags.startIndex, "area": flags.area, "areaSpecial": flags.areaSpecial, "companyId": flags.companyId, "permissionsOperList": toArray(flags.permissionsOperList, 'string'), "chartType": flags.chartType, "gtInductionTime": flags.gtInductionTime, "ltInductionTime": flags.ltInductionTime, "hideSkuOperList": toArray(flags.hideSkuOperList, 'string'), "warningIndexList": toArray(flags.warningIndexList, 'string'), "exportTitleList": toArray(flags.exportTitleList, 'string'), "exportTimeList": toArray(flags.exportTimeList, 'string') })
    this.output(data)
  }
}
