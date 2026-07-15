// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSchemaByRequestId extends MBSCommand {
  static description = '获取产品类型列表（直接读取所有的产品类型）：获取产品类型列表（直接读取所有的产品类型）'

  static flags = {
    requestId: Flags.string({ description: '请求ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSchemaByRequestId)

    const data = await this.client.get('/yypms/pms/amazon/new/getSchemaByRequestId', { params: { "requestId": flags.requestId } })
    this.output(data)
  }
}
