// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShopManagerDropDown extends MBSCommand {
  static description = '店长下拉列表查询：按总监/经理/主管、公司、平台等条件查询店长(店铺销售负责人 sale_leader)下拉选项列表，后端将总监/经理/主管转换为名下店长并按公司/平台/登录人组员过滤后去重返回，供前端店长下拉控件使用。'

  static flags = {
    employeeType: Flags.string({ description: '员工类型，apis.js 默认"1"；枚举具体含义待人工确认。本接口后端未直接用于过滤，仍随请求体提交' }),
    companyIds: Flags.string({ description: '公司ID列表，按公司过滤店长(company_id)，默认[] (comma-separated)' }),
    platformIds: Flags.string({ description: '平台ID列表(cms_platform.mabangid)，按平台过滤店长，默认[]，来源平台多选控件 (comma-separated)' }),
    leaders: Flags.string({ description: '总监(员工ID)列表，后端转换为名下店长，默认[]，来源总监下拉 (comma-separated)' }),
    managers: Flags.string({ description: '经理(员工ID)列表，后端转换为名下店长，默认[]，来源经理下拉 (comma-separated)' }),
    littleLeaders: Flags.string({ description: '主管(员工ID)列表，后端 leaderToShopManager 转换为名下店长(report/mabang 等页面传入)，来源主管下拉 (comma-separated)' }),
    companyId: Flags.string({ description: '公司ID(兼容字段)，后端非空时并入 companyIds，来源公司选择控件 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShopManagerDropDown)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/teamDropDown/shopManagerDropDown', { "employeeType": flags.employeeType, "companyIds": toArray(flags.companyIds, 'string'), "platformIds": toArray(flags.platformIds, 'string'), "leaders": toArray(flags.leaders, 'string'), "managers": toArray(flags.managers, 'string'), "littleLeaders": toArray(flags.littleLeaders, 'string'), "companyId": toArray(flags.companyId, 'string') })
    this.output(data)
  }
}
