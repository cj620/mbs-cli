// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetOrderSpu extends MBSCommand {
  static description = '根据SPU查询销售单(订单)列表：SPU详情页「销售单信息」模块：按SPU查询该商品关联的全部订单明细，返回订单编号、商品标题、数量、售价、运费、毛利、重量、下单/发货时间、成交账号、国家、状态、店铺负责人等字段，前端用 art-template contentTemplate0 逐行渲染订单表格。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。来源：页面 URL 查询参数 SPU(GetQueryString(\'SPU\'))，由 SPU 详情页地址带入', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetOrderSpu)

    const data = await this.client.post('/erpProduct/erpProduct/product/getOrderSpu', {}, { params: { "spu": flags.spu } })
    this.output(data)
  }
}
