// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetOzonSinglepublishCategory extends MBSCommand {
  static description = '获取所有分类：获取所有分类'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    categoryId: Flags.string({ description: '分类id' }),
    categoryName: Flags.string({ description: '分类名字' }),
    categoryNameCN: Flags.string({ description: '分类名字' }),
    parentCategoryId: Flags.string({ description: '父id' }),
    categoryLevel: Flags.integer({ description: '第几级' }),
    categoryNameAll: Flags.string({ description: '分类名字' }),
    leafCategory: Flags.integer({ description: 'LEAF类目（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetOzonSinglepublishCategory)

    const data = await this.client.post('/yypms/pms/ozonSinglepublishInfoController/getOzonSinglepublishCategory', { "id": flags.id, "categoryId": flags.categoryId, "categoryName": flags.categoryName, "categoryNameCN": flags.categoryNameCN, "parentCategoryId": flags.parentCategoryId, "categoryLevel": flags.categoryLevel, "categoryNameAll": flags.categoryNameAll, "leafCategory": flags.leafCategory })
    this.output(data)
  }
}
