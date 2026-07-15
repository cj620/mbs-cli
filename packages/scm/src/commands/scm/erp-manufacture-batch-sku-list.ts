// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureBatchSkuList extends MBSCommand {
  static description = '客户订单-批量SKU明细列表查询：客户详情页订单列表点击行展开（第二层）时，按订单批量SKU(batchSku)查询其下属 SKU 明细列表，返回每个 SKU 的图片、编号、名称、商品属性、销量等级、近7/30/90天销量、库存、在途、开发员及开发时间，用于渲染子表 twoContentTemplate。'

  static flags = {
    batchSku: Flags.string({ description: '批量SKU编号（订单行的 batchSku）。来源：被点击行 data-id 属性，作为查询参数拼接到 URL；用于查询该批量SKU下的 SKU 明细列表。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureBatchSkuList)

    const data = await this.client.post('/erpManufacture/erpManufacture/customer/batchSkuList', { "batchSku": flags.batchSku })
    this.output(data)
  }
}
