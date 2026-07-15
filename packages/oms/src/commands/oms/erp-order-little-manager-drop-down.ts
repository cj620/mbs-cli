// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderLittleManagerDropDown extends MBSCommand {
  static description = '主管(小经理)下拉列表查询：人销售报表页面顶部筛选区的「主管」下拉框数据源。根据所选人员类别(订单/发货时间业绩)、公司、平台、总监、经理等上级条件，联动查询其下属主管(小经理)列表，返回 {id,name} 数组供 el-select 渲染主管选项。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别(业绩类型)，来源控件 #orderStaus。1=订单时间业绩;3=发货时间业绩' }),
    companyIds: Flags.string({ description: '公司ID列表。公司下拉单值包装为数组(selectdata.company ? [company] : [])，元素为 companyid (comma-separated)' }),
    platformIds: Flags.string({ description: '平台ID列表。来源 #reserve11，无值时传 []，元素为平台 PLATFORMID (comma-separated)' }),
    leaders: Flags.string({ description: '总监ID列表(上级总监筛选)，来源总监下拉 v-model=leaders，元素为 leaderslist.id (comma-separated)' }),
    managers: Flags.string({ description: '经理ID列表(上级经理筛选)，来源经理下拉 v-model=manager，元素为 managerlist.id (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderLittleManagerDropDown)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/teamDropDown/littleManagerDropDown', { "employeeType": flags.employeeType, "companyIds": toArray(flags.companyIds, 'string'), "platformIds": toArray(flags.platformIds, 'string'), "leaders": toArray(flags.leaders, 'string'), "managers": toArray(flags.managers, 'string') })
    this.output(data)
  }
}
