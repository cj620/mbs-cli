// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetShopManufacturersList extends MBSCommand {
  static description = '获取店铺制造商信息：获取店铺制造商信息'

  static flags = {
    mainShop: Flags.string({ description: '主店铺（字段名推断,语义待核实）' }),
    siteList: Flags.string({ description: '站点列表（字段名推断,语义待核实） (comma-separated)' }),
    syncType: Flags.string({ description: '同步类型：' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetShopManufacturersList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/tiktokSinglepublishGlobalController/getShopManufacturersList', { "mainShop": flags.mainShop, "siteList": toArray(flags.siteList, 'string'), "syncType": flags.syncType })
    this.output(data)
  }
}
