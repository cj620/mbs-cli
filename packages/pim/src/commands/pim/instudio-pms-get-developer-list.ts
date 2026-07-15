// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
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
