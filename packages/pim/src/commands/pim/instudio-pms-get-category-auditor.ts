// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetCategoryAuditor extends MBSCommand {
  static description = '查询类目Auditor：查询类目Auditor(源码无注释,按方法名推断)'

  static flags = {
    categoryId: Flags.string({ description: '一级分类id' }),
    employeeId: Flags.string({ description: '审核人' }),
    companyId: Flags.integer({ description: '公司ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetCategoryAuditor)

    const data = await this.client.post('/yypms/pms/AllMessage/getCategoryAuditor', { "categoryId": flags.categoryId, "employeeId": flags.employeeId, "companyId": flags.companyId })
    this.output(data)
  }
}
