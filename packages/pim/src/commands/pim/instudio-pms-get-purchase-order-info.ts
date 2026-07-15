// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetPurchaseOrderInfo extends MBSCommand {
  static description = '开发任务采样备货查看1688订单：开发任务采样备货查看1688订单'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    shopId: Flags.integer({ description: '店铺ID' }),
    shopName: Flags.string({ description: '店铺名称' }),
    orderId: Flags.string({ description: '订单号' }),
    amount: Flags.string({ description: '采样金额' }),
    status: Flags.integer({ description: '状态 1:待审核 2:审核通过3:审核拒绝' }),
    offline: Flags.integer({ description: '线下采样 0和null表示线上 1表示线下' }),
    descr: Flags.string({ description: '备注' }),
    oper: Flags.string({ description: '操作人' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetPurchaseOrderInfo)

    const data = await this.client.post('/yypms/pms/developerMission/getPurchaseOrderInfo', { "id": flags.id, "shopId": flags.shopId, "shopName": flags.shopName, "orderId": flags.orderId, "amount": flags.amount, "status": flags.status, "offline": flags.offline, "descr": flags.descr, "oper": flags.oper })
    this.output(data)
  }
}
