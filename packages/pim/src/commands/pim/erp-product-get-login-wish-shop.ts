// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetLoginWishShop extends MBSCommand {
  static description = '获取当前登录用户Wish店铺列表：wish低分评价页面初始化时调用，根据当前登录用户身份返回其可见/管理的Wish店铺列表，用于填充页面顶部「店铺」筛选下拉框(#commodity)。请求不携带任何业务参数，店铺范围由后端依据登录态自动判定。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetLoginWishShop)

    const data = await this.client.post('/erpProduct/erpProduct/wishRating/getLoginWishShop', {})
    this.output(data)
  }
}
