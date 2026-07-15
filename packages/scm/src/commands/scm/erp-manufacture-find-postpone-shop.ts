// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindPostponeShop extends MBSCommand {
  static description = '延长收货-店铺/负责人/物流方式下拉数据查询：进入“延长收货订单”报表页时初始化加载，返回店铺(店铺类型)列表、店铺负责人(操作员)列表、物流方式列表三组下拉数据，分别填充页面顶部的“店铺/店铺负责人/物流方式”三个下拉筛选框。该接口为 GET 且无任何请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindPostponeShop)

    const data = await this.client.get('/erpManufacture/erpManufacture/postponeInfo/findPostponeShop', { params: {} })
    this.output(data)
  }
}
