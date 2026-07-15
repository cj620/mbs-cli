// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderLeaderDropDown extends MBSCommand {
  static description = '总监下拉列表查询：依据人员类别+公司+所属平台查询团队总监(leader)下拉列表，用于自定义客单价报表页『所有总监』多选下拉的数据源，返回总监 id/name 列表。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别/员工类型(取自页面 #orderStaus 控件)(枚举待人工确认)' }),
    companyIds: Flags.string({ description: '公司ID(列表)(取自页面 #componey 控件)(类型/枚举待人工确认)' }),
    platformIds: Flags.string({ description: '所属平台ID集合;#reserve11 为空串时传[],否则传选中平台ID(选项 value=PLATFORMID) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderLeaderDropDown)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/teamDropDown/leaderDropDown', { "employeeType": flags.employeeType, "companyIds": flags.companyIds, "platformIds": toArray(flags.platformIds, 'string') })
    this.output(data)
  }
}
