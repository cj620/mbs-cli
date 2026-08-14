// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetExceptionListOld extends MBSCommand {
  static description = '采购异常列表：采购异常列表'

  static flags = {
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    status: Flags.integer({ description: '状态（字段名推断,语义待核实）' }),
    msgType: Flags.integer({ description: '消息类型（字段名推断,语义待核实）' }),
    userId: Flags.integer({ description: '用户ID（字段名推断,语义待核实）' }),
    flag: Flags.string({ description: '标志（字段名推断,语义待核实）' }),
    startDate: Flags.string({ description: '开始日期（字段名推断,语义待核实）' }),
    endDate: Flags.string({ description: '结束日期（字段名推断,语义待核实）' }),
    developer: Flags.string({ description: '开发者（字段名推断,语义待核实）' }),
    buyer: Flags.string({ description: '买家（字段名推断,语义待核实）' }),
    manageEmployeeNames: Flags.string({ description: '管理员工名称列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetExceptionListOld)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/purchaseException/getExceptionListOld', { "sku": flags.sku, "status": flags.status, "msgType": flags.msgType, "userId": flags.userId, "flag": flags.flag, "startDate": flags.startDate, "endDate": flags.endDate, "developer": flags.developer, "buyer": flags.buyer, "manageEmployeeNames": toArray(flags.manageEmployeeNames, 'string') })
    this.output(data)
  }
}
