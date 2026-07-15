// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorMatchManageShop extends MBSCommand {
  static description = '匹配可管理店铺列表查询：进入批量下架/添加货架页面(addShelf.html)时自动调用，查询当前用户可管理的店铺列表，用于渲染顶部店铺下拉选择框(#ShopName)。无任何请求入参，返回店铺数组，前端模板仅使用店铺名称 shopName 作为下拉项的 value 与显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorMatchManageShop)

    const data = await this.client.post('/erpmonitor/erpmonitor/ReviseListingMonitor/matchManageShop', {})
    this.output(data)
  }
}
