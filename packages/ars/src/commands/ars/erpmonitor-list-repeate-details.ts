// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorListRepeateDetails extends MBSCommand {
  static description = '重复铺货/重复标题详情查询：根据一批 SPU 商品ID(itemId,逗号拼接)批量查询每个 SPU 的重复铺货与重复标题明细，返回每个商品对应的重复 SPU 列表与重复标题列表(各含目标 itemId 与跳转 url)，用于店铺重复标题列表页的重复详情列渲染跳转链接。'

  static flags = {
    itemId: Flags.string({ description: 'SPU 商品ID列表，多个以英文逗号拼接的字符串；来源 sessionStorage[\'ids\'](queryRepeatSpuTitleOfShop 返回的 content[i].spuId 集合)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorListRepeateDetails)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/listRepeateDetails', { "itemId": flags.itemId })
    this.output(data)
  }
}
