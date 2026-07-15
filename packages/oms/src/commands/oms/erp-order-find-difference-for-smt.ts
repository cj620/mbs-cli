// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDifferenceForSmt extends MBSCommand {
  static description = 'SMT联盟费差异明细查询：日销报表「站内推广费」明细钻取页：当平台为 SpeedMaster/SMT(platformIds=10/138) 且员工类型≠4 时跳转本页，按单日(oneDay)分页查询联盟费差异明细，返回交易单号、店铺、币种、联盟费、汇率、店长、费用时间等列。'

  static flags = {
    oneDay: Flags.string({ description: '费用日期(单日)，来源URL查询参数 oneDay' }),
    pageSize: Flags.string({ description: '每页条数，页面固定为50', required: true }),
    page: Flags.string({ description: '当前页码，从1开始；翻页时由分页 onCurrentChange(index) 传入', required: true }),
    platformIds: Flags.string({ description: '平台ID(站内推广费平台标识)，来源 localStorage params；取值 10(SpeedMaster)/138(SMT) 时进入本页' }),
    employeeType: Flags.string({ description: '员工类型，来源 localStorage params；上游判定 !==\'4\' 才进入本页' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDifferenceForSmt)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/findDifferenceForSmt', { "oneDay": flags.oneDay, "pageSize": flags.pageSize, "page": flags.page, "platformIds": flags.platformIds, "employeeType": flags.employeeType })
    this.output(data)
  }
}
