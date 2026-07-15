// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetAmazonMultiStructure extends MBSCommand {
  static description = '获取多变体结构：获取多变体结构'

  static flags = {
    requestId: Flags.string({ description: 'amazon_publish_request表的id' }),
    itemName: Flags.string({ description: '标题' }),
    shopName: Flags.string({ description: '店铺名称' }),
    spu: Flags.string({ description: 'spu' }),
    id: Flags.integer({ description: 'productTypeId' }),
    productType: Flags.string({ description: '类型' }),
    site: Flags.string({ description: 'site' }),
    variationTheme: Flags.string({ description: '主题类型' }),
    mainCategory: Flags.string({ description: '主类目（字段名推断,语义待核实）' }),
    publishType: Flags.string({ description: '刊登类型' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetAmazonMultiStructure)

    const data = await this.client.post('/yypms/pms/amazon/new/getAmazonMultiStructure', { "requestId": flags.requestId, "itemName": flags.itemName, "shopName": flags.shopName, "spu": flags.spu, "id": flags.id, "productType": flags.productType, "site": flags.site, "variationTheme": flags.variationTheme, "mainCategory": flags.mainCategory, "publishType": flags.publishType })
    this.output(data)
  }
}
