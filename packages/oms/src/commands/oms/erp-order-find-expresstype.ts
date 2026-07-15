// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindExpresstype extends MBSCommand {
  static description = '查询快递方式(物流方式)列表：订单详情页加载时根据物流类型 logisticsType 查询可选的快递方式(物流方式)列表，结果存入 basedata.expresstypelist 供物流信息下拉选择；保存物流/基本信息时按 ID 匹配 expresstypeid 取 NAME 作为快递方式名称回传。'

  static flags = {
    logisticsType: Flags.string({ description: '物流类型(快递方式筛选条件)，URL查询参数，调用时默认传空串查询全部；枚举取值(待人工确认)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindExpresstype)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/findExpresstype', {}, { params: { "logisticsType": flags.logisticsType } })
    this.output(data)
  }
}
