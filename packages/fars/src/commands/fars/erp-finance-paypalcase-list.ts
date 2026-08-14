// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinancePaypalcaseList extends MBSCommand {
  static description = 'PayPal纠纷(Case)列表查询：PayPal纠纷(Case)列表查询：按编号类型(事件编号/交易号/账单编号)、原因、到期日区间、处理状态、PayPal账号、店铺/店长/客服、平台、异常case等条件分页查询，并返回未解决/已结束事件统计及待处理/审查中/等待对方处理各子状态数量与当前生命周期阶段的Case列表。'

  static flags = {
    caseId: Flags.string({ description: '事件编号(来源 #eventList，仅当编号类型 #caseSeller=1 时传，与 sellerTransactionId/invoiceNumber 互斥)' }),
    sellerTransactionId: Flags.string({ description: 'PayPal交易号(来源 #eventList，仅当 #caseSeller=2 时传)' }),
    invoiceNumber: Flags.string({ description: '账单编号(来源 #eventList，仅当 #caseSeller=3 时传)' }),
    reasonList: Flags.string({ description: '纠纷原因列表(来源多选 #paypalReason，选项由 paypalCaseReason 接口动态加载) (comma-separated)' }),
    finallyResponseStartTime: Flags.string({ description: '到期日(卖家最后回应)开始时间(来源 #startTime，date)' }),
    finallyResponseEndTime: Flags.string({ description: '到期日(卖家最后回应)结束时间(来源 #endTime，date)' }),
    status: Flags.string({ description: '处理状态(来源 #status)。0=等待客服处理;1=等待财务处理;2=等待系统更新;3=完成' }),
    caseLifeCycle: Flags.string({ description: 'Case生命周期阶段(由入参 caseLife 决定)。0=待处理;1=审查中;2=等待对方处理;空字符串=已结束(全部)' }),
    paypalList: Flags.string({ description: 'PayPal账号列表(来源多选 #paypal，选项由 getPaypal 接口动态加载) (comma-separated)' }),
    shopNameList: Flags.string({ description: '店铺名称列表(来源多选 #shopName，选项由 getShop 接口动态加载) (comma-separated)' }),
    shopManagerList: Flags.string({ description: '店长列表(来源多选 #shopManager，选项由 getShopManager 接口动态加载) (comma-separated)' }),
    shopCustomerServiceerList: Flags.string({ description: '客服列表(来源多选 #shopCustomer，选项由 getShopCustomerServiceer 接口动态加载) (comma-separated)' }),
    caseStatus: Flags.string({ description: 'Case状态(由入参 caseStatus 决定)。0=未解决事件;1=已结束事件' }),
    platform: Flags.string({ description: '平台(来源 #platform)。EBAY=ebay;SHOPIFY=shopify;空=全部' }),
    abnormal: Flags.string({ description: '异常case筛选(来源 #abnormal)。NORMAL=正常case;ABNORMAL=异常case;空=全部' }),
    page: Flags.string({ description: '当前页码(分页参数，从1开始)', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定传 100)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinancePaypalcaseList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpFinance/erpFinance/paypalcase/paypalcaseList', { "caseId": flags.caseId, "sellerTransactionId": flags.sellerTransactionId, "invoiceNumber": flags.invoiceNumber, "reasonList": toArray(flags.reasonList, 'string'), "finallyResponseStartTime": flags.finallyResponseStartTime, "finallyResponseEndTime": flags.finallyResponseEndTime, "status": flags.status, "caseLifeCycle": flags.caseLifeCycle, "paypalList": toArray(flags.paypalList, 'string'), "shopNameList": toArray(flags.shopNameList, 'string'), "shopManagerList": toArray(flags.shopManagerList, 'string'), "shopCustomerServiceerList": toArray(flags.shopCustomerServiceerList, 'string'), "caseStatus": flags.caseStatus, "platform": flags.platform, "abnormal": flags.abnormal, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
