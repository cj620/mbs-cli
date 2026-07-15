// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderTeamNumberDropDown4 extends MBSCommand {
  static description = '根据人员获取下面组员的店铺(店铺下拉)：团队下拉组件数据源：根据店长(shopManagers)与平台(platform/平台名称)筛选在营店铺，返回店铺ID与店铺名称列表，供前端“店铺”下拉选择器渲染 label/value。'

  static flags = {
    shopManagers: Flags.string({ description: '店长列表(店长姓名/工号)。前端示例固定传 [\'\']；后端对应 DB_SHOP.shopmanager IN (...)，总经办账号会改用岗位99人员 (comma-separated)' }),
    platform: Flags.string({ description: '平台名称列表，来源平台多选控件 form.platform 的 PLATFORMNAME。注：后端过滤字段为 platformIds(对应 DB_SHOP.RESERVE11)，前端示例传平台名称(待人工确认) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderTeamNumberDropDown4)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/teamDropDown/teamNumberDropDown4', { "shopManagers": toArray(flags.shopManagers, 'string'), "platform": toArray(flags.platform, 'string') })
    this.output(data)
  }
}
