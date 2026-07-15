// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetStrategyList extends MBSCommand {
  static description = '获取优化策略结果数据结果集合：获取优化策略结果数据结果集合'

  static flags = {
    monthList: Flags.string({ description: '月份列表（字段名推断,语义待核实） (comma-separated)' }),
    processStatus: Flags.integer({ description: '处理状态（字段名推断,语义待核实）' }),
    categoryType: Flags.integer({ description: '类目类型（字段名推断,语义待核实）' }),
    normTypeList: Flags.string({ description: 'NORM类型列表（字段名推断,语义待核实） (comma-separated)' }),
    sequenceIdList: Flags.string({ description: '序列ID列表（字段名推断,语义待核实） (comma-separated)' }),
    operName: Flags.string({ description: '操作名称（字段名推断,语义待核实）' }),
    operTime: Flags.string({ description: '操作时间（字段名推断,语义待核实）' }),
    start: Flags.integer({ description: '开始（字段名推断,语义待核实）' }),
    end: Flags.integer({ description: '结束（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetStrategyList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/strategyReasonCategory/getStrategyList', { "monthList": toArray(flags.monthList, 'string'), "processStatus": flags.processStatus, "categoryType": flags.categoryType, "normTypeList": toArray(flags.normTypeList, 'string'), "sequenceIdList": toArray(flags.sequenceIdList, 'string'), "operName": flags.operName, "operTime": flags.operTime, "start": flags.start, "end": flags.end })
    this.output(data)
  }
}
