// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductInfoSku extends MBSCommand {
  static description = '商品详情-按SKU查询商品基本信息：移动端「产品详情」页加载时，按 URL 上的 SKU 查询该商品的基本信息（名称、SPU/SKU、售价、售卖状态/等级、销量、毛利率/退款率、重量、库存、颜色尺码、包装、仓库仓位、开发员/采购员、申报名、备注等），返回数组(前端取第 0 个元素)渲染基本信息卡片。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编号(URL Query 参数)。来源：页面地址 ?sku= 经 GetQueryString(\'sku\') 取得，无对应输入控件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductInfoSku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getProductInfoSku', { "sku": flags.sku })
    this.output(data)
  }
}
