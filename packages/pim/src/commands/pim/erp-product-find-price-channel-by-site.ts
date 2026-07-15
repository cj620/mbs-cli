// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPriceChannelBySite extends MBSCommand {
  static description = '根据站点查询算价渠道列表：Shopee 自动刊登「设置店铺刊登参数」弹窗中，根据当前店铺所属站点(site)查询该站点可选的算价渠道列表，用于填充弹窗内算价渠道下拉框(#priceChannels)的选项。'

  static flags = {
    site: Flags.string({ description: '站点代码。来源 pubModalState.site(由 setPubModal 赋值,取自 findShopParamByShopname 返回的店铺 obj.site)。已知取值:TH/VN/MX/PH/SG/MY/ID/BR 等 Shopee 站点', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPriceChannelBySite)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductController/findPriceChannelBySite', {}, { params: { "site": flags.site } })
    this.output(data)
  }
}
