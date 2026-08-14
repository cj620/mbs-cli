// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderPageSize extends MBSCommand {
  static description = '销售人均发货毛利额增长排行榜查询：大屏「人均发货毛利额增长榜」榜单数据查询：按页码/每页条数分页（路径参数），按榜单类型 type 取数，返回排行榜列表（名次、小组人数、姓名、人均毛利额增长、预测月业绩、毛利率、预估奖金）及总页数，前端用 art-template 模板渲染表格并定时轮询滚动。'

  static flags = {
    type: Flags.string({ description: '榜单/统计类型，全部调用固定取值=2', required: true }),
  }

  static args = {
    page: Args.string({ required: true, description: '页码（路径第1段），本实例固定=1；轮询分支取自增 i' }),
    pageSize: Args.string({ required: true, description: '每页条数（路径第2段），本实例固定=1000；首屏/轮询为10' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(OmsErpOrderPageSize)

    const data = await this.client.get(`/erpOrder/erpOrder/saleVistingCard/getSaleTrackNew/${args.page}/${args.pageSize}`, { params: { "type": flags.type } })
    this.output(data)
  }
}
