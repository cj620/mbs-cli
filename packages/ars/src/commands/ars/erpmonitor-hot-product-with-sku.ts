// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorHotProductWithSku extends MBSCommand {
  static description = '热销商品SKU销售详情查询(hotProductWithSku)：单产品分析页加载/排序时调用：按店铺(shopId)+商品(itemId)查询该店铺下该 listing 关联各 SKU 的销售详情，返回 SKU 商品信息、30天销售额/销量/平均成交价、待发货、库存/在途、重量、商品属性、成本/毛利、毛利率/退款率、7/30/90天销量、开发员等，渲染至「SKU销售详情」表格。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID，定位被分析的店铺', required: true }),
    orderWay: Flags.string({ description: '排序方向。DESC=降序;ASC=升序(默认取下拉首选项DESC)' }),
    orderFiled: Flags.string({ description: '排序字段(拼写为Filed)。createdate=创建时间;reserve13=退款率;profit=毛利率;HJRESERVE8=7天销量;HJRESERVE9=30天销量;HJRESERVE10=90天销量;thirty_days_sales=30天销售额' }),
    itemId: Flags.string({ description: '商品(listing/item)ID，限定被分析的单个商品' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorHotProductWithSku)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/hotProductWithSku', {}, { params: { "shopId": flags.shopId, "orderWay": flags.orderWay, "orderFiled": flags.orderFiled, "itemId": flags.itemId } })
    this.output(data)
  }
}
