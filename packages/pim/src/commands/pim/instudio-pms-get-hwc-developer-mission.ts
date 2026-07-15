// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetHwcDeveloperMission extends MBSCommand {
  static description = '查询海外仓类型列表：查询海外仓类型列表'

  static flags = {
    typeName: Flags.string({ description: '类型名称（字段名推断,语义待核实）' }),
    category: Flags.string({ description: '类目（字段名推断,语义待核实）' }),
    parentCategory: Flags.string({ description: '父级类目（字段名推断,语义待核实）' }),
    oper: Flags.string({ description: '操作（字段名推断,语义待核实）' }),
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    checkStatus: Flags.string({ description: '校验状态（字段名推断,语义待核实）' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    developer: Flags.string({ description: '开发者（字段名推断,语义待核实）' }),
    auditor: Flags.string({ description: '审核人' }),
    managerEmpList: Flags.string({ description: '管理EMP列表（字段名推断,语义待核实） (comma-separated)' }),
    devTeam: Flags.string({ description: 'DEV团队（字段名推断,语义待核实） (comma-separated)' }),
    depart: Flags.string({ description: 'Depart（字段名推断,语义待核实）' }),
    createDateStart: Flags.string({ description: '创建日期开始（字段名推断,语义待核实）' }),
    createeDateEnd: Flags.string({ description: 'Createe日期结束（字段名推断,语义待核实）' }),
    auditStatus: Flags.string({ description: '审核状态（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetHwcDeveloperMission)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/developerMission/getHwcDeveloperMission', { "typeName": flags.typeName, "category": flags.category, "parentCategory": flags.parentCategory, "oper": flags.oper, "id": flags.id, "spu": flags.spu, "checkStatus": flags.checkStatus, "page": flags.page, "pageSize": flags.pageSize, "developer": flags.developer, "auditor": flags.auditor, "managerEmpList": toArray(flags.managerEmpList, 'string'), "devTeam": toArray(flags.devTeam, 'string'), "depart": flags.depart, "createDateStart": flags.createDateStart, "createeDateEnd": flags.createeDateEnd, "auditStatus": flags.auditStatus })
    this.output(data)
  }
}
