// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderTeamNumberDropDown1 extends MBSCommand {
  static description = '团队人员下拉(按集团公司)查询：按集团公司ID(groupCompanyId)、员工类型、公司/平台/组长等条件查询团队成员(员工)下拉列表。前端在创建海外仓SKU弹窗 onMounted 时分别以 groupCompanyId=1 与 groupCompanyId=33 各调一次，把返回数组分别缓存到 companyUserMap[1] / companyUserMap[33]，用于开发员(developer1/developer2)下拉选择，选项展示与取值均为成员姓名 name。'

  static flags = {
    employeeType: Flags.string({ description: '员工类型，前端固定传 "2"（枚举具体含义待人工确认）', required: true }),
    companyIds: Flags.string({ description: '公司ID列表，前端固定传 [1] (comma-separated)', required: true }),
    platformIds: Flags.string({ description: '平台ID列表，前端固定传空数组 []（不限平台） (comma-separated)' }),
    leaders: Flags.string({ description: '组长/负责人列表，前端固定传空数组 []（不限组长） (comma-separated)' }),
    groupCompanyId: Flags.string({ description: '集团公司ID。前端两次调用分别传 1 与 33（具体集团名称待人工确认）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderTeamNumberDropDown1)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/teamDropDown/teamNumberDropDown1', { "employeeType": flags.employeeType, "companyIds": toArray(flags.companyIds, 'string'), "platformIds": toArray(flags.platformIds, 'string'), "leaders": toArray(flags.leaders, 'string'), "groupCompanyId": flags.groupCompanyId })
    this.output(data)
  }
}
