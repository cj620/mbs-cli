// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDeveloperInfoByShopManager extends MBSCommand {
  static description = '开发员覆盖率-按店长查询(第二级下钻)：产品刊登分析-开发覆盖率页面，点击大酋长(第一级)行展开时调用，按所选大酋长/组员(开发员)及该组员 employeeId，查询其名下各店长(shopManager)维度的刊登/覆盖率/SPU汇总/销售额占比等数据，返回店长列表用于二级表格渲染。'

  static flags = {
    bigChief: Flags.string({ description: '大酋长名称数组。来源 #bigChief 下拉选中项的 peoanme 属性(选中 option 的人名)；未选中时压入空字符串 ""，即 [""] (comma-separated)', required: true }),
    developer: Flags.string({ description: '开发员(组员)名称数组。来源 #commodity 多选(selectpicker) 的 val()，元素为 employee_name；未选则为 null (comma-separated)' }),
    employeeId: Flags.string({ description: '员工(组员)ID。取自被点击一级行下一行的 data-id(模板中 v.employeeId)，调用时经 .toString() 转为字符串', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDeveloperInfoByShopManager)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/developerTarget/getDeveloperInfoByShopManager', { "bigChief": toArray(flags.bigChief, 'string'), "developer": toArray(flags.developer, 'string'), "employeeId": flags.employeeId })
    this.output(data)
  }
}
