// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetAmazonNotFbaShop extends MBSCommand {
  static description = '亚马逊非FBA店铺列表查询：亚马逊调价页面初始化拉取当前用户可见的亚马逊非FBA店铺列表，用于渲染店铺筛选下拉与多选店铺框。请求体固定为空对象，无入参；返回店铺数组，元素含 shopId/shopName 等字段。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetAmazonNotFbaShop)

    const data = await this.client.post('/erpmonitor/erpmonitor/amaoznRevisepriceConfirm/getAmazonNotFbaShop', {})
    this.output(data)
  }
}
