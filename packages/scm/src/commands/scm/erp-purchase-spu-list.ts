// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseSpuList extends MBSCommand {
  static description = '降本任务-SPU列表查询：采购工作台「降本任务」标签页的 SPU 层分页列表查询：按任务状态(未完成/已完成)、任务类型(下单任务/黑马/其他)、SPU 关键词过滤，返回降本任务 SPU 列表及总条数，供 el-table 渲染，展开行再调用 skuList 获取 SKU 明细。'

  static flags = {
    status: Flags.string({ description: '任务状态(恒传，默认1)。1=未完成;2=已完成', required: true }),
    pageSize: Flags.string({ description: '每页条数(默认10)', required: true }),
    spu: Flags.string({ description: 'SPU 关键词(搜索框，默认空串)' }),
    type: Flags.string({ description: '任务类型(类型下拉，可为空)。1=下单任务;2=黑马产品;3=其他' }),
    page: Flags.string({ description: '当前页码(从1开始)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseSpuList)

    const data = await this.client.post('/erpPurchase/erpPurchase/downCostTask/spuList', { "status": flags.status, "pageSize": flags.pageSize, "spu": flags.spu, "type": flags.type, "page": flags.page })
    this.output(data)
  }
}
