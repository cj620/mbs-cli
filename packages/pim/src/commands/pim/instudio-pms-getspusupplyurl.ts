// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetspusupplyurl extends MBSCommand {
  static description = '根据spu获取sku供应商链接：根据spu获取sku供应商链接'

  static flags = {
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetspusupplyurl)

    const data = await this.client.post('/yypms/pms/productImage/getspusupplyurl', {}, { params: { "spu": flags.spu } })
    this.output(data)
  }
}
