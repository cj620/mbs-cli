// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindFactoryMarketDelayOrder extends MBSCommand {
  static description = '工厂集市延迟订单-可借用运单号查询：根据输入的一批交易单号（逗号分隔，最多500个）查询工厂集市延迟订单，返回每个订单的基本信息及最多三组可借用运单号候选（含运单号、物流方式、原运费、原店铺、原订单号），供前端选择并提前上网。'

  static flags = {
    tradeIdStr: Flags.string({ description: '交易单号串(URL query)。来源文本域 #tradeIdStr，多个交易单号英文逗号分隔，一次最多500个；空值前端拦截。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindFactoryMarketDelayOrder)

    const data = await this.client.post('/erpOrder/erpOrder/ERPOrder/findFactoryMarketDelayOrder', {}, { params: { "tradeIdStr": flags.tradeIdStr } })
    this.output(data)
  }
}
