// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetCountryFromEs extends MBSCommand {
  static description = '获取发货地(国家)下拉列表：热销商品监控(店铺热销商品)页面初始化时调用，从 ES 中查询全部可选发货地(国家)列表，用于填充页面顶部筛选区 #countryFrome 多选下拉框。无任何请求参数，返回国家集合。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetCountryFromEs)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/getCountryFromEs', {})
    this.output(data)
  }
}
