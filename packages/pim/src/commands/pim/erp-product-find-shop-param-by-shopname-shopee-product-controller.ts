// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopParamByShopnameShopeeProductController extends MBSCommand {
  static description = '查询店铺自动刊登参数(按店铺名)：Shopee 自动刊登页打开店铺刊登参数弹窗(showModal)时，按店铺名(shopname)查询该店铺已保存的自动刊登参数(站点/算价渠道/一二级分类/毛利率/折扣率/平台费率/库存/刊登数量/间隔/时间/捆绑/水印/托管等)，用于回显弹窗各控件。入参经 URL 查询串 shopname 传递，无请求体。'

  static flags = {
    shopname: Flags.string({ description: '店铺名称(URL查询参数)。取自被点击元素 data-shop，定位该店铺的自动刊登参数配置', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopParamByShopnameShopeeProductController)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductController/findShopParamByShopname', { "shopname": flags.shopname })
    this.output(data)
  }
}
