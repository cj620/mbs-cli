// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetShopStrategy extends MBSCommand {
  static description = '查看店铺策略：查看店铺策略'

  static flags = {
    sequenceid: Flags.string({ description: '序列ID（字段名推断,语义待核实）' }),
    platform: Flags.string({ description: '平台（字段名推断,语义待核实）' }),
    shoptype: Flags.string({ description: '店铺类型（字段名推断,语义待核实）' }),
    months: Flags.string({ description: 'Months（字段名推断,语义待核实）' }),
    normtype: Flags.string({ description: 'Normtype（字段名推断,语义待核实）' }),
    targetamount: Flags.string({ description: 'Targetamount（字段名推断,语义待核实）' }),
    content: Flags.string({ description: '内容（字段名推断,语义待核实）' }),
    oper: Flags.string({ description: '操作（字段名推断,语义待核实）' }),
    opertime: Flags.string({ description: '操作时间（字段名推断,语义待核实）' }),
    reason: Flags.string({ description: '原因（字段名推断,语义待核实）' }),
    processStatus: Flags.integer({ description: '处理状态（字段名推断,语义待核实）' }),
    strategyCategoryFirst: Flags.string({ description: '策略类目首个（字段名推断,语义待核实）' }),
    strategyCategorySecond: Flags.string({ description: '策略类目秒（字段名推断,语义待核实）' }),
    reasonCategoryFirst: Flags.string({ description: '原因类目首个（字段名推断,语义待核实）' }),
    reasonCategorySecond: Flags.string({ description: '原因类目秒（字段名推断,语义待核实）' }),
    processOper: Flags.string({ description: '处理操作（字段名推断,语义待核实）' }),
    processTime: Flags.string({ description: '处理时间（字段名推断,语义待核实）' }),
    modifiedOper: Flags.string({ description: '修改操作（字段名推断,语义待核实）' }),
    modifiedTime: Flags.string({ description: '修改时间（字段名推断,语义待核实）' }),
    shopManager: Flags.string({ description: '店铺管理（字段名推断,语义待核实）' }),
    amountCurrent: Flags.string({ description: '金额当前（字段名推断,语义待核实）' }),
    amountNext: Flags.string({ description: '金额下一个（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetShopStrategy)

    const data = await this.client.post('/yypms/pms/middlePanel/getShopStrategy', { "sequenceid": flags.sequenceid, "platform": flags.platform, "shoptype": flags.shoptype, "months": flags.months, "normtype": flags.normtype, "targetamount": flags.targetamount, "content": flags.content, "oper": flags.oper, "opertime": flags.opertime, "reason": flags.reason, "processStatus": flags.processStatus, "strategyCategoryFirst": flags.strategyCategoryFirst, "strategyCategorySecond": flags.strategyCategorySecond, "reasonCategoryFirst": flags.reasonCategoryFirst, "reasonCategorySecond": flags.reasonCategorySecond, "processOper": flags.processOper, "processTime": flags.processTime, "modifiedOper": flags.modifiedOper, "modifiedTime": flags.modifiedTime, "shopManager": flags.shopManager, "amountCurrent": flags.amountCurrent, "amountNext": flags.amountNext })
    this.output(data)
  }
}
