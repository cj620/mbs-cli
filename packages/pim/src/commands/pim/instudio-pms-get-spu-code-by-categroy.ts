// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSpuCodeByCategroy extends MBSCommand {
  static description = '按Categroy查询SPU编码：按Categroy查询SPU编码(源码无注释,按方法名推断)'

  static flags = {
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSpuCodeByCategroy)

    const data = await this.client.post('/yypms/pms/category/getSpuCodeByCategroy', {}, { params: { "id": flags.id } })
    this.output(data)
  }
}
