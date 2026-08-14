// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelTkQueryLianlianFetcher extends MBSCommand {
  static description = '连连反查表(明细)查询：TikTok 平台「连连反查表」明细分页查询：以流水号、店铺名称(拆分后/原)、流水时间区间、所属公司为筛选条件，返回连连流水反查明细列表(流水id/币种/金额/店铺/创建时间/匹配状态/公司)及总记录数。'

  static flags = {
    lid: Flags.string({ description: '流水号(对应「流水号」输入框，多个空格分隔)' }),
    shopName: Flags.string({ description: '店铺名称(拆分后)' }),
    shopNameOld: Flags.string({ description: '店铺名称(原)' }),
    shortCreateDate: Flags.string({ description: '流水时间-起始(「流水时间」日期区间起点)' }),
    longCreateDate: Flags.string({ description: '流水时间-结束(「流水时间」日期区间终点)' }),
    companyId: Flags.string({ description: '所属公司枚举：1=胤元;33=启元' }),
    pageSize: Flags.string({ description: '每页条数(默认100，可选 100/200/300/400)', required: true }),
    page: Flags.string({ description: '当前页码(初始为1)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelTkQueryLianlianFetcher)

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/parallelTkQueryLianlianFetcher', { "lid": flags.lid, "shopName": flags.shopName, "shopNameOld": flags.shopNameOld, "shortCreateDate": flags.shortCreateDate, "longCreateDate": flags.longCreateDate, "companyId": flags.companyId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
