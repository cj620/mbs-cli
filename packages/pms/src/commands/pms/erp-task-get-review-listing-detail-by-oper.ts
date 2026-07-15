// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskGetReviewListingDetailByOper extends MBSCommand {
  static description = '我也要点评-Listing评价详情查询(按操作人)：“我也要点评”场景(flag=2)下，按 listingId 查询当前操作人对该 listing 的评价详情，回显标题/图片/价格/属性/促销/维护/好评 7 项评分、综合评定、评价正文与需改进内容，并据 evaluateTime 判断是否显示“保存草稿”按钮。'

  static flags = {
    listingId: Flags.string({ description: 'Listing 记录ID(查询主键)。前端取自当前页面 URL 的 reviewId 参数(GetQueryString(\'reviewId\'))，拼接到接口 URL query 上；来源=页面URL参数', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskGetReviewListingDetailByOper)

    const data = await this.client.post('/erpTask/erpTask/reviewListingTask/getReviewListingDetailByOper', {}, { params: { "listingId": flags.listingId } })
    this.output(data)
  }
}
