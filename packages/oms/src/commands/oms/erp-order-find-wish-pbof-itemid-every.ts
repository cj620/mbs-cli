// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWishPbofItemidEvery extends MBSCommand {
  static description = 'Wish商品Boost每日PB趋势查询：根据产品ID与起止日期，查询该产品 Wish ProductBoost(PB) 推广在前45天时间窗内每日的趋势数据，返回 echarts 折线图所需的 X 轴日期分类与多条系列(总费用/总计费流量/ERP总成交额/ERP总单量)，并回传当前定位日期(desc)用于前/后45天翻页。'

  static flags = {
    productId: Flags.string({ description: '产品ID。来源浏览器URL查询参数 GetQueryString(\'productId\')，用于定位某产品的 PB 推广数据', required: true }),
    startTime: Flags.string({ description: '起始日期(yyyy-MM-dd)。getTody(new Date(),45,0).today=当前日期前45天', required: true }),
    endTime: Flags.string({ description: '结束日期(yyyy-MM-dd)。getTody(new Date(),1,0).today=当前日期前1天(昨天)', required: true }),
    selectOption: Flags.string({ description: '选中的统计变量(多选逗号拼接)，来源 name=\'variable\' 复选框 arr.join(\',\')。枚举：总费用/总计费流量/ERP总成交额/ERP总单量' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWishPbofItemidEvery)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEvery', { "productId": flags.productId, "startTime": flags.startTime, "endTime": flags.endTime, "selectOption": flags.selectOption })
    this.output(data)
  }
}
