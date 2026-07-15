// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishFindShopParamByShopname extends MBSCommand {
  static description = '按店铺名查询(TikTok)自动刊登参数：在「TikTok自动刊登」页面点击某店铺的「设置」齿轮时调用，按店铺名称查询该店铺已保存的自动刊登参数（站点、分类、毛利率、折扣、平台费率、上架时间、刊登间隔、是否自动刊登、算价渠道、库存、刊登数等），用于回显自动刊登参数设置弹窗。'

  static flags = {
    shopname: Flags.string({ description: '店铺名称（URL query 参数）。来源：被点击「设置」齿轮元素的 data-shop 属性值，即该店铺名称', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishFindShopParamByShopname)

    const data = await this.client.post('/erpPublish/erpPublish/tiktokProductController/findShopParamByShopname', {}, { params: { "shopname": flags.shopname } })
    this.output(data)
  }
}
