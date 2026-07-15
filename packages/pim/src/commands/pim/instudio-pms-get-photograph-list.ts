// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetPhotographList extends MBSCommand {
  static description = '分页获取拍照任务池数据：分页获取拍照任务池数据'

  static flags = {
    creater: Flags.string({ description: 'Creater（字段名推断,语义待核实）' }),
    createrTime: Flags.string({ description: 'Creater时间（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    index: Flags.string({ description: '索引（字段名推断,语义待核实）' }),
    projectId: Flags.string({ description: '项目ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetPhotographList)

    const data = await this.client.post('/yypms/pms/ProductPhotographController/getPhotographList', {}, { params: { "creater": flags.creater, "createrTime": flags.createrTime, "spu": flags.spu, "index": flags.index, "projectId": flags.projectId } })
    this.output(data)
  }
}
