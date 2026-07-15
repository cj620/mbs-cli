// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureExportExcel extends MBSCommand {
  static description = 'SMT纠纷信息导出Excel：在SMT纠纷统计页点击导出按钮，按当前列表查询条件导出纠纷信息明细Excel。请求体复用纠纷列表查询(getIssueInfoList)最后一次的查询参数(exportdata=params)，响应为二进制文件流(responseType:blob)，文件名取自响应头content-disposition。'

  static flags = {
    country: Flags.string({ description: '国家(el-input 占位国家, searchData.country, 仅列表模式显示)' }),
    shopManager: Flags.string({ description: '店长(el-select 占位店长, 选项来自 querySmtShopManager)' }),
    shopName: Flags.string({ description: '店铺(el-select-v2 占位店铺, 选项来自 querySmtShop)' }),
    sku: Flags.string({ description: 'SKU(el-input 占位sku, searchData.sku, 仅列表模式显示)' }),
    spu: Flags.string({ description: 'SPU(el-input 占位spu, searchData.spu, 仅列表模式显示)' }),
    expressType: Flags.string({ description: '物流方式(el-select-v2 占位物流方式, 选项来自 findPostponeShop.expressList, 仅列表模式显示)' }),
    customerName: Flags.string({ description: '客户名称(searchData.customerName, 页面无对应控件, 固定传空)' }),
    itemId: Flags.string({ description: '产品ID(el-input 占位产品ID, searchData.itemId)' }),
    orderId: Flags.string({ description: '订单ID(el-input 占位订单ID, searchData.orderId, 仅列表模式显示)' }),
    pageSize: Flags.string({ description: '每页条数(searchData.pageSize 固定50, 与分页 page-size=50 一致)', required: true }),
    sortStr: Flags.string({ description: '排序字段。q.issuenum desc=纠纷数量倒序(默认);q.refundMoney desc=退款金额倒序;q.goodsErrIssueNum desc=货不对板数量倒序;q.expressErrIssueNum desc=物流纠纷数量倒序' }),
    currentPage: Flags.string({ description: '当前页码(分页 @current-change 传入, 导出时为最后一次查询页码)', required: true }),
    startTime: Flags.string({ description: '订单时间-起始(time.value[0], 格式 YYYY-MM-DD, 默认近30天)' }),
    endTime: Flags.string({ description: '订单时间-结束(time.value[1], 格式 YYYY-MM-DD, 默认今天)' }),
    gmtCreateStartTime: Flags.string({ description: '纠纷时间-起始(time2.value[0], 格式 YYYY-MM-DD, 默认近30天)' }),
    gmtCreateEndTime: Flags.string({ description: '纠纷时间-结束(time2.value[1], 格式 YYYY-MM-DD, 默认今天)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureExportExcel)

    const data = await this.client.post('/erpManufacture/erpManufacture/issueInfo/exportExcel', { "country": flags.country, "shopManager": flags.shopManager, "shopName": flags.shopName, "sku": flags.sku, "spu": flags.spu, "expressType": flags.expressType, "customerName": flags.customerName, "itemId": flags.itemId, "orderId": flags.orderId, "pageSize": flags.pageSize, "sortStr": flags.sortStr, "currentPage": flags.currentPage, "startTime": flags.startTime, "endTime": flags.endTime, "gmtCreateStartTime": flags.gmtCreateStartTime, "gmtCreateEndTime": flags.gmtCreateEndTime })
    this.output(data)
  }
}
