// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceFindPlatformBill extends MBSCommand {
  static description = '平台账单查询：按平台、店铺、费用起止日期查询各平台店铺的账单汇总：订单收入、到帐/平台费/物流费/服务费/广告费/罚款/退款/放款金额、应收款余额及占比，返回账单列表用于财务报表页渲染。'

  static flags = {
    platform: Flags.string({ description: '平台名称。来源：URL 参数 platform 优先，否则取平台下拉框 #Platform；无值传空串' }),
    shopname: Flags.string({ description: '店铺名称。来源：店铺下拉框 #shopList；无值传空串' }),
    starttime: Flags.string({ description: '费用开始日期。来源：日期控件 #startTime(YYYY-MM-DD)；无值传空串' }),
    endtime: Flags.string({ description: '费用结束日期。来源：日期控件 #endTime(YYYY-MM-DD)；无值传空串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceFindPlatformBill)

    const data = await this.client.post('/erpFinance/erpFinance/bill/findPlatformBill', { "platform": flags.platform, "shopname": flags.shopname, "starttime": flags.starttime, "endtime": flags.endtime })
    this.output(data)
  }
}
