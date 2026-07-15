// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetAcceptedColors extends MBSCommand {
  static description = '获取可用颜色：获取可用颜色'

  static flags = {
    keyword: Flags.string({ description: '关键词（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetAcceptedColors)

    const data = await this.client.get('/yypms/pms/wishPublishInfo/getAcceptedColors', { params: { "keyword": flags.keyword } })
    this.output(data)
  }
}
