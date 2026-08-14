// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryProductPictureByUserId2 extends MBSCommand {
  static description = '获取当前账号的图片任务-新：获取当前账号的图片任务-新'

  static flags = {
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）', required: true }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    creater: Flags.string({ description: 'Creater（字段名推断,语义待核实）' }),
    index: Flags.string({ description: '索引（字段名推断,语义待核实）' }),
    createrTime: Flags.string({ description: 'Creater时间（字段名推断,语义待核实）' }),
    state: Flags.string({ description: '状态（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryProductPictureByUserId2)

    const data = await this.client.post('/yypms/pms/productImage/queryProductPictureByUserId2', {}, { params: { "id": flags.id, "spu": flags.spu, "creater": flags.creater, "index": flags.index, "createrTime": flags.createrTime, "state": flags.state } })
    this.output(data)
  }
}
