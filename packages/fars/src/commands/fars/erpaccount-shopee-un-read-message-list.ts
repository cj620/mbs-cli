// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountShopeeUnReadMessageList extends MBSCommand {
  static description = 'Shopee店铺未读消息列表查询：分页查询当前用户名下 Shopee 店铺的未读站内信统计：返回每个店铺下各站点账号的未读消息条数、登录状态(是否需验证码、是否超1小时未同步)等，前端按卡片渲染并提供逐站点登录跳转。'

  static flags = {
    page: Flags.string({ description: '当前页码。首次/排序查询固定传1；分页回调传api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数，固定20(仅search()首次查询传，分页回调未传)' }),
    orderBy: Flags.string({ description: '排序方式。空=默认;1=刷新时间升序;2=刷新时间降序;3=店铺名称升序;4=店铺名称降序(来源:select#orderBy)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountShopeeUnReadMessageList)

    const data = await this.client.post('/erpaccount/erpaccount/shopeeUnRead/shopeeUnReadMessageList', { "page": flags.page, "pageSize": flags.pageSize, "orderBy": flags.orderBy })
    this.output(data)
  }
}
