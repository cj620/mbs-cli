// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetLeaderShop4 extends MBSCommand {
  static description = '根据平台/大酋长/组员查询店铺列表(getLeaderShop4)：销售报表筛选区联动接口：用户选择平台(可叠加大酋长、组员)后，后端返回对应可选店铺名称列表，前端用于渲染 #shoptypeid 店铺下拉框的 <option>。'

  static flags = {
    platformIds: Flags.string({ description: '平台ID集合，取自平台多选框 #reserve11 的值（多选逗号拼接字符串）' }),
    employeeList: Flags.string({ description: '组员列表，取自 #employeeList 组员多选框；未选择时传空数组 [] (comma-separated)' }),
    bigChiefList: Flags.string({ description: '大酋长列表，取自 #shopManager 大酋长多选框；未选择时传空数组 [] (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetLeaderShop4)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getLeaderShop4', { "platformIds": flags.platformIds, "employeeList": toArray(flags.employeeList, 'string'), "bigChiefList": toArray(flags.bigChiefList, 'string') })
    this.output(data)
  }
}
