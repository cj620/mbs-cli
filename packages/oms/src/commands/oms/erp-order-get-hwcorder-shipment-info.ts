// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetHwcorderShipmentInfo extends MBSCommand {
  static description = '订单货件(海外仓发货)信息查询：订单详情页加载时按订单号查询该订单的海外仓货件/发货信息(货件店铺、货件编号、发货实重、真实运费、仓库类型)，渲染到货件信息区并回填仓库类型，随后联动加载SKU标签/装箱单标签。'

  static flags = {
    orderid: Flags.string({ description: '订单号(订单唯一标识)，来源于页面URL查询参数，经GetQueryString(\'orderid\')取得后拼接到接口URL', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetHwcorderShipmentInfo)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getHwcorderShipmentInfo', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
