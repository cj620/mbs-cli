// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderBorrowOrderLog extends MBSCommand {
  static description = '借用订单日志查询：按订单时间区间、物流类型(平邮/挂号)、订单编号、借用运单号、借用物流方式、国家等条件分页查询借用订单操作日志，返回订单基本信息、借用运单信息及操作人/操作时间/描述。'

  static flags = {
    ordertimestart: Flags.string({ description: '订单开始时间(来源控件 #ordertimestart 日期选择器；格式 YYYY-MM-DD)' }),
    ordertimeend: Flags.string({ description: '订单结束时间(来源控件 #ordertimeend 日期选择器；格式 YYYY-MM-DD)' }),
    channel: Flags.string({ description: '物流类型(来源控件 #channel 下拉；枚举：空=全部 / 平邮 / 挂号)' }),
    orderId: Flags.string({ description: '订单编号(来源控件 #orderId 输入框)' }),
    borrowExpressId: Flags.string({ description: '借用运单号(来源控件 #borrowExpressId 输入框)' }),
    borrowExpressType: Flags.string({ description: '借用物流方式(来源控件 #borrowExpressType 输入框)' }),
    country: Flags.string({ description: '国家(来源控件 #country 输入框)' }),
    currPage: Flags.string({ description: '当前页码(首次固定为1，分页回调取 api.getCurrent())', required: true }),
    pageSize: Flags.string({ description: '每页条数(固定为50)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderBorrowOrderLog)

    const data = await this.client.post('/erpOrder/erpOrder/ERPOrder/borrowOrderLog', { "ordertimestart": flags.ordertimestart, "ordertimeend": flags.ordertimeend, "channel": flags.channel, "orderId": flags.orderId, "borrowExpressId": flags.borrowExpressId, "borrowExpressType": flags.borrowExpressType, "country": flags.country, "currPage": flags.currPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
