// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWishPbofItemidEveryTableNextOrLast extends MBSCommand {
  static description = 'Wish产品PB活动明细-前/后45天翻页查询：PB(Product Boost)推广趋势页点击「前45天/后45天」翻页时，按产品ID、基准日期、方向(前/后)查询该时间段内的PB推广活动明细列表(活动名/起止时间/关键字/订单数/活动状态/花费)，渲染到下方明细表格。'

  static flags = {
    productId: Flags.string({ description: '产品ID。来源浏览器URL查询参数 GetQueryString(\'productId\')，PB推广趋势页当前产品的唯一标识', required: true }),
    date: Flags.string({ description: '基准日期(yyyy-MM-dd)。来源 sessionStorage[\'times\'](由前次接口 res.desc 写入)，作为前/后45天翻页的中心基准日', required: true }),
    days: Flags.string({ description: '翻页方向。枚举：0=前45天(searchChart(\'0\'))；1=后45天(searchChart(\'1\'))；来源翻页按钮回调入参 num', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWishPbofItemidEveryTableNextOrLast)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEveryTableNextOrLast', { "productId": flags.productId, "date": flags.date, "days": flags.days })
    this.output(data)
  }
}
