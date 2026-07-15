// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetOrderSku extends MBSCommand {
  static description = '产品详情-销售单(订单)列表查询(getOrderSku)：移动端马帮ERP产品详情页加载时按SKU查询该商品关联的销售单(订单)列表，前端取data.obj，前3条渲染到默认销售单信息区，其余在点击查看更多后展开，逐条展示订单号/状态/英文标题/售价/数量/总收入/总毛利/国家/成交账号/店铺管理员/下单时间。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编码。URL查询参数，来源GetQueryString(\'sku\')从当前页面浏览器地址栏?sku=读取', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetOrderSku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getOrderSku', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
