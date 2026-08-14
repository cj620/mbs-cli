// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetDeveloperList extends MBSCommand {
  static description = '销售人员下拉列表：销售人员下拉列表'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetDeveloperList)

    const data = await this.client.post('/yypms/pms/submitProduct/getDeveloperList', {})
    this.output(data)
  }
}
