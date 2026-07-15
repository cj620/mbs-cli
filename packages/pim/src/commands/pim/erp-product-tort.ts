// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductTort extends MBSCommand {
  static description = '图片关联侵权SKU搜索：商品侵权审核「关联SKU」环节调用：把待审核清单中的 SKU+图片分批(每批最多20条)提交，以图搜款返回图片相似的关联商品列表(含相似度评分、是否侵权标记)，前端按 sku 去重后追加到审核弹窗 list3，供审核人勾选一并提交审核。'

  static flags = {
    submitBy: Flags.string({ description: '提交人(URL查询参数)，取自 localStorage.username，标识本次以图搜款的操作人', required: true }),
    body: Flags.string({ description: '请求体根节点：待搜索的 SKU+图片列表(每次最多20条，由 listBefore 分批切片得到) (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductTort)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/picture/search/product/tort', { "submitBy": flags.submitBy, "(body)": toArray(flags.body, 'unknown') })
    this.output(data)
  }
}
