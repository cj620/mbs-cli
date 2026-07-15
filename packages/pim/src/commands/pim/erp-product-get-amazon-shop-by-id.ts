// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAmazonShopById extends MBSCommand {
  static description = '根据店铺ID查询Amazon店铺信息：商品导出新建页选择 Amazon 店铺(下拉控件 #shopnames)后，按所选店铺 sid 查询该店铺详情，回填品牌名称(platformshopname)与店铺URL名(amazonurlname)到表单。店铺ID以 URL query 参数 shopid 传递，无请求体。'

  static flags = {
    shopid: Flags.string({ description: '店铺ID(URL query 参数)。取自 Amazon 店铺下拉控件 #shopnames 的选中值，即店铺 sid(选项 value 来源于 getAmazonShop 返回的 v.sid)。无请求体。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAmazonShopById)

    const data = await this.client.post('/erpProduct/erpProduct/productReport/getAmazonShopById', {}, { params: { "shopid": flags.shopid } })
    this.output(data)
  }
}
