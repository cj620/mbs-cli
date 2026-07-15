// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetLazadaSinglepublishProductCategory extends MBSCommand {
  static description = '获取商品分类：获取商品分类'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    site: Flags.string({ description: '站点' }),
    categoryId: Flags.string({ description: '分类id' }),
    categoryName: Flags.string({ description: '分类名字' }),
    categoryNameAll: Flags.string({ description: '分类名字' }),
    parentCategoryId: Flags.string({ description: '父id' }),
    categoryLevel: Flags.integer({ description: '第几级' }),
    leafCategory: Flags.integer({ description: '1对应的类别是eBay叶子类别，该类别中可能会列出项目。' }),
    var: Flags.integer({ description: '1:true 0:false' }),
    createby: Flags.string({ description: 'Createby（字段名推断,语义待核实）' }),
    createtime: Flags.string({ description: '创建时间（字段名推断,语义待核实）' }),
    variationsEnabled: Flags.integer({ description: '2支持多属性' }),
    variationsEnabledCn: Flags.string({ description: 'Variations已启用中文（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetLazadaSinglepublishProductCategory)

    const data = await this.client.post('/yypms/pms/lazadaSinglepublishInfoController/getLazadaSinglepublishProductCategory', { "id": flags.id, "site": flags.site, "categoryId": flags.categoryId, "categoryName": flags.categoryName, "categoryNameAll": flags.categoryNameAll, "parentCategoryId": flags.parentCategoryId, "categoryLevel": flags.categoryLevel, "leafCategory": flags.leafCategory, "var": flags.var, "createby": flags.createby, "createtime": flags.createtime, "variationsEnabled": flags.variationsEnabled, "variationsEnabledCn": flags.variationsEnabledCn })
    this.output(data)
  }
}
