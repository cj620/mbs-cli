// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDelayOrder extends MBSCommand {
  static description = '查询可借用运单号(延迟订单)：根据输入的交易单号(可多个逗号分隔,一次最多500个)查询延迟订单及其可借用的运单号(最多三个候选),返回订单基础信息、延迟天数、渠道、国家及每个候选运单号的快递类型/原运费/原店铺/原订单号,供前端选择并\'提前上网\'借用。'

  static flags = {
    tradeIdStr: Flags.string({ description: '交易单号(URL查询参数)。来源:文本域 #tradeIdStr;支持多个交易单号逗号分隔,一次最多500个;为空时前端弹窗拦截不发请求', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDelayOrder)

    const data = await this.client.post('/erpOrder/erpOrder/ERPOrder/findDelayOrder', {}, { params: { "tradeIdStr": flags.tradeIdStr } })
    this.output(data)
  }
}
