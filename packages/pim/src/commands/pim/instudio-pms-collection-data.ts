// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCollectionData extends MBSCommand {
  static description = '数据采集, 根据listing url 采集数据：数据采集, 根据listing url 采集数据'

  static flags = {
    url: Flags.string({ description: 'URL（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCollectionData)

    const data = await this.client.get('/yypms/pms/amazon/collectionData', { params: { "url": flags.url } })
    this.output(data)
  }
}
