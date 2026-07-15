// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFindShopsEbayRevisepriceConfirm extends MBSCommand {
  static description = 'eBay提价确认-店铺下拉列表查询：eBay提价确认页面初始化时加载当前用户可见的店铺列表，用于店铺单选下拉框(#selectShop)与多选店铺勾选框(#ulallchk)的数据源。请求体为空JSON对象，无入参；返回店铺集合，逐项含店铺ID与店铺名称。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFindShopsEbayRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/ebayRevisepriceConfirm/findShops', {})
    this.output(data)
  }
}
