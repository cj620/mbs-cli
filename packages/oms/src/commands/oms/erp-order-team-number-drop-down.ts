// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderTeamNumberDropDown extends MBSCommand {
  static description = '团队人员(下拉)查询：按员工类型/公司/平台/组长/主管等条件查询团队人员名单，返回人员对象数组。前端在刊登检测(type=checkPublish)模式下，用其 name 字段填充创建人下拉框(createdBy)的可选项。'

  static flags = {
    employeeType: Flags.string({ description: '员工类型(前端固定传空字符串,来源:代码常量,无控件)' }),
    companyId: Flags.string({ description: '公司ID列表(前端固定传空数组,来源:代码常量,无控件) (comma-separated)' }),
    platformIds: Flags.string({ description: '平台ID列表(前端固定传空数组,来源:代码常量,无控件) (comma-separated)' }),
    leaders: Flags.string({ description: '组长列表(前端固定传空数组,来源:代码常量,无控件) (comma-separated)' }),
    managers: Flags.string({ description: '主管列表(前端固定传空数组,来源:代码常量,无控件) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderTeamNumberDropDown)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/teamDropDown/teamNumberDropDown', { "employeeType": flags.employeeType, "companyId": toArray(flags.companyId, 'string'), "platformIds": toArray(flags.platformIds, 'string'), "leaders": toArray(flags.leaders, 'string'), "managers": toArray(flags.managers, 'string') })
    this.output(data)
  }
}
