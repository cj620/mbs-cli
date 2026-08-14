// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountFindLogisticsInfo2 extends MBSCommand {
  static description = '物流订单信息查询：电商订单物流信息分页查询：按订单名称/客户、客户预留(自选物流)、货运方式、时间区间筛选，分页返回订单列表(订单编号、状态、店铺、金额、国家、物流单号、交易号、平台订单号等)及总条数/总页数。'

  static flags = {
    name: Flags.string({ description: '订单/客户名称(来源 URL 参数 name，decodeURI 后，值非 \'null\' 才提交)' }),
    customerreserve2: Flags.string({ description: '客户预留信息/自选物流(来源 URL 参数 customerreserve，decodeURI 后，值非 \'null\' 才提交)' }),
    expresstype: Flags.string({ description: '货运方式/快递类型(来源 URL 参数 expresstype，decodeURI 后，值非 \'null\' 才提交)' }),
    pageSize: Flags.string({ description: '每页条数(前端固定传 50)', required: true }),
    startTime: Flags.string({ description: '起始时间(来源 URL 参数 startDate)' }),
    endTime: Flags.string({ description: '结束时间(来源 URL 参数 endDate)' }),
    page: Flags.string({ description: '当前页码(仅分页回调携带，取自分页控件 api.getCurrent()；首次查询不传)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountFindLogisticsInfo2)

    const data = await this.client.post('/erpaccount/erpaccount/logisticsController/findLogisticsInfo2', { "name": flags.name, "customerreserve2": flags.customerreserve2, "expresstype": flags.expresstype, "pageSize": flags.pageSize, "startTime": flags.startTime, "endTime": flags.endTime, "page": flags.page })
    this.output(data)
  }
}
