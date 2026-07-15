// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCheckProductTitleIsTort extends MBSCommand {
  static description = '获取品类自定义的颜色和尺码列表：获取品类自定义的颜色和尺码列表'

  static flags = {
    title: Flags.string({ description: '标题（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCheckProductTitleIsTort)

    const data = await this.client.post('/yypms/pms/product/checkProductTitleIsTort', {}, { params: { "title": flags.title } })
    this.output(data)
  }
}
