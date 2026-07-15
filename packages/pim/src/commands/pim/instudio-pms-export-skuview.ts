// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportSkuview extends MBSCommand {
  static description = '导出海外仓任务列表：导出海外仓任务列表'

  static flags = {
    chiefName: Flags.string({ description: '主管名称（字段名推断,语义待核实）', required: true }),
    orderBy: Flags.string({ description: '排序（字段名推断,语义待核实）', required: true }),
    productProperty: Flags.string({ description: '商品属性（字段名推断,语义待核实）', required: true }),
    searchFinallyExressEndTime: Flags.string({ description: '搜索FinallyExress结束时间（字段名推断,语义待核实）', required: true }),
    searchFinallyExressStartTime: Flags.string({ description: '搜索FinallyExress开始时间（字段名推断,语义待核实）', required: true }),
    searchSku: Flags.string({ description: '搜索SKU（字段名推断,语义待核实）', required: true }),
    teamName: Flags.string({ description: '团队名称（字段名推断,语义待核实）', required: true }),
    skuAddStartTime: Flags.string({ description: 'SKU新增开始时间（字段名推断,语义待核实）', required: true }),
    skuAddEndTime: Flags.string({ description: 'SKU新增结束时间（字段名推断,语义待核实）', required: true }),
    oper4: Flags.string({ description: '操作4（字段名推断,语义待核实）', required: true }),
    onTheWayStatus: Flags.string({ description: 'WAY状态（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportSkuview)

    const data = await this.client.post('/yypms/pms/hwcDevelopmentProject/exportSkuview', {}, { params: { "chiefName": flags.chiefName, "orderBy": flags.orderBy, "productProperty": flags.productProperty, "searchFinallyExressEndTime": flags.searchFinallyExressEndTime, "searchFinallyExressStartTime": flags.searchFinallyExressStartTime, "searchSku": flags.searchSku, "teamName": flags.teamName, "skuAddStartTime": flags.skuAddStartTime, "skuAddEndTime": flags.skuAddEndTime, "oper4": flags.oper4, "onTheWayStatus": flags.onTheWayStatus } })
    this.output(data)
  }
}
