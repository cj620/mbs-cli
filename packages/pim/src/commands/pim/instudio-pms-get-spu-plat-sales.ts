// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSpuPlatSales extends MBSCommand {
  static description = '获取开发项目的15天平台销量和总销量：获取开发项目的15天平台销量和总销量'

  static flags = {
    developmentProjectId: Flags.string({ description: 'Development项目ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSpuPlatSales)

    const data = await this.client.get('/yypms/pms/developmentProject/getSpuPlatSales', { params: { "developmentProjectId": flags.developmentProjectId } })
    this.output(data)
  }
}
