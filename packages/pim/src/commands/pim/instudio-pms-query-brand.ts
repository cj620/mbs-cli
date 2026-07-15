// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryBrand extends MBSCommand {
  static description = '修改品牌信息：修改品牌信息'

  static flags = {
    brandStatus: Flags.string({ description: '品牌状态（字段名推断,语义待核实）' }),
    firstLevelCategoryId: Flags.string({ description: '首个级别类目ID（字段名推断,语义待核实）' }),
    name: Flags.string({ description: '名称（字段名推断,语义待核实）' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryBrand)

    const data = await this.client.post('/yypms/pms/brand/query', { "brandStatus": flags.brandStatus, "firstLevelCategoryId": flags.firstLevelCategoryId, "name": flags.name, "page": flags.page })
    this.output(data)
  }
}
