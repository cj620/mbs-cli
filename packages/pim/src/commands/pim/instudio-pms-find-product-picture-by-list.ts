// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindProductPictureByList extends MBSCommand {
  static description = '获取产品图片任务池所有产品信息：获取产品图片任务池所有产品信息'

  static flags = {
    creater: Flags.string({ description: 'Creater（字段名推断,语义待核实）' }),
    createrTime: Flags.string({ description: 'Creater时间（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    index: Flags.string({ description: '索引（字段名推断,语义待核实）' }),
    projectId: Flags.string({ description: '项目ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindProductPictureByList)

    const data = await this.client.post('/yypms/pms/productImage/findProductPictureByList', {}, { params: { "creater": flags.creater, "createrTime": flags.createrTime, "spu": flags.spu, "index": flags.index, "projectId": flags.projectId } })
    this.output(data)
  }
}
