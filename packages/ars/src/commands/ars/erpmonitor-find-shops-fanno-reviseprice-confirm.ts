// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFindShopsFannoRevisepriceConfirm extends MBSCommand {
  static description = '店铺列表查询(fanno提价店铺下拉)：fanno提价页面初始化时调用，获取当前用户可选的店铺列表，用于顶部店铺多选下拉(#checkShops)的渲染。请求体为空对象{}，无入参；返回店铺集合，每项含店铺名称与店铺ID，供勾选后回填 checkShop(店铺名)与 checkShopId(店铺ID)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFindShopsFannoRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/fannoRevisepriceConfirm/findShops', {})
    this.output(data)
  }
}
