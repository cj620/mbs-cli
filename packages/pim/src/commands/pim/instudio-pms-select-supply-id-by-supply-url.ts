// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsSelectSupplyIdBySupplyUrl extends MBSCommand {
  static description = '已被占用的供货链接 不让再次开发：已被占用的供货链接 不让再次开发'

  static flags = {
    setWangWangAccounts: Flags.string({ description: 'SETWANGWANGAccounts（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsSelectSupplyIdBySupplyUrl)

    const data = await this.client.post('/yypms/pms/AllMessage/selectSupplyIdBySupplyUrl', {}, { params: { "setWangWangAccounts": flags.setWangWangAccounts } })
    this.output(data)
  }
}
