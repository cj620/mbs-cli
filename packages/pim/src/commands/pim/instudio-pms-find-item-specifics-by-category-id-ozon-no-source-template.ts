// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindItemSpecificsByCategoryIdOzonNoSourceTemplate extends MBSCommand {
  static description = '根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics'

  static flags = {
    name: Flags.string({ description: '名称（字段名推断,语义待核实）' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    vtype: Flags.string({ description: 'Vtype（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    categoryid: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    parentCategoryid: Flags.string({ description: '父级类目ID（字段名推断,语义待核实）' }),
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    attributeName: Flags.string({ description: '属性名称（字段名推断,语义待核实）' }),
    searchParam: Flags.string({ description: '搜索参数（字段名推断,语义待核实）' }),
    title: Flags.string({ description: '标题（字段名推断,语义待核实）' }),
    shopname: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    empName: Flags.string({ description: 'EMP名称（字段名推断,语义待核实）' }),
    picStyle: Flags.string({ description: '图片样式（字段名推断,语义待核实）' }),
    idList: Flags.string({ description: 'ID列表（字段名推断,语义待核实） (comma-separated)' }),
    isTranslate: Flags.integer({ description: '是否翻译（字段名推断,语义待核实）' }),
    scene: Flags.string({ description: 'Scene（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindItemSpecificsByCategoryIdOzonNoSourceTemplate)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/ozonNoSourceTemplate/findItemSpecificsByCategoryId', { "name": flags.name, "site": flags.site, "vtype": flags.vtype, "spu": flags.spu, "categoryid": flags.categoryid, "parentCategoryid": flags.parentCategoryid, "id": flags.id, "attributeName": flags.attributeName, "searchParam": flags.searchParam, "title": flags.title, "shopname": flags.shopname, "empName": flags.empName, "picStyle": flags.picStyle, "idList": toArray(flags.idList, 'integer'), "isTranslate": flags.isTranslate, "scene": flags.scene })
    this.output(data)
  }
}
