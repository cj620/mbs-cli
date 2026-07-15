// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsPageOzonTemplate extends MBSCommand {
  static description = '分页查询 Ozon SPU 类目模板列表：分页查询 Ozon SPU 类目模板列表'

  static flags = {
    businessUnitId: Flags.integer({ description: '业务单位ID（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    spuLike: Flags.string({ description: 'SPULIKE（字段名推断,语义待核实）' }),
    tmpNameLike: Flags.string({ description: 'TMP名称LIKE（字段名推断,语义待核实）' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    size: Flags.integer({ description: '大小（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsPageOzonTemplate)

    const data = await this.client.post('/yypms/pms/ozonTemplate/page', { "businessUnitId": flags.businessUnitId, "spu": flags.spu, "spuLike": flags.spuLike, "tmpNameLike": flags.tmpNameLike, "page": flags.page, "size": flags.size })
    this.output(data)
  }
}
