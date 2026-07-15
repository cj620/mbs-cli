// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetPositionId extends MBSCommand {
  static description = '获取当前用户职位ID：订单详情页点击“作废订单”时调用，获取当前登录操作员的职位(岗位)ID(positionId)。前端取返回 obj 作为 positionId，若为空则提示“职位id丢失”并中断作废流程；非空时随订单作废表单一并提交至 /eshop/order.do?method=cancelOrder。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetPositionId)

    const data = await this.client.get('/erpOrder/erpOrder/orderNew/getPositionId', { params: {} })
    this.output(data)
  }
}
