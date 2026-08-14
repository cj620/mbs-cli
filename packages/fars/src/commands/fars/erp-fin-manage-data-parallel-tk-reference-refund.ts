// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelTkReferenceRefund extends MBSCommand {
  static description = '凭证退款参考(账单反查表)查询：TikTok 平台「凭证退款参考」页面账单反查表分页查询：按流水号、店铺名称、所属公司过滤，返回退款金额/冲回金额/差值、凭证字、辅助核算、应收账款等账单反查行数据及总数。'

  static flags = {
    type: Flags.string({ description: '账单反查类型，URL 固定传 1', required: true }),
    lid: Flags.string({ description: '流水号，来源搜索框(Input)，多个以空格分隔' }),
    shopName: Flags.string({ description: '店铺名称，来源搜索框(Input)' }),
    companyId: Flags.string({ description: '所属公司，来源下拉(Select)。枚举：1=胤元;33=启元' }),
    pageSize: Flags.string({ description: '每页条数，来源分页器，默认100，可选100/200/300/400', required: true }),
    page: Flags.string({ description: '当前页码，来源分页器，默认1', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelTkReferenceRefund)

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/parallelTkReferenceRefund', { "lid": flags.lid, "shopName": flags.shopName, "companyId": flags.companyId, "pageSize": flags.pageSize, "page": flags.page }, { params: { "type": flags.type } })
    this.output(data)
  }
}
