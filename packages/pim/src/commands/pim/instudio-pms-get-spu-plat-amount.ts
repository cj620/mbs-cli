// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSpuPlatAmount extends MBSCommand {
  static description = '获取开发项目的15天平台销售额和总销售额：获取开发项目的15天平台销售额和总销售额'

  static flags = {
    developmentProjectId: Flags.string({ description: 'Development项目ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSpuPlatAmount)

    const data = await this.client.get('/yypms/pms/developmentProject/getSpuPlatAmount', { params: { "developmentProjectId": flags.developmentProjectId } })
    this.output(data)
  }
}
