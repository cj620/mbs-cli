// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderExportLowProfitOrder extends MBSCommand {
  static description = '限价(低毛利)订单导出：订单中心「限价」页签的订单导出接口：以与列表查询(findLowProfitOrder)相同的筛选条件(店长、店铺、任务类型、平台、推送时间区间、处理状态)拉取低毛利/限价订单，以 Excel(.xls) 二进制流返回供前端下载。导出全部走 limitedPriceExportall()，导出选中走 limitedPriceExportchek()(追加 orderids)。'

  static flags = {
    shopManager: Flags.string({ description: '店长(来源下拉框 #saleLeader10，空串=不限)' }),
    shopid: Flags.string({ description: '店铺ID(来源下拉框 #shopName10，空串=不限)' }),
    orderType: Flags.string({ description: '任务类型(来源下拉框 #orderType)。\'\'=全部;1=不满足供应商限价;2=不满足公司内部毛利率要求;3=smt高成本低毛利率;4=ebay高金额低毛利率' }),
    platformId: Flags.string({ description: '平台ID(来源下拉框 #platformes2，选项动态加载，空串=不限)' }),
    yearMonth: Flags.string({ description: '年月($("#yearMonth2").val())；#yearMonth2 下拉在页面中已被注释，时间筛选改由 date-picker 实现，故本字段通常为空 (待人工确认)' }),
    operStatus: Flags.string({ description: '处理(操作)状态(来源下拉框 #operStatus)。\'\'=全部;1=未完成(默认);2=已完成' }),
    pushStartTime: Flags.string({ description: '推送时间-起始(date-picker timmer[0]，仅选择时间区间时下传)' }),
    pushEndTime: Flags.string({ description: '推送时间-结束(date-picker timmer[1]，仅选择时间区间时下传)' }),
    orderids: Flags.string({ description: '选中导出的订单ID集合(逗号拼接)。仅「导出选中订单」limitedPriceExportchek() 追加，取自勾选 name=limitedPriceCheckboxes 的值；「导出全部订单」不含此字段' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderExportLowProfitOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/exportLowProfitOrder', { "shopManager": flags.shopManager, "shopid": flags.shopid, "orderType": flags.orderType, "platformId": flags.platformId, "yearMonth": flags.yearMonth, "operStatus": flags.operStatus, "pushStartTime": flags.pushStartTime, "pushEndTime": flags.pushEndTime, "orderids": flags.orderids })
    this.output(data)
  }
}
