// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPublishInfoSkuNew extends MBSCommand {
  static description = 'SKU刊登信息查询(近30天)：根据SKU查询该商品近30天已刊登的数据排名(图片、刊登标题、销量、站点/发货地、售价、店铺、平台SKU、大酋长/客户经理、店铺类型/运营状态、刊登日期等),并返回当前用户名下未刊登该商品的店铺及负责人。支持是否全公司、低分筛选、仅白名单店铺、仅白名单SKU等开关。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编号(来源前端地址栏 GetQueryString(\'SKU\'),查询主键)', required: true }),
    isAll: Flags.string({ description: '是否查看全公司,前端固定写死为1(1=全公司,0=本人)' }),
    isLowRate: Flags.string({ description: '低分(低星)筛选,来源 GetQueryString(\'isLowRate\'),可为空(取值含义待人工确认)' }),
    whiteShopOnly: Flags.string({ description: '是否仅看白名单店铺,来源 GetQueryString(\'whiteShopOnly\'),可为空(待人工确认)' }),
    whiteItemOnly: Flags.string({ description: '是否仅看白名单SKU(白sku),来源 GetQueryString(\'whiteItemOnly\'),可为空(待人工确认)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPublishInfoSkuNew)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getPublishInfoSkuNew', {}, { params: { "sku": flags.sku, "isAll": flags.isAll, "isLowRate": flags.isLowRate, "whiteShopOnly": flags.whiteShopOnly, "whiteItemOnly": flags.whiteItemOnly } })
    this.output(data)
  }
}
