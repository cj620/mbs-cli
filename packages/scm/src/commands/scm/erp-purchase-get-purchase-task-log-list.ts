// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseGetPurchaseTaskLogList extends MBSCommand {
  static description = '采购任务日志列表查询：查询当前采购员的工作日志统计列表，按日期返回采购总任务量、下单量、付款完成量，以及超时付款/超时发货/虚假发货/物流延迟/入库延迟/tk出单/SMT出单等各维度的任务量与完成量及合计。页面加载即调用，不传任何查询参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseGetPurchaseTaskLogList)

    const data = await this.client.post('/erpPurchase/erpPurchase/purchaseDownOrder/getPurchaseTaskLogList', {})
    this.output(data)
  }
}
