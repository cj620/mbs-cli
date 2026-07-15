// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopeeShop extends MBSCommand {
  static description = 'Shopee店铺列表查询：Shopee批量删除页面进入时调用，查询当前用户可见的Shopee店铺名称列表，用于渲染搜索区店铺多选下拉(#shopName)与生成删除任务弹窗店铺多选下拉(#creatShop)。无入参，返回店铺名称字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopeeShop)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductController/findShopeeShop', {})
    this.output(data)
  }
}
