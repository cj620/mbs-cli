// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderSecondList extends MBSCommand {
  static description = 'SeeBee平台开发-店铺下钻(二级)列表查询：SeeBee平台开发报表中，点击某店铺管理员(开发员)行展开后触发，按 店铺管理员+店铺状态+起止时间 查询该管理员名下各店铺的开发明细（订单量/销售额/毛利/新老品出单量与销售额/总产品数/爆B以上产品数/爆款率），返回明细列表渲染为子表格。'

  static flags = {
    shopManager: Flags.string({ description: '店铺管理员(开发员)姓名。来源：被点击展开行的 data-name(一级 v.shopManager)', required: true }),
    status: Flags.string({ description: '店铺状态。枚举：0=自建；1=继承。来源：被点击行 data-status', required: true }),
    beginTime: Flags.string({ description: '开始时间(日期，格式 yyyy-MM-dd)。来源：日期控件 #startTime', required: true }),
    endTime: Flags.string({ description: '结束时间(日期，格式 yyyy-MM-dd)。来源：日期控件 #endTime', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderSecondList)

    const data = await this.client.post('/erpOrder/erpOrder/seebeeDevelopmentShop/secondList', { "shopManager": flags.shopManager, "status": flags.status, "beginTime": flags.beginTime, "endTime": flags.endTime })
    this.output(data)
  }
}
