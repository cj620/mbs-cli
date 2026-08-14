// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetShopConfigureByShopId extends MBSCommand {
  static description = '根据店铺ID查询亚马逊自动刊登店铺配置：打开自动刊登设置弹窗(showModal)时调用，按 shopId 查询该亚马逊店铺已保存的自动刊登配置(库存/平台费率/毛利/品牌/制造商/物流渠道/类目/VAT/国家/预刊登时间/自动刊登开关/UPC豁免/备货天数/跟卖移除等)，用于回填弹窗各表单控件；无配置时返回空对象，前端清空表单。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID。来源：被点击行/按钮的 data-shopid($(obj).data(\'shopid\'))，等同 baseData.shopId。以 URL 查询参数 ?shopId= 形式传递', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetShopConfigureByShopId)

    const data = await this.client.get('/erpProduct/erpProduct/amazonProductPublish/getShopConfigureByShopId', { params: { "shopId": flags.shopId } })
    this.output(data)
  }
}
