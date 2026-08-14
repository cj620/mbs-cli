// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCheck extends MBSCommand {
  static description = '检查是否包含钓鱼词和侵权词：检查是否包含钓鱼词和侵权词'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCheck)

    const data = await this.client.post('/yypms/pms/infringing/prohibited/word/check', {})
    this.output(data)
  }
}
