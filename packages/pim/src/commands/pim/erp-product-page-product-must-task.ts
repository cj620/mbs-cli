// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductPageProductMustTask extends MBSCommand {
  static description = '清仓/停产待办任务分页查询：成品看板「清仓申请」标签页加载/翻页时调用，按状态类型(statusType)分页查询商品清仓/停产待办任务，返回任务总数与任务行列表(SKU、商品名、销量级别、库存、推送人/时间、审核人等)。前端以 res.obj.items[0] 作为表格行渲染，并支持对单条任务进行同意/拒绝处理。'

  static flags = {
    statusType: Flags.string({ description: '任务状态类型。1=同意;2=拒绝;3=未处理(默认)，当前固定为3未处理' }),
    currentPage: Flags.string({ description: '当前页码，默认1，翻页时由分页组件回传' }),
    pageSize: Flags.string({ description: '每页条数，固定10' }),
    total: Flags.string({ description: '总条数，前端分页状态字段(初始0，随pageInfo一并展开提交)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductPageProductMustTask)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/productMustTask/page', { "statusType": flags.statusType, "currentPage": flags.currentPage, "pageSize": flags.pageSize, "total": flags.total })
    this.output(data)
  }
}
