// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductPictureSearchProductByUrl extends MBSCommand {
  static description = '以图搜款(按图片URL搜索相似SKU)：在 SPU 管理列表商品图片上点击「搜索相似SKU」放大镜图标，将该商品主图URL提交后端做以图搜图，返回匹配到的相似商品SKU集合；前端把结果写入 localStorage(arrSkus)，再跳转 SPU 管理页(flag=6)，以批量SKU(batchSku)方式回填搜索框并重新查询，从而展示所有相似款。'

  static flags = {
    url: Flags.string({ description: '商品主图图片URL(来源:商品列表行图片『搜索相似SKU』图标传入的 value.picture)，作为以图搜图的检索图源', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductPictureSearchProductByUrl)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/pictureSearchProductByUrl', { "url": flags.url })
    this.output(data)
  }
}
