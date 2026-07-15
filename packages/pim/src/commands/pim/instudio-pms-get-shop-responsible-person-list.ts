// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetShopResponsiblePersonList extends MBSCommand {
  static description = '获取店铺责任人信息：获取店铺责任人信息'

  static flags = {
    mainShop: Flags.string({ description: '主店铺（字段名推断,语义待核实）' }),
    siteList: Flags.string({ description: '站点列表（字段名推断,语义待核实） (comma-separated)' }),
    syncType: Flags.string({ description: '同步类型：' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetShopResponsiblePersonList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/tiktokSinglepublishGlobalController/getShopResponsiblePersonList', { "mainShop": flags.mainShop, "siteList": toArray(flags.siteList, 'string'), "syncType": flags.syncType })
    this.output(data)
  }
}
