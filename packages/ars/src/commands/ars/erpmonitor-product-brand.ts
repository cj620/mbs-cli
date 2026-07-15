// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorProductBrand extends MBSCommand {
  static description = '热销商品监控-商品品牌下拉查询：进入热销商品监控页(shopHotProducts2)时调用，加载"商品品牌"筛选下拉框的全部可选品牌列表。无请求参数，返回品牌集合(品牌ID + 品牌名称)，前端以 brandName 作为选项的 label 与 value。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorProductBrand)

    const data = await this.client.get('/erpmonitor/erpmonitor/hotProductMonitor/productBrand', { params: {} })
    this.output(data)
  }
}
