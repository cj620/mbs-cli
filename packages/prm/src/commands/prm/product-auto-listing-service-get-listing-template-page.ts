// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmProductAutoListingServiceGetListingTemplatePage extends MBSCommand {
  static description = '刊登模板分页查询：根据 ERP SPU 与平台类型(platformType)分页查询该商品在指定平台下已存在的刊登模板列表；前端取返回列表首条记录的 id，用于刊登模板下拉跳转到对应平台的编辑页(回填模板id)。'

  static flags = {
    erpSpu: Flags.string({ description: 'ERP 商品 SPU 编号。来源：getCurrentSpu()=this.$route.query.spu 或父组件传入的 spu prop；为空时不发起请求', required: true }),
    platformType: Flags.string({ description: '平台类型编码。来源：platformTypeEnum 枚举接口返回项的 code（遍历 platformList 逐平台传入，如 TIKTOK/OZON 等平台对应的 code）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmProductAutoListingServiceGetListingTemplatePage)

    const data = await this.client.post('/gateway/product-auto-listing-service/listing/listingTemplate/getListingTemplatePage', { "erpSpu": flags.erpSpu, "platformType": flags.platformType })
    this.output(data)
  }
}
