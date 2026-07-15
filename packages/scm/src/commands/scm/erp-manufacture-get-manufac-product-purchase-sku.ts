// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetManufacProductPurchaseSku extends MBSCommand {
  static description = '供应商-合作中产品SKU明细查询：在供应商详情页「合作中产品」(SPU列表)中点击某行展开时，按供应商ID(manufactureId)与该SPU产品ID(sid)查询其下所有SKU的采购明细，返回SKU编号、图片、标题、销量等级、状态、侵权/淘汰标记、累计采购笔数/量/金额、当前库存、开发员/采购员、首末采购日期等，渲染到二级子表格 twoContentTemplate。'

  static flags = {
    manufactureId: Flags.string({ description: '供应商ID。来源于页面URL查询串 sequenceid，即当前供应商详情页主键', required: true }),
    sid: Flags.string({ description: 'SPU产品ID。来源于合作中产品SPU列表被点击行的 data-id，用于查询该SPU下的SKU明细', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetManufacProductPurchaseSku)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/getManufacProductPurchaseSku', {}, { params: { "manufactureId": flags.manufactureId, "sid": flags.sid } })
    this.output(data)
  }
}
