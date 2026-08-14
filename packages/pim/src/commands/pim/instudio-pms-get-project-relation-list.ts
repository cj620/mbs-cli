// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetProjectRelationList extends MBSCommand {
  static description = '查询项目Relation列表：查询项目Relation列表(源码无注释,按方法名推断)'

  static flags = {
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    start: Flags.integer({ description: '开始（字段名推断,语义待核实）' }),
    end: Flags.integer({ description: '结束（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetProjectRelationList)

    const data = await this.client.post('/yypms/pms/projectRelation/getProjectRelationList', { "page": flags.page, "pageSize": flags.pageSize, "start": flags.start, "end": flags.end })
    this.output(data)
  }
}
