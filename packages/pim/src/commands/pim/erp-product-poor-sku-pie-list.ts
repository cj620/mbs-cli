// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductPoorSkuPieList extends MBSCommand {
  static description = '不良库存饼图(末次采购/滞销)分析数据查询：根据当前页表格的 SKU 列表，批量查询每个 SKU 末次入库成功采购单往前推 30/60/90 天的入库采购分析明细（备货人/数量/金额/入库时间）。前端用其计算末次采购分析(备货人、备货数量、备货金额、距今天数)及不良库存分析(占比最高备货人、占比)，并在查看分析表抽屉中渲染 30/60/90 天饼图。'

  static flags = {
    fielde741ce4d: Flags.string({ description: 'SKU 编码数组，请求体本身即为该数组(list.map(item => item.sku))，来源=当前页表格数据各行 sku；无独立控件，随列表自动带出 (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductPoorSkuPieList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/indonesia/poorSkuPieList', { "(请求体根数组)": toArray(flags.fielde741ce4d, 'string') })
    this.output(data)
  }
}
