// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPurchaseBysku extends MBSCommand {
  static description = 'SKU采购异常消息查询：SKU详情页加载「采购异常」(searchAwait) 面板时调用，按 SKU 查询该商品的采购异常消息列表（异常状态、消息类型、消息详情、反馈、开发员/采购员、任务推送与截止日期等），用于渲染 awaitTempalte 表格。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编号（URL query 参数，来源于前端页面 URL 的 SKU 参数，经 GetQueryString(\'SKU\') 取得；无对应输入控件）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPurchaseBysku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getPurchaseBysku', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
