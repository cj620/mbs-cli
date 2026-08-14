// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsPlatformId extends MBSCommand {
  static description = '按平台ID查询店铺：按平台ID查询店铺(源码无注释,按方法名推断)'

  static flags = {}

  static args = {
    platformId: Args.string({ required: true, description: '平台ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsPlatformId)

    const data = await this.client.get(`/yypms/pms/brand/getShopByPlatformId/${args.platformId}`, { params: {} })
    this.output(data)
  }
}
