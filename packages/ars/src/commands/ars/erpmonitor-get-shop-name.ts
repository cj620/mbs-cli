// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetShopName extends MBSCommand {
  static description = '查询店铺列表(下拉)：商品统计页在未选择平台(平台下拉为空)时，拉取全部可见店铺列表，用于填充"请选择店铺"下拉框；每项包含店铺ID与店铺名称，供后续按店铺过滤商品统计使用。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetShopName)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/getShopName', {})
    this.output(data)
  }
}
