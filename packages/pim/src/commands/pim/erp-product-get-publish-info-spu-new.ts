// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPublishInfoSpuNew extends MBSCommand {
  static description = 'SPU刊登信息查询(新)：SPU详情页「刊登信息」面板查询：传入SPU与白名单/低分等筛选开关，返回该SPU在各平台店铺的刊登明细列表(图片、标题、销量、售价、店铺、负责人、平台SPU、刊登日期等)，以及当前用户名下尚未刊登该SPU的店铺列表；同时返回数据更新时间。'

  static flags = {
    spu: Flags.string({ description: 'SPU编号(主键查询条件)，取自页面URL参数 SPU(GetQueryString(\'SPU\'))', required: true }),
    isAll: Flags.string({ description: '是否查看全部，前端固定传 0(仅本人/默认范围)', required: true }),
    isLowRate: Flags.string({ description: '是否查看低评分刊登。来源复选框 #isViewLowScore，勾选=1，未勾选=0' }),
    whiteShopOnly: Flags.string({ description: '是否仅查看白名单店铺。来源复选框 #isViewWhiteList，勾选=1，未勾选=0' }),
    whiteItemOnly: Flags.string({ description: '是否仅查看白名单商品(白SKU)。来源复选框 #whiteItemOnly，勾选=1，未勾选=0' }),
    isWhiteItem: Flags.string({ description: '是否白名单商品标记。来源复选框 #isWhiteItem(全局变量 isWhiteItem)，勾选=1，未勾选=0' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPublishInfoSpuNew)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getPublishInfoSpuNew', { "spu": flags.spu, "isAll": flags.isAll, "isLowRate": flags.isLowRate, "whiteShopOnly": flags.whiteShopOnly, "whiteItemOnly": flags.whiteItemOnly, "isWhiteItem": flags.isWhiteItem })
    this.output(data)
  }
}
