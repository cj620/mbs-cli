// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetIssueInfoList extends MBSCommand {
  static description = 'SMT纠纷信息列表查询：SMT纠纷统计列表分页查询：按物流方式、店铺、店长、订单时间区间、纠纷时间区间、SKU/SPU/产品ID/订单ID/国家等条件筛选，返回各产品纠纷数量、货不对板纠纷数、物流纠纷数、退款金额、纠纷率等汇总列表。'

  static flags = {
    country: Flags.string({ description: '国家。来源：国家输入框' }),
    shopManager: Flags.string({ description: '店长。来源：店长下拉(querySmtShopManager)' }),
    shopName: Flags.string({ description: '店铺名称。来源：店铺下拉(querySmtShop)' }),
    sku: Flags.string({ description: 'SKU。来源：sku输入框' }),
    spu: Flags.string({ description: 'SPU。来源：spu输入框' }),
    expressType: Flags.string({ description: '物流方式。来源：物流方式下拉(findPostponeShop.expressList)' }),
    customerName: Flags.string({ description: '客户名。无对应输入控件，当前固定传空(待人工确认)' }),
    itemId: Flags.string({ description: '产品ID。来源：产品ID输入框/图表行回填' }),
    orderId: Flags.string({ description: '订单ID。来源：订单ID输入框' }),
    pageSize: Flags.string({ description: '每页条数。默认50', required: true }),
    sortStr: Flags.string({ description: '排序字段。默认\'q.issuenum desc\'。枚举：q.issuenum desc=纠纷数量倒序;q.refundMoney desc=退款金额倒序;q.goodsErrIssueNum desc=货不对板数量倒序;q.expressErrIssueNum desc=物流纠纷数量倒序' }),
    currentPage: Flags.string({ description: '当前页码。分页current-change传入，初始1', required: true }),
    startTime: Flags.string({ description: '订单时间-起始(YYYY-MM-DD)。来源：订单时间区间time[0]' }),
    endTime: Flags.string({ description: '订单时间-结束(YYYY-MM-DD)。来源：订单时间区间time[1]' }),
    gmtCreateStartTime: Flags.string({ description: '纠纷时间-起始(YYYY-MM-DD)。来源：纠纷时间区间time2[0]' }),
    gmtCreateEndTime: Flags.string({ description: '纠纷时间-结束(YYYY-MM-DD)。来源：纠纷时间区间time2[1]' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetIssueInfoList)

    const data = await this.client.post('/erpManufacture/erpManufacture/issueInfo/getIssueInfoList', { "country": flags.country, "shopManager": flags.shopManager, "shopName": flags.shopName, "sku": flags.sku, "spu": flags.spu, "expressType": flags.expressType, "customerName": flags.customerName, "itemId": flags.itemId, "orderId": flags.orderId, "pageSize": flags.pageSize, "sortStr": flags.sortStr, "currentPage": flags.currentPage, "startTime": flags.startTime, "endTime": flags.endTime, "gmtCreateStartTime": flags.gmtCreateStartTime, "gmtCreateEndTime": flags.gmtCreateEndTime })
    this.output(data)
  }
}
