// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetCustomerServiceShop extends MBSCommand {
  static description = '客服(店长/组员)店铺下拉查询：运营监控报表页面中，根据已选择的「店长(大酋长)」与「组员(店铺经理)」联动查询其名下店铺列表，返回店铺ID与店铺名称，用于渲染「店铺」多选下拉框(#shopList)。店长/组员下拉变更时(onchange)触发。'

  static flags = {
    bigChiefList: Flags.string({ description: '店长(大酋长)ID列表。来源控件 #leaderList(店长多选下拉)，option value 取 value.id。为空时传空数组 [] (comma-separated)' }),
    shopManagerList: Flags.string({ description: '组员(店铺经理/客服)名称列表。来源控件 #customberList(组员多选下拉)，option value 取 value.name。为空时传空数组 [] (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetCustomerServiceShop)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpmonitor/erpmonitor/smtShopKpi/getCustomerServiceShop', { "bigChiefList": toArray(flags.bigChiefList, 'string'), "shopManagerList": toArray(flags.shopManagerList, 'string') })
    this.output(data)
  }
}
