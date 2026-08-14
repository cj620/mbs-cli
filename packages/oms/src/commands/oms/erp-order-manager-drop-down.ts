// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderManagerDropDown extends MBSCommand {
  static description = '经理下拉列表查询：自定义报表(客单价分析)页头部“所有经理”下拉框的数据源接口。根据人员类别、公司、平台及已选总监(leaders)联动查询其下属经理列表，返回 {id,name} 列表用于 el-select 渲染。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别(员工类型)。取自 $("#orderStaus").val()，控件来源待人工确认' }),
    companyIds: Flags.string({ description: '公司ID(可多选)。取自 $(\'#componey\').val()，控件来源待人工确认 (comma-separated)' }),
    platformIds: Flags.string({ description: '平台ID列表。取自 $("#reserve11").val()，为空时传[]，来源控件#reserve11(所属平台下拉) (comma-separated)' }),
    leaders: Flags.string({ description: '总监ID列表(已选总监)。取自 selectdata.leaders，即“所有总监”el-select(多选)的选中 item.id 集合 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderManagerDropDown)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/teamDropDown/managerDropDown', { "employeeType": flags.employeeType, "companyIds": toArray(flags.companyIds, 'string'), "platformIds": toArray(flags.platformIds, 'string'), "leaders": toArray(flags.leaders, 'string') })
    this.output(data)
  }
}
