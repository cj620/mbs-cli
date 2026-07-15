// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopParamByShopnameEbayProductController extends MBSCommand {
  static description = '查询店铺自动刊登参数(按店铺名)：在 eBay 自动刊登页面点击某店铺的设置齿轮(showModal)时调用，按店铺名 shopname 查询该店铺已保存的 SMT/eBay 自动刊登参数(站点、目标毛利率、库存、SPK/非SPK备货时长、屏蔽国家、刊登间隔、上架时间、每日上限、是否全托管)，用于回填设置自动刊登参数弹窗。'

  static flags = {
    shopname: Flags.string({ description: '店铺名称。来源:店铺列表项齿轮按钮的 data-shop 属性($(obj).data(\'shop\'))，以 URL query 形式拼接传递。用于按店铺查询其已保存的自动刊登参数', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopParamByShopnameEbayProductController)

    const data = await this.client.post('/erpProduct/erpProduct/ebayProductController/findShopParamByShopname', {}, { params: { "shopname": flags.shopname } })
    this.output(data)
  }
}
