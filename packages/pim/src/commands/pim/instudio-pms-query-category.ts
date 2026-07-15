// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryCategory extends MBSCommand {
  static description = '查询全部父分类（index：页码）：查询全部父分类（index：页码）'

  static flags = {
    index: Flags.string({ description: '索引（字段名推断,语义待核实）', required: true }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）', required: true }),
    parentCategoryId: Flags.string({ description: '父级类目ID（字段名推断,语义待核实）', required: true }),
    userId: Flags.string({ description: '用户ID（字段名推断,语义待核实）', required: true }),
    firstCategory: Flags.string({ description: '首个类目（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryCategory)

    const data = await this.client.post('/yypms/pms/category/query', {}, { params: { "index": flags.index, "category_id": flags.categoryId, "parent_category_id": flags.parentCategoryId, "user_id": flags.userId, "first_category": flags.firstCategory } })
    this.output(data)
  }
}
