// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetInterceptLogList extends MBSCommand {
  static description = '拦截关键词/SKU 操作日志分页查询：拦截关键词/SKU 操作日志分页查询'

  static flags = {
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    opType: Flags.string({ description: '操作类型: 添加关键词 / 添加sku / 弃用关键词 / 弃用sku' }),
    interceptType: Flags.string({ description: '类型: KEYWORD / SKU' }),
    interceptValue: Flags.string({ description: '关键词或SKU (模糊匹配)' }),
    siteCodes: Flags.string({ description: '站点编码列表 (comma-separated)' }),
    oper: Flags.string({ description: '操作人' }),
    startTime: Flags.string({ description: '开始时间（字段名推断,语义待核实）' }),
    endTime: Flags.string({ description: '结束时间（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetInterceptLogList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/walmart/auto/getInterceptLogList', { "pageSize": flags.pageSize, "currentPage": flags.currentPage, "startIndex": flags.startIndex, "opType": flags.opType, "interceptType": flags.interceptType, "interceptValue": flags.interceptValue, "siteCodes": toArray(flags.siteCodes, 'string'), "oper": flags.oper, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
