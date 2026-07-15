// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsVariationThemeConfigInfo extends MBSCommand {
  static description = '根据选中的值, 没有选中的值就根据requestId 查询variationTheme字段的配置信息：根据选中的值, 没有选中的值就根据requestId 查询variationTheme字段的配置信息'

  static flags = {
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    mainCategory: Flags.string({ description: '主类目（字段名推断,语义待核实）' }),
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    productType: Flags.string({ description: '商品类型（字段名推断,语义待核实）' }),
    requiredField: Flags.string({ description: '必填字段（字段名推断,语义待核实）' }),
    color: Flags.string({ description: '颜色（字段名推断,语义待核实）' }),
    size: Flags.string({ description: '大小（字段名推断,语义待核实）' }),
    requiredFields: Flags.string({ description: '必填字段（字段名推断,语义待核实） (comma-separated)' }),
    productTypeId: Flags.integer({ description: '类型id' }),
    variationTheme: Flags.string({ description: 'SIZE_NAME' }),
    requestId: Flags.string({ description: '刊登请求的记录id' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsVariationThemeConfigInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/amazon/new/get/variationThemeConfigInfo', { "site": flags.site, "mainCategory": flags.mainCategory, "shopName": flags.shopName, "productType": flags.productType, "requiredField": flags.requiredField, "color": flags.color, "size": flags.size, "requiredFields": toArray(flags.requiredFields, 'string'), "productTypeId": flags.productTypeId, "variationTheme": flags.variationTheme, "requestId": flags.requestId })
    this.output(data)
  }
}
