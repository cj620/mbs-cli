// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetPmsSpuList extends MBSCommand {
  static description = '查询刊登系统SPU列表：查询刊登系统SPU列表(源码无注释,按方法名推断)'

  static flags = {
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    arter: Flags.string({ description: 'Arter（字段名推断,语义待核实）' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    companyId: Flags.integer({ description: '公司ID（字段名推断,语义待核实）' }),
    imgStatus: Flags.integer({ description: '图片状态（字段名推断,语义待核实）' }),
    spuList: Flags.string({ description: 'SPU列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetPmsSpuList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/spu/getPmsSpuList', { "spu": flags.spu, "arter": flags.arter, "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "companyId": flags.companyId, "imgStatus": flags.imgStatus, "spuList": toArray(flags.spuList, 'string') })
    this.output(data)
  }
}
