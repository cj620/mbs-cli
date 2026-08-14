// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskReviewListingList extends MBSCommand {
  static description = 'listing评价任务列表查询：listing评价任务列表查询：按平台、时间段(今天/昨天/前天/更早/精华/自定义区间)、类型、分组人员等条件查询已创建的 listing 评价任务，返回 listing 卡片列表(主图/标题/链接/图标/点赞数/评论数)供页面各 tab 与排行榜下钻渲染。'

  static flags = {
    platformId: Flags.string({ description: '平台ID。来源页面顶部“平台”下拉框 #platform(取值为 PLATFORMID)；searchListing 调用时传入' }),
    times: Flags.string({ description: '时间/时间段。取值来源：各时间 tab 的 TIMES(来自 getFourDayTime 返回 data.obj[n].TIMES)；自定义区间为 开始日期@结束日期；排行榜下钻取行数据 times(累计精华取 times2)' }),
    type: Flags.string({ description: '类型标记。来源：精华 tab 的 .fivenone(即 getFourDayTime 返回 data.obj[4].type)，或排行榜行数据 type；用于区分精华/普通等统计口径' }),
    groupOper: Flags.string({ description: '分组人员标识。来源排行榜行数据 value.groupOper；置精华(putEssence)、累计评价数(listingNum)、累计精华评数(listingNum2)下钻时传入' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskReviewListingList)

    const data = await this.client.post('/erpTask/erpTask/reviewListingTask/reviewListingList', { "platformId": flags.platformId, "times": flags.times, "type": flags.type, "groupOper": flags.groupOper })
    this.output(data)
  }
}
