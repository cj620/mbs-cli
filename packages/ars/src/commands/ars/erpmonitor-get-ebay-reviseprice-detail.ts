// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetEbayRevisepriceDetail extends MBSCommand {
  static description = 'eBay提价任务统计详情查询：进入eBay提价页时调用，查询当天提价任务的各项统计数字（计算中任务数、等待提价listing数、提价中数、今/昨提价失败数、今/昨提价成功数），渲染到页面头部状态栏。该接口无请求参数，POST 空请求体。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetEbayRevisepriceDetail)

    const data = await this.client.post('/erpmonitor/erpmonitor/ebayRevisepriceConfirm/getEbayRevisepriceDetail', {})
    this.output(data)
  }
}
