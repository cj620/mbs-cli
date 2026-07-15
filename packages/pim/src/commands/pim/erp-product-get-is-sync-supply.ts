// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetIsSyncSupply extends MBSCommand {
  static description = '查询SKU是否同步供应商标记：SKU详情页加载时查询当前SKU“是否同步供应商”的开关状态，用于回显页面右上角 #skuIsSync 复选框（勾选=已同步）。返回 obj 为同步标记：1=同步、0=不同步、null=未设置（未设置时隐藏开关区域）。与写接口 /erpProduct/erpProduct/productDetails/updateIsSyncSupply 成对使用。'

  static flags = {
    sku: Flags.string({ description: 'SKU 编码（商品SKU唯一标识），以URL查询参数传递，来源于页面URL的 SKU 参数(GetQueryString("SKU"))', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetIsSyncSupply)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getIsSyncSupply', { "sku": flags.sku })
    this.output(data)
  }
}
