// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportDevelopmentProject extends MBSCommand {
  static description = '开发项目导出：开发项目导出'

  static flags = {
    createBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    developer: Flags.string({ description: '开发者（字段名推断,语义待核实）' }),
    startDate: Flags.string({ description: '开始日期（字段名推断,语义待核实）' }),
    endDate: Flags.string({ description: '结束日期（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    projectName: Flags.string({ description: '项目名称（字段名推断,语义待核实）' }),
    projectId: Flags.string({ description: '项目ID（字段名推断,语义待核实）' }),
    createList: Flags.string({ description: '创建列表（字段名推断,语义待核实） (comma-separated)' }),
    projectIds: Flags.string({ description: '项目ID列表（字段名推断,语义待核实） (comma-separated)' }),
    spuList: Flags.string({ description: 'SPU列表（字段名推断,语义待核实） (comma-separated)' }),
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    projectContent: Flags.string({ description: '项目内容（字段名推断,语义待核实）' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    bigChief: Flags.string({ description: '大酋长名字' }),
    isPublic: Flags.integer({ description: '是否公开' }),
    projectType: Flags.integer({ description: '项目类型:1.官方立项 2.产品线 3.组内跟进' }),
    saleLevel: Flags.string({ description: '售卖级别' }),
    companyId: Flags.string({ description: '公司Id' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportDevelopmentProject)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.get('/yypms/pms/developmentProject/exportDevelopmentProject', { params: { "createBy": flags.createBy, "developer": flags.developer, "startDate": flags.startDate, "endDate": flags.endDate, "spu": flags.spu, "projectName": flags.projectName, "projectId": flags.projectId, "createList": toArray(flags.createList, 'string'), "projectIds": toArray(flags.projectIds, 'string'), "spuList": toArray(flags.spuList, 'string'), "id": flags.id, "projectContent": flags.projectContent, "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "bigChief": flags.bigChief, "isPublic": flags.isPublic, "projectType": flags.projectType, "saleLevel": flags.saleLevel, "companyId": flags.companyId } })
    this.output(data)
  }
}
