// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsRequestIdGetPublishRequestInfo extends MBSCommand {
  static description = '美客多获取单品刊登信息：美客多获取单品刊登信息'

  static flags = {}

  static args = {
    requestId: Args.string({ required: true, description: '请求ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsRequestIdGetPublishRequestInfo)

    const data = await this.client.get(`/yypms/pms/mercadolibre/getPublishRequestInfo/${args.requestId}`, { params: {} })
    this.output(data)
  }
}
