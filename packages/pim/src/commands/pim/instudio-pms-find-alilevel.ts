// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindAlilevel extends MBSCommand {
  static description = '查询ali类层级为1的类目：查询ali类层级为1的类目'

  static flags = {
    userId: Flags.string({ description: '用户ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindAlilevel)

    const data = await this.client.post('/yypms/pms/EbayOrAliexpressMessage/findAlilevel', {}, { params: { "userId": flags.userId } })
    this.output(data)
  }
}
