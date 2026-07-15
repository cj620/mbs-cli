// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetManufactureSpu extends MBSCommand {
  static description = '商品(SPU)供应商信息查询：根据 SPU 查询该商品在 1688 上匹配的全部供应商信息，返回供应商旺旺、供货商品(SKU/图片/1688商品名)、商品属性、是否自动采购、捆绑数量、起批量、商品价格、含运费报价、供应商状态、匹配人/匹配时间等，用于 SPU 详情页「供应商信息」表格渲染。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号(取自详情页URL参数 SPU，即 GetQueryString(\'SPU\')，来源控件=页面URL)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetManufactureSpu)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getManufactureSpu', { "spu": flags.spu })
    this.output(data)
  }
}
