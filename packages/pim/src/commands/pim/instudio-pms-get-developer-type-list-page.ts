// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetDeveloperTypeListPage extends MBSCommand {
  static description = '获取开发分类表分页：获取开发分类表分页'

  static flags = {
    classificationId: Flags.integer({ description: 'ClassificationID（字段名推断,语义待核实）' }),
    classificationName: Flags.string({ description: 'Classification名称（字段名推断,语义待核实）' }),
    description: Flags.string({ description: '描述（字段名推断,语义待核实）' }),
    employeeId: Flags.integer({ description: '员工ID（字段名推断,语义待核实）' }),
    createdBy: Flags.integer({ description: '创建人（字段名推断,语义待核实）' }),
    createdOn: Flags.string({ description: '创建（字段名推断,语义待核实）' }),
    developName: Flags.string({ description: 'Develop名称（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetDeveloperTypeListPage)

    const data = await this.client.post('/yypms/pms/submitProduct/getDeveloperTypeListPage', { "classificationId": flags.classificationId, "classificationName": flags.classificationName, "description": flags.description, "employeeId": flags.employeeId, "createdBy": flags.createdBy, "createdOn": flags.createdOn, "developName": flags.developName })
    this.output(data)
  }
}
