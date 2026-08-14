// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetEbayCaseTaskList extends MBSCommand {
  static description = 'eBay Case 案件任务列表查询：eBay 个案(Case)任务看板列表查询：按案件状态(待处理/已处理/已结案)分页拉取案件任务，支持按客户ID、店铺、店长、站点、客服筛选，返回案件列表及分页汇总。'

  static flags = {
    page: Flags.string({ description: '当前页码(首次固定为1,分页回调取 api.getCurrent())', required: true }),
    pageSize: Flags.string({ description: '每页条数(固定10)', required: true }),
    status: Flags.string({ description: '案件状态。0=待处理案件;1=已处理案件;2=已结案(来源隐藏域 #statusFlag)', required: true }),
    customerId: Flags.string({ description: '客户ID(来源输入框 #customerId)' }),
    shopName: Flags.string({ description: '店铺(来源下拉 #shopNames,选项来自 getResponsibleShop)' }),
    shopManager: Flags.string({ description: '店长(来源下拉 #shopSalers,选项来自 getResponsibleShopSaler)' }),
    site: Flags.string({ description: '站点(来源下拉 #siteLists,选项来自 getSiteList)' }),
    customerService: Flags.string({ description: '客服(来源下拉 #peopleNames,选项来自 getManagerPeopleName)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetEbayCaseTaskList)

    const data = await this.client.post('/erpOrder/erpOrder/ebayCaseTask/getEbayCaseTaskList', { "page": flags.page, "pageSize": flags.pageSize, "status": flags.status, "customerId": flags.customerId, "shopName": flags.shopName, "shopManager": flags.shopManager, "site": flags.site, "customerService": flags.customerService })
    this.output(data)
  }
}
