// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetCompetitorSpu extends MBSCommand {
  static description = 'SPU竞品信息查询：根据SPU查询该商品的竞品信息列表，返回每个竞品的图片、链接、标题、物品所在地、销量、含运费售价等，渲染到SPU详情页「竞品信息」表格(#content5)。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号(URL query 拼接，来源：当前页面地址 SPU 查询参数 GetQueryString(\'SPU\'))', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetCompetitorSpu)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getCompetitorSpu', {}, { params: { "spu": flags.spu } })
    this.output(data)
  }
}
