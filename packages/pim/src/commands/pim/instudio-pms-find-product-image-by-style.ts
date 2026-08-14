// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindProductImageByStyle extends MBSCommand {
  static description = '查询指定风格SPU图：查询指定风格SPU图'

  static flags = {
    style: Flags.string({ description: '样式（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindProductImageByStyle)

    const data = await this.client.post('/yypms/pms/spu/findProductImageByStyle', {}, { params: { "style": flags.style, "spu": flags.spu } })
    this.output(data)
  }
}
