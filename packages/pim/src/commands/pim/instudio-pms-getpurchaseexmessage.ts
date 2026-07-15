// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetpurchaseexmessage extends MBSCommand {
  static description = '获取sku默认供应商：获取sku默认供应商'

  static flags = {
    userid: Flags.integer({ description: 'Userid（字段名推断,语义待核实）', required: true }),
    callback: Flags.string({ description: '回调' }),
    i: Flags.string({ description: 'I' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetpurchaseexmessage)

    const data = await this.client.post('/yypms/pms/purchaseException/getpurchaseexmessage', {}, { params: { "userid": flags.userid, "callback": flags.callback, "i": flags.i } })
    this.output(data)
  }
}
