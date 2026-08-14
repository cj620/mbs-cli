// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSmtSinglepublishShopCategory extends MBSCommand {
  static description = '获取店铺分类：获取店铺分类'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    shopname: Flags.string({ description: '店铺' }),
    categoryId: Flags.string({ description: '分类id' }),
    categoryName: Flags.string({ description: '分类名字' }),
    parentCategoryId: Flags.string({ description: '父id' }),
    categoryLevel: Flags.integer({ description: '第几级' }),
    leafCategory: Flags.integer({ description: '1对应的类别是eBay叶子类别，该类别中可能会列出项目。' }),
    ordernum: Flags.integer({ description: '排序' }),
    createby: Flags.string({ description: 'Createby（字段名推断,语义待核实）' }),
    createtime: Flags.string({ description: '创建时间（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSmtSinglepublishShopCategory)

    const data = await this.client.post('/yypms/pms/smtSinglepublishController/getSmtSinglepublishShopCategory', { "id": flags.id, "shopname": flags.shopname, "categoryId": flags.categoryId, "categoryName": flags.categoryName, "parentCategoryId": flags.parentCategoryId, "categoryLevel": flags.categoryLevel, "leafCategory": flags.leafCategory, "ordernum": flags.ordernum, "createby": flags.createby, "createtime": flags.createtime })
    this.output(data)
  }
}
