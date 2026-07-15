// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelTkReferenceProvision extends MBSCommand {
  static description = 'TikTok 凭证计提参考(账单反查表)查询：TikTok 凭证计提参考页面的列表查询：按流水号 / 店铺名称 / 所属公司及分页条件，反查并返回各店铺平台费、物流费的计提/冲销金额、差值，以及借贷方科目（分析账户、辅助核算、科目编号、币种、金额）和凭证字/凭证编号等明细，供凭证计提参考。type=1 为固定查询类型。'

  static flags = {
    type: Flags.string({ description: 'URL 查询参数（固定 type=1，凭证计提参考查询类型）', required: true }),
    lid: Flags.string({ description: '流水号（多个以空格分隔；来源：Header「流水号」输入框）' }),
    shopName: Flags.string({ description: '店铺名称（来源：Header「店铺名称」输入框）' }),
    companyId: Flags.string({ description: '所属公司。枚举：1=胤元；33=启元（来源：Header「所属公司」下拉）' }),
    pageSize: Flags.string({ description: '每页条数（默认 100，可选 100/200/300/400）', required: true }),
    page: Flags.string({ description: '当前页码', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelTkReferenceProvision)

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/parallelTkReferenceProvision', { "type": flags.type, "lid": flags.lid, "shopName": flags.shopName, "companyId": flags.companyId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
