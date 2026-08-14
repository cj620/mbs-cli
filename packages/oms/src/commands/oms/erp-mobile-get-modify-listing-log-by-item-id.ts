// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetModifyListingLogByItemId extends MBSCommand {
  static description = '刊登/上架修改操作日志查询：根据商品(父SPU)ID查询该商品的刊登/上架修改操作日志列表，返回操作人、操作时间、修改结果与描述，用于在线商品详情页"操作日志"模块展示（前端拆分为前10条与其余两段渲染）。'

  static flags = {
    parentSPUId: Flags.string({ description: '商品父SPU的ID。来源URL查询参数 itemId(GetQueryString("itemId"))，无值时固定传空串。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetModifyListingLogByItemId)

    const data = await this.client.post('/erpMobile/erpMobile/hotProductListing/getModifyListingLogByItemId', { "parentSPUId": flags.parentSPUId })
    this.output(data)
  }
}
