// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSkuImages extends MBSCommand {
  static description = '获取SKU图片列表：根据 SKU 查询该商品的图片列表，返回每张图片的URL与图片记录序号。前端用于 SKU 详情页主图轮播展示(exzoom)与编辑图片弹窗(可删除/设为主图)。前端在拿到 imageUrl 后会把图床域名 http://instudio.gnway.cc 替换为 http://www.instudio.me 再渲染。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编号。来源：前端页面URL查询参数 SKU(GetQueryString(\'SKU\'))，以 ?sku= 形式拼接到接口地址；无对应输入控件，由详情页上下文带入', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSkuImages)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getSkuImages', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
