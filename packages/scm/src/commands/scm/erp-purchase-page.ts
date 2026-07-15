// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchasePage extends MBSCommand {
  static description = '采购任务分页查询：采购任务列表分页查询：以路径参数形式传入 SKU 与当前页码，返回采购任务总数与任务列表（供应商名称/等级、任务数量、采购员、任务时间、生成时间、任务状态）。'

  static flags = {
    sku: Flags.string({ description: '供应商/商品 SKU，路径第 1 个参数；来源前端路由 query 参数 route.query.sku', required: true }),
    page: Flags.string({ description: '当前页码，路径第 2 个参数；来源分页组件 currectpage（默认从 1 开始）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchasePage)

    const data = await this.client.get('/erpPurchase/erpPurchase/purchase/task/page/', { params: {} })
    this.output(data)
  }
}
