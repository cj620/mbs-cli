// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsValidateSku extends MBSCommand {
  static description = '销售人员收到侵权任务列表：销售人员收到侵权任务列表'

  static flags = {
    flag: Flags.string({ description: '标志（字段名推断,语义待核实）', required: true }),
    spuOrSku: Flags.string({ description: 'SPUSKU（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsValidateSku)

    const data = await this.client.post('/yypms/pms/productTort/validateSKU', {}, { params: { "flag": flags.flag, "spuOrSku": flags.spuOrSku } })
    this.output(data)
  }
}
