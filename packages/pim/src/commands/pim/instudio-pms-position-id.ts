// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsPositionId extends MBSCommand {
  static description = '根据职位获取人员：根据职位获取人员'

  static flags = {}

  static args = {
    positionId: Args.string({ required: true, description: '位置ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsPositionId)

    const data = await this.client.get(`/yypms/pms/spu/getEmpByPositionId/${args.positionId}`, { params: {} })
    this.output(data)
  }
}
