// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetDeveloperInfoByDatetime extends MBSCommand {
  static description = '开发趋势图-榜单与汇总查询：按日期+开发员+类目查询当日/上一日交易额、热销类目榜、组员排行榜、店铺贡献榜、销售贡献榜。'

  static flags = {
    categoryId: Flags.string({ description: '查询参数-商品分类ID。来源 sessionStorage.getItem(\'cate\')，无则传空' }),
    name: Flags.string({ description: '查询参数-开发员姓名。来源 sessionStorage.getItem(\'developName\')；无值时部门=总经办默认\'刘艳-开发\'，否则传空' }),
  }

  static args = {
    datetime: Args.string({ required: true, description: '路径段-查询日期(yyyy-MM-dd)。来源 getTody(new Date(), ds).today，默认当日(ds=0)' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(OmsErpMobileGetDeveloperInfoByDatetime)

    const data = await this.client.get(`/erpMobile/erpMobile/saleTrendChart/${args.datetime}/getDeveloperInfoByDatetime`, { params: { "categoryId": flags.categoryId, "name": flags.name } })
    this.output(data)
  }
}
