// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductShopId extends MBSCommand {
  static description = '获取店铺刊登大类(一级类目)列表：亚马逊自动刊登配置弹窗(showModal)打开时，按店铺ID查询该店铺可选的刊登「大类(一级类目)」名称列表，用于渲染 #firstCategory 多选下拉(select2)。店铺ID以路径参数形式传入。'

  static flags = {}

  static args = {
    shopId: Args.string({ required: true, description: '店铺ID(路径参数)。取自 baseData.shopId，在 showModal(obj) 中由被点击店铺元素的 data-shopid 赋值($(obj).data("shopid"))，来源控件为店铺列表「设置/配置」按钮' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductShopId)

    const data = await this.client.get(`/erpProduct/erpProduct/amazonProductPublish/getFirstCategory/${args.shopId}`, { params: {} })
    this.output(data)
  }
}
