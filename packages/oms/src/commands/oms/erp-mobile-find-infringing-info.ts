// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindInfringingInfo extends MBSCommand {
  static description = '商品侵权信息查询：移动端马帮ERP「商品侵权信息」页面分页查询：按关键词(spu/sku/侵权关键字)与审核状态筛选，返回按侵权平台分组的侵权提交记录及其下侵权明细列表，支持加载更多分页。'

  static flags = {
    currPage: Flags.string({ description: '当前页码。search()固定传1，getMore()传++currPage(从1开始累加)', required: true }),
    search: Flags.string({ description: '搜索关键字，来源搜索框#search(占位提示 spu/sku/侵权关键字)' }),
    verifyStatus: Flags.string({ description: '审核状态筛选。来源URL参数tortType：有值→原值；为空串→""(全部)；无值→默认"1"(待审核)。枚举0/1/2/3/4同响应verifyStatus' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindInfringingInfo)

    const data = await this.client.post('/erpMobile/erpMobile/infringing/findInfringingInfo', { "currPage": flags.currPage, "search": flags.search, "verifyStatus": flags.verifyStatus })
    this.output(data)
  }
}
