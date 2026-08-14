// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetWalmartShopList extends MBSCommand {
  static description = '获取walmart店铺下拉：获取walmart店铺下拉'

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
    keyWord: Flags.string({ description: '键词（字段名推断,语义待核实）' }),
    autoPublishFlag: Flags.integer({ description: '自动刊登标志（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetWalmartShopList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/walmart/auto/getWalmartShopList', { "pageSize": flags.pageSize, "currentPage": flags.currentPage, "startIndex": flags.startIndex, "exportFlag": flags.exportFlag, "teamManger": toArray(flags.teamManger, 'string'), "directorList": toArray(flags.directorList, 'integer'), "managerList": toArray(flags.managerList, 'integer'), "shopManagerList": toArray(flags.shopManagerList, 'integer'), "siteList": toArray(flags.siteList, 'string'), "shopNameList": toArray(flags.shopNameList, 'string'), "keyWord": flags.keyWord, "autoPublishFlag": flags.autoPublishFlag })
    this.output(data)
  }
}
