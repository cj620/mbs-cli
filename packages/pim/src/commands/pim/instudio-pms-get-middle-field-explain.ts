// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetMiddleFieldExplain extends MBSCommand {
  static description = '获取中台报表字段解释：获取中台报表字段解释'

  static flags = {
    type: Flags.string({ description: '类型（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetMiddleFieldExplain)

    const data = await this.client.get('/yypms/pms/middlePanel/getMiddleFieldExplain', { params: { "type": flags.type } })
    this.output(data)
  }
}
