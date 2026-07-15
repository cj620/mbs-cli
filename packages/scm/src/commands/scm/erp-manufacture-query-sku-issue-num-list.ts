// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureQuerySkuIssueNumList extends MBSCommand {
  static description = 'SKU纠纷数量明细查询：SMT纠纷分析列表页点击某行 SPU 时触发，按当前筛选条件 + 该行 SPU/产品ID 查询该 SPU 下各 SKU 的纠纷数量、退款金额与纠纷率明细，结果渲染到弹出表格(treedata)。'

  static flags = {
    country: Flags.string({ description: '国家(来源输入框 placeholder=国家)' }),
    shopManager: Flags.string({ description: '店长(来源下拉 el-select，选项 shopmanagerlist)' }),
    shopName: Flags.string({ description: '店铺(来源下拉 el-select-v2，选项 shopTypeList)' }),
    sku: Flags.string({ description: 'SKU(来源输入框 placeholder=sku)' }),
    spu: Flags.string({ description: 'SPU(初始来源输入框 placeholder=spu；下钻时被点击行 row.spu 覆盖)' }),
    expressType: Flags.string({ description: '物流方式(来源下拉 el-select-v2，选项 expressList)' }),
    customerName: Flags.string({ description: '客户名(searchData 内字段，页面无对应控件，固定传空)' }),
    itemId: Flags.string({ description: '产品ID(初始来源输入框 placeholder=产品ID；下钻时被点击行 row.itemId 覆盖)' }),
    orderId: Flags.string({ description: '订单ID(来源输入框 placeholder=订单ID)' }),
    pageSize: Flags.string({ description: '每页条数(searchData 固定值 50)' }),
    sortStr: Flags.string({ description: '排序字段。枚举：q.issuenum desc=纠纷数量倒序;q.refundMoney desc=退款金额倒序;q.goodsErrIssueNum desc=货不对板数量倒序;q.expressErrIssueNum desc=物流纠纷数量倒序(默认 q.issuenum desc)' }),
    startTime: Flags.string({ description: '订单时间-起始(来源订单时间 daterange time[0]，格式 YYYY-MM-DD)' }),
    endTime: Flags.string({ description: '订单时间-结束(来源订单时间 daterange time[1]，格式 YYYY-MM-DD)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureQuerySkuIssueNumList)

    const data = await this.client.post('/erpManufacture/erpManufacture/issueInfo/querySkuIssueNumList', { "country": flags.country, "shopManager": flags.shopManager, "shopName": flags.shopName, "sku": flags.sku, "spu": flags.spu, "expressType": flags.expressType, "customerName": flags.customerName, "itemId": flags.itemId, "orderId": flags.orderId, "pageSize": flags.pageSize, "sortStr": flags.sortStr, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
