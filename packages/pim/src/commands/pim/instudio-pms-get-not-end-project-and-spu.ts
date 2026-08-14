// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetNotEndProjectAndSpu extends MBSCommand {
  static description = '获取未结束的项目名称和spu：获取未结束的项目名称和spu'

  static flags = {
    fullProjectName: Flags.string({ description: '完整项目名称（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetNotEndProjectAndSpu)

    const data = await this.client.post('/yypms/pms/developmentProject/getNotEndProjectAndSpu', {}, { params: { "fullProjectName": flags.fullProjectName } })
    this.output(data)
  }
}
