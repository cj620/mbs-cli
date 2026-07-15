// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetAttributesByType extends MBSCommand {
  static description = '模糊查询wish属性值：模糊查询wish属性值'

  static flags = {
    type: Flags.string({ description: '类型（字段名推断,语义待核实）', required: true }),
    str: Flags.string({ description: '字符串（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetAttributesByType)

    const data = await this.client.post('/yypms/pms/wishPublishInfo/getAttributesByType', {}, { params: { "type": flags.type, "str": flags.str } })
    this.output(data)
  }
}
