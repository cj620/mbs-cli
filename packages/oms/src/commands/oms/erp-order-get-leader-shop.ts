// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetLeaderShop extends MBSCommand {
  static description = '大酋长/组员店铺列表查询(getLeaderShop)：店铺业绩页的「店铺」下拉联动接口：根据所选平台、大酋长(组长)、组员(员工)，查询其名下可选店铺集合，用于填充 #shop 多选下拉。平台/大酋长/组员任一为空时传空数组。'

  static flags = {
    platformId: Flags.string({ description: '平台ID列表(来源 #platform 下拉 val().split(\',\')；未选为[]) (comma-separated)' }),
    employeeList: Flags.string({ description: '组员(员工)列表(来源 #groupMember 多选，元素为员工姓名 employee_name；未选为[]) (comma-separated)' }),
    bigChiefList: Flags.string({ description: '大酋长(组长)列表(来源 #leader 多选，元素为大酋长ID；未选为[]) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetLeaderShop)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/shopAchievements/getLeaderShop', { "platformId": toArray(flags.platformId, 'string'), "employeeList": toArray(flags.employeeList, 'string'), "bigChiefList": toArray(flags.bigChiefList, 'string') })
    this.output(data)
  }
}
