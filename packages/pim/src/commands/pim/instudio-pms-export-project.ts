// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportProject extends MBSCommand {
  static description = '导出项目：导出项目(源码无注释,按方法名推断)'

  static flags = {
    platformId: Flags.string({ description: '平台ID（字段名推断,语义待核实）' }),
    platformProductId: Flags.string({ description: '平台商品ID（字段名推断,语义待核实）' }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    parentCategoryId: Flags.string({ description: '父级类目ID（字段名推断,语义待核实）' }),
    commitType: Flags.string({ description: 'Commit类型（字段名推断,语义待核实）' }),
    productUrl: Flags.string({ description: '商品URL（字段名推断,语义待核实）' }),
    createdBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    createdOn: Flags.string({ description: '创建（字段名推断,语义待核实）' }),
    platformName: Flags.string({ description: '平台名称（字段名推断,语义待核实）' }),
    classificationId: Flags.string({ description: 'ClassificationID（字段名推断,语义待核实）' }),
    classificationName: Flags.string({ description: 'Classification名称（字段名推断,语义待核实）' }),
    employeeName: Flags.string({ description: '员工名称（字段名推断,语义待核实）' }),
    createdByName: Flags.string({ description: '创建人名称（字段名推断,语义待核实）' }),
    startDate: Flags.string({ description: '开始日期（字段名推断,语义待核实）' }),
    endDate: Flags.string({ description: '结束日期（字段名推断,语义待核实）' }),
    userId: Flags.string({ description: '用户ID（字段名推断,语义待核实）' }),
    platformIdUser: Flags.string({ description: '平台ID用户（字段名推断,语义待核实）' }),
    teamIdUser: Flags.string({ description: '团队ID用户（字段名推断,语义待核实）' }),
    giveUpReason: Flags.string({ description: 'GIVE上架原因（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportProject)

    const data = await this.client.post('/yypms/pms/submitProduct/exportProject', { "platformId": flags.platformId, "platformProductId": flags.platformProductId, "categoryId": flags.categoryId, "parentCategoryId": flags.parentCategoryId, "commitType": flags.commitType, "productUrl": flags.productUrl, "createdBy": flags.createdBy, "createdOn": flags.createdOn, "platformName": flags.platformName, "classificationId": flags.classificationId, "classificationName": flags.classificationName, "employeeName": flags.employeeName, "createdByName": flags.createdByName, "startDate": flags.startDate, "endDate": flags.endDate, "userId": flags.userId, "platformIdUser": flags.platformIdUser, "teamIdUser": flags.teamIdUser, "giveUpReason": flags.giveUpReason })
    this.output(data)
  }
}
