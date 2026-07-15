// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetYandexShopConfig extends MBSCommand {
  static description = 'yandex店铺配置列表：yandex店铺配置列表'

  static flags = {
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    exportFlag: Flags.integer({ description: '导出标志（字段名推断,语义待核实）' }),
    teamManger: Flags.string({ description: '团队Manger（字段名推断,语义待核实） (comma-separated)' }),
    directorList: Flags.string({ description: '总监 (comma-separated)' }),
    managerList: Flags.string({ description: '经理 (comma-separated)' }),
    shopManagerList: Flags.string({ description: '店长 (comma-separated)' }),
    siteList: Flags.string({ description: '站点 (comma-separated)' }),
    shopNameList: Flags.string({ description: '店铺 (comma-separated)' }),
    autoPublishFlag: Flags.integer({ description: '自动刊登标志（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetYandexShopConfig)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/yandexPublish/getYandexShopConfig', { "pageSize": flags.pageSize, "currentPage": flags.currentPage, "startIndex": flags.startIndex, "exportFlag": flags.exportFlag, "teamManger": toArray(flags.teamManger, 'string'), "directorList": toArray(flags.directorList, 'integer'), "managerList": toArray(flags.managerList, 'integer'), "shopManagerList": toArray(flags.shopManagerList, 'integer'), "siteList": toArray(flags.siteList, 'string'), "shopNameList": toArray(flags.shopNameList, 'string'), "autoPublishFlag": flags.autoPublishFlag })
    this.output(data)
  }
}
