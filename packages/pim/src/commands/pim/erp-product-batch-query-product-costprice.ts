// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductBatchQueryProductCostprice extends MBSCommand {
  static description = '批量查询商品(海外仓SKU)成本价：在“海外仓sku成本”弹窗中，用户在文本域按“sku,成本价”逐行录入后失焦触发，前端把每行解析为 {sku, costprice} 数组放入 list 批量提交后端，后端返回每个SKU的原成本价(oldCostprice)与现成本价(newCostprice)用于表格回显，供用户修改后再调用 batchUpdateProductCostprice 保存。'

  static flags = {
    list: Flags.string({ description: '待查询成本价的SKU列表(由文本域逐行解析得到) (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductBatchQueryProductCostprice)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/batchQueryProductCostprice', { "list": toArray(flags.list, 'unknown') })
    this.output(data)
  }
}
