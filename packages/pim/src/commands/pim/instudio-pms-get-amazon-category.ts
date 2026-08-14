// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetAmazonCategory extends MBSCommand {
  static description = '获取Amazon 刊登属性：获取Amazon 刊登属性'

  static flags = {
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    attributesJson: Flags.string({ description: 'AttributesJSON（字段名推断,语义待核实）' }),
    qualificationJson: Flags.string({ description: 'QualificationJSON（字段名推断,语义待核实）' }),
    subAttributes: Flags.string({ description: '子Attributes（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetAmazonCategory)

    const data = await this.client.post('/yypms/pms/amazon/getAmazonCategory', { "shopName": flags.shopName, "categoryId": flags.categoryId, "attributesJson": flags.attributesJson, "qualificationJson": flags.qualificationJson, "subAttributes": flags.subAttributes })
    this.output(data)
  }
}
