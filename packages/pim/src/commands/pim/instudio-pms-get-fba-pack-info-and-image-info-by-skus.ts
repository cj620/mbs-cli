// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetFbaPackInfoAndImageInfoBySkus extends MBSCommand {
  static description = '按SKU列表查询FBA打包信息图片信息：按SKU列表查询FBA打包信息图片信息(源码无注释,按方法名推断)'

  static flags = {
    skus: Flags.string({ description: 'SKU列表（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetFbaPackInfoAndImageInfoBySkus)

    const data = await this.client.post('/yypms/pms/product/getFbaPackInfoAndImageInfoBySkus', {}, { params: { "skus": flags.skus } })
    this.output(data)
  }
}
