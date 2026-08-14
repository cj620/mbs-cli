// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindOtherInfringement extends MBSCommand {
  static description = '查询其他侵权listing信息：根据侵权 SKU 列表查询其它平台上的侵权 listing 信息，返回侵权商品的图片、标题、店铺、商品ID、SKU、售价、30天销量、浏览量、收藏量等，用于「侵权listing信息」页面表格展示。'

  static flags = {
    infrigingSkus: Flags.string({ description: '侵权SKU（标识；从当前页面地址栏 ?infrigingSkus= 取得后原样拼接到接口URL，无单位、无固定枚举）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindOtherInfringement)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findOtherInfringement', {}, { params: { "infrigingSkus": flags.infrigingSkus } })
    this.output(data)
  }
}
