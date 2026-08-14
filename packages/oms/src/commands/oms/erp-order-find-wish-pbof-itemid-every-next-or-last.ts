// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWishPbofItemidEveryNextOrLast extends MBSCommand {
  static description = 'WishPB商品翻页(前/后45天)趋势查询：WishPB(Product Boost)推广趋势图的翻页查询：在 listingChart 页面点击「前45天 searchChart(\'0\')」/「后45天 searchChart(\'1\')」时，按 productId + 基准日期 date + 选中指标 selectOption + 方向 days 拉取折线趋势数据(x 轴日期 + series 多指标系列)，并回写新的基准日期用于继续翻页。'

  static flags = {
    productId: Flags.string({ description: '产品ID。来源 URL query GetQueryString(\'productId\')', required: true }),
    date: Flags.string({ description: '基准日期(本次翻页的参照日)。来源 sessionStorage[\'times\']，即上一次接口返回的 res.desc', required: true }),
    selectOption: Flags.string({ description: '选中的统计指标(逗号拼接)。枚举：总费用/总计费流量/ERP总成交额/ERP总单量。来源勾选的复选框 name=variable 的 value' }),
    days: Flags.string({ description: '翻页方向。枚举：0=前45天(searchChart(\'0\'))，1=后45天(searchChart(\'1\'))。来源触发按钮入参 num', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWishPbofItemidEveryNextOrLast)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEveryNextOrLast', { "productId": flags.productId, "date": flags.date, "selectOption": flags.selectOption, "days": flags.days })
    this.output(data)
  }
}
