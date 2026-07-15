// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimOzonProductServiceId extends MBSCommand {
  static description = '获取Ozon商品图片编辑信息：Ozon 图片编辑页进入时，按 listing 记录ID(URL路径变量)拉取该 Ozon 商品的编辑信息，前端据此渲染主图、附图列表(imgUrl JSON串)、颜色样本图，并把原始返回对象整体缓存(rawData)，用于后续 1:1还原/3:4裁剪(取 publishSpu/erpSpu/erpSku)及提交保存(原样回传)。'

  static flags = {}

  static args = {
    id: Args.string({ required: true, description: 'listing 记录ID（URL路径变量，拼接于接口路径末尾 /getOzonProductEditInfo/{id}）。来源：前端路由参数 route.params.id' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimOzonProductServiceId)

    const data = await this.client.get(`/gateway/ozon-product-service/ozonProductEdit/getOzonProductEditInfo/${args.id}`, { params: {} })
    this.output(data)
  }
}
