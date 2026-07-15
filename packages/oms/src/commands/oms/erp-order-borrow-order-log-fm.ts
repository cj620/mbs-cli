// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderBorrowOrderLogFm extends MBSCommand {
  static description = '借用订单日志查询：按订单时间区间、平邮/挂号类型、订单编号、借用运单号、借用物流方式、国家等条件，分页查询订单的借用运单操作日志列表，返回总条数/总页数及每条日志的订单、借用运单、操作人等信息。'

  static flags = {
    ordertimestart: Flags.string({ description: '订单开始时间(来源控件 #ordertimestart 日期框,格式 yyyy-MM-dd)' }),
    ordertimeend: Flags.string({ description: '订单结束时间(来源控件 #ordertimeend 日期框,格式 yyyy-MM-dd)' }),
    channel: Flags.string({ description: '类型(来源 #channel 下拉)。枚举:平邮 / 挂号；空=全部' }),
    orderId: Flags.string({ description: '订单编号(来源 #orderId 输入框)' }),
    borrowExpressId: Flags.string({ description: '借用运单号(来源 #borrowExpressId 输入框)' }),
    borrowExpressType: Flags.string({ description: '借用物流方式(来源 #borrowExpressType 输入框)' }),
    country: Flags.string({ description: '国家(来源 #country 输入框)' }),
    currPage: Flags.string({ description: '当前页码(首次固定 1,翻页取分页控件 api.getCurrent())', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定 50)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderBorrowOrderLogFm)

    const data = await this.client.post('/erpOrder/erpOrder/ERPOrder/borrowOrderLogFm', { "ordertimestart": flags.ordertimestart, "ordertimeend": flags.ordertimeend, "channel": flags.channel, "orderId": flags.orderId, "borrowExpressId": flags.borrowExpressId, "borrowExpressType": flags.borrowExpressType, "country": flags.country, "currPage": flags.currPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
