// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetLeaderShop2ShopAchievements extends MBSCommand {
  static description = '店长名下店铺下拉查询(getLeaderShop2)：订单看板页中，选择销售负责人(店长)下拉后，根据所选店长(employeeList)联动查询其名下店铺列表，渲染到各 Tab 的店铺(shopName1~shopName10)下拉框。请求体还固定携带空的 bigChiefList(大酋长列表)与 platformId(平台ID列表)两个数组占位参数。'

  static flags = {
    employeeList: Flags.string({ description: '销售负责人(店长)列表。取店长下拉框(#saleLeader1~#saleLeader10)选中值按逗号split为字符串数组；未选择时为空数组[]。元素为店长标识(saleLeader值) (comma-separated)' }),
    bigChiefList: Flags.string({ description: '大酋长列表。前端固定传空数组[](占位，当前页面未赋值) (comma-separated)' }),
    platformId: Flags.string({ description: '平台ID列表。前端固定传空数组[](占位，当前页面未赋值) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetLeaderShop2ShopAchievements)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/shopAchievements/getLeaderShop2', { "employeeList": toArray(flags.employeeList, 'string'), "bigChiefList": toArray(flags.bigChiefList, 'string'), "platformId": toArray(flags.platformId, 'string') })
    this.output(data)
  }
}
