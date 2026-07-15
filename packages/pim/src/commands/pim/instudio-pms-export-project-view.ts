// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportProjectView extends MBSCommand {
  static description = '导出海外仓任务列表：导出海外仓任务列表'

  static flags = {
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    dateCodeGeq: Flags.string({ description: '日期编码GEQ（字段名推断,语义待核实）' }),
    dateCodeLeq: Flags.string({ description: '日期编码LEQ（字段名推断,语义待核实）' }),
    logisticsType: Flags.string({ description: '物流类型（字段名推断,语义待核实）' }),
    nameLike: Flags.string({ description: '名称LIKE（字段名推断,语义待核实）' }),
    nowScheduleType: Flags.string({ description: 'NOW定时类型（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    sortValue: Flags.string({ description: '排序值（字段名推断,语义待核实）' }),
    warehouseTypeId: Flags.string({ description: '仓库类型ID（字段名推断,语义待核实）' }),
    skuList: Flags.string({ description: 'SKU列表（字段名推断,语义待核实） (comma-separated)' }),
    start: Flags.integer({ description: '开始（字段名推断,语义待核实）' }),
    end: Flags.integer({ description: '结束（字段名推断,语义待核实）' }),
    createby: Flags.string({ description: 'Createby（字段名推断,语义待核实）' }),
    managerEmployeeList: Flags.string({ description: '管理员工列表（字段名推断,语义待核实） (comma-separated)' }),
    flag: Flags.boolean({ description: '标志（字段名推断,语义待核实）', allowNo: true }),
    projectIdList: Flags.string({ description: '项目ID列表（字段名推断,语义待核实） (comma-separated)' }),
    companyid: Flags.integer({ description: 'Companyid（字段名推断,语义待核实）' }),
    shopList: Flags.string({ description: '店铺列表（字段名推断,语义待核实） (comma-separated)' }),
    departFlag: Flags.integer({ description: '0销售部, 1产品部' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportProjectView)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/hwcDevelopmentProject/exportProjectView', { "currentPage": flags.currentPage, "dateCodeGeq": flags.dateCodeGeq, "dateCodeLeq": flags.dateCodeLeq, "logisticsType": flags.logisticsType, "nameLike": flags.nameLike, "nowScheduleType": flags.nowScheduleType, "pageSize": flags.pageSize, "sku": flags.sku, "sortValue": flags.sortValue, "warehouseTypeId": flags.warehouseTypeId, "skuList": toArray(flags.skuList, 'string'), "start": flags.start, "end": flags.end, "createby": flags.createby, "managerEmployeeList": toArray(flags.managerEmployeeList, 'string'), "flag": flags.flag, "projectIdList": toArray(flags.projectIdList, 'integer'), "companyid": flags.companyid, "shopList": toArray(flags.shopList, 'string'), "departFlag": flags.departFlag })
    this.output(data)
  }
}
