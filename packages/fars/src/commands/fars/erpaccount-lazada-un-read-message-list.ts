// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountLazadaUnReadMessageList extends MBSCommand {
  static description = 'Lazada店铺未读消息列表查询：Lazada未读消息看板分页查询：按排序方式分页返回各Lazada店铺的未读消息统计（ID/TH/MY/PH/SG/VN六站点未读数）、店铺状态、是否超过30分钟未同步消息、店铺登录账号密码等信息，前端以卡片形式渲染并支持分页。'

  static flags = {
    page: Flags.string({ description: '当前页码。首次查询固定传 1；翻页时传分页组件当前页 api.getCurrent()', required: true }),
    orderBy: Flags.string({ description: '排序方式，来源排序下拉框 #orderBy。枚举：空=不指定;1=刷新时间升序;2=刷新时间降序;3=店铺名称升序;4=店铺名称降序;5=店铺密码错误' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountLazadaUnReadMessageList)

    const data = await this.client.post('/erpaccount/erpaccount/lazadaUnRead/LazadaUnReadMessageList', { "page": flags.page, "orderBy": flags.orderBy })
    this.output(data)
  }
}
