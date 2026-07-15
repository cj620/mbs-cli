// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetManufacProductPurchaseSpu extends MBSCommand {
  static description = '供应商合作中产品(SPU)列表查询：供应商详情页「合作中产品」Tab：按供应商ID(manufactureId)分页查询该供应商合作中的商品(SPU)汇总列表，返回每个SPU的图片、名称、累计采购笔数/采购量/采购金额、开始与最后采购日，并支持点击展开下钻 SKU 明细。'

  static flags = {
    manufactureId: Flags.string({ description: '供应商ID(来源：页面URL参数 sequenceid，即 GetQueryString(\'sequenceid\'))', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定传 50)', required: true }),
    page: Flags.string({ description: '当前页码(首次固定 1，翻页时取分页器 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetManufacProductPurchaseSpu)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/getManufacProductPurchaseSpu', {}, { params: { "manufactureId": flags.manufactureId, "pageSize": flags.pageSize, "page": flags.page } })
    this.output(data)
  }
}
