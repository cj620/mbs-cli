// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskFindListingReviewTask extends MBSCommand {
  static description = '刊登评价任务详情查询：根据任务ID查询「刊登评价」任务详情：返回任务处理状态/系统检查结果/截止时间/创建人等任务头信息，以及待评价的商品(listing)列表(图片、链接、商品ID、发布时间、评价状态等)，供任务细节页渲染倒计时、任务状态与商品评价入口。'

  static flags = {
    id: Flags.string({ description: '任务ID(query string)。来源：当前页面URL的 id 参数(GetQueryString(\'id\'))，即任务主键；同时写入 localStorage[\'itemid\']', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskFindListingReviewTask)

    const data = await this.client.post('/erpTask/erpTask/reviewListingTask/findListingReviewTask', {}, { params: { "id": flags.id } })
    this.output(data)
  }
}
