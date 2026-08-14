// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetWishRatingResults extends MBSCommand {
  static description = '获取wish评论信息：按 Wish listing 的 itemId 查询该商品的评价汇总信息(标题/主图/平均分/各星级评价数/误导风险处理记录)及其全部买家评论明细列表(results)，前端用于「查看评论」弹窗渲染星级、头像、评论内容与评论图片。'

  static flags = {
    itemId: Flags.string({ description: 'Wish 商品 listing 的 itemId(平台商品唯一标识)，取自列表行按钮的 data-itemid 属性；后端校验为空时返回 500 \'参数不能为空\'', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetWishRatingResults)

    const data = await this.client.post('/erpProduct/erpProduct/wishRating/getWishRatingResults', { "itemId": flags.itemId })
    this.output(data)
  }
}
