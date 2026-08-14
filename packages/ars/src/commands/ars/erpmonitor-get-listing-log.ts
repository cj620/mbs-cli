// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetListingLog extends MBSCommand {
  static description = 'Listing操作日志查询：爆款商品监控(店铺爆款)列表中，点击某条 listing 查看其历史操作日志（改价、调库存等操作记录）。入参为该 listing 的 SPU/商品ID(spuId)，返回该 listing 的操作日志时间线列表，前端以 el-timeline 时间线渲染。'

  static flags = {
    spuId: Flags.string({ description: 'listing 的 SPU/商品ID（前端传入 item.itemId，即该 listing 在对应平台的商品标识），按此 ID 查询其操作日志', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetListingLog)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/getListingLog', { "spuId": flags.spuId })
    this.output(data)
  }
}
