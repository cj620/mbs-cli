// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetStyleTypePics extends MBSCommand {
  static description = '获取套图信息：获取套图信息'

  static flags = {
    queryType: Flags.string({ description: '查询类型（字段名推断,语义待核实）' }),
    level: Flags.integer({ description: '级别（字段名推断,语义待核实）' }),
    parentCategoryId: Flags.integer({ description: '父级类目ID（字段名推断,语义待核实）' }),
    keyWord: Flags.string({ description: '键词（字段名推断,语义待核实）' }),
    categoryId: Flags.integer({ description: '类目ID（字段名推断,语义待核实）' }),
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    shopNames: Flags.string({ description: '店铺名称列表（字段名推断,语义待核实） (comma-separated)' }),
    description: Flags.string({ description: '描述（字段名推断,语义待核实）' }),
    shopsSplice: Flags.string({ description: '店铺列表Splice（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    erpSku: Flags.string({ description: 'ERPSKU（字段名推断,语义待核实）' }),
    platformId: Flags.integer({ description: '平台ID（字段名推断,语义待核实）' }),
    picStyle: Flags.string({ description: '图片样式（字段名推断,语义待核实）' }),
    picQueryType: Flags.string({ description: '图片查询类型（字段名推断,语义待核实）' }),
    descriptionPics: Flags.string({ description: '描述PICS（字段名推断,语义待核实） (comma-separated)' }),
    selectTypes: Flags.string({ description: '查询Types（字段名推断,语义待核实） (comma-separated)' }),
    selectType: Flags.integer({ description: '查询类型（字段名推断,语义待核实）' }),
    operId: Flags.integer({ description: '操作ID（字段名推断,语义待核实）' }),
    publishSkuList: Flags.string({ description: '刊登SKU列表（字段名推断,语义待核实） (comma-separated)' }),
    listId: Flags.string({ description: '列表ID（字段名推断,语义待核实）' }),
    listIds: Flags.string({ description: '列表ID列表（字段名推断,语义待核实） (comma-separated)' }),
    findPropertiesBySkus: Flags.string({ description: '查询属性人SKU列表（字段名推断,语义待核实）' }),
    moneyRate: Flags.string({ description: '金额比率（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetStyleTypePics)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/aliexpressSinglepublishController/getStyleTypePics', { "queryType": flags.queryType, "level": flags.level, "parentCategoryId": flags.parentCategoryId, "keyWord": flags.keyWord, "categoryId": flags.categoryId, "shopName": flags.shopName, "shopNames": toArray(flags.shopNames, 'string'), "description": flags.description, "shopsSplice": flags.shopsSplice, "erpSpu": flags.erpSpu, "erpSku": flags.erpSku, "platformId": flags.platformId, "picStyle": flags.picStyle, "picQueryType": flags.picQueryType, "descriptionPics": toArray(flags.descriptionPics, 'string'), "selectTypes": toArray(flags.selectTypes, 'integer'), "selectType": flags.selectType, "operId": flags.operId, "publishSkuList": toArray(flags.publishSkuList, 'object'), "listId": flags.listId, "listIds": toArray(flags.listIds, 'string'), "findPropertiesBySkus": flags.findPropertiesBySkus, "moneyRate": flags.moneyRate })
    this.output(data)
  }
}
