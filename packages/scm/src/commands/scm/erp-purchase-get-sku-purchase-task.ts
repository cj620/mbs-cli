// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseGetSkuPurchaseTask extends MBSCommand {
  static description = '查询SKU采购任务：依据 SKU 查询该商品在采购下单模块生成的采购任务列表，返回采购任务生成时间、采购员、采购备注、采购仓库/数量、延迟天数、异常信息与标记完成情况，用于 SKU 详情页采购任务表格渲染。'

  static flags = {
    sku: Flags.string({ description: 'SKU 编码（查询串参数；来源浏览器地址栏 SKU，前端 GetQueryString(\'SKU\') 取值后拼接到 URL）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseGetSkuPurchaseTask)

    const data = await this.client.post('/erpPurchase/erpPurchase/purchaseDownOrder/getSkuPurchaseTask', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
