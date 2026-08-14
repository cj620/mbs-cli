// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGet1688GoodsInfo extends MBSCommand {
  static description = '通过商品URL获取1688商品数据：通过商品URL获取1688商品数据'

  static flags = {
    goodsUrl: Flags.string({ description: '货品URL（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGet1688GoodsInfo)

    const data = await this.client.post('/yypms/pms/developerMission/get1688GoodsInfo', {}, { params: { "goodsUrl": flags.goodsUrl } })
    this.output(data)
  }
}
