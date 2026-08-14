// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindShopBySearch extends MBSCommand {
  static description = '查询当前登陆人店铺信息(搜索)：查询当前登陆人店铺信息(搜索)'

  static flags = {
    pt: Flags.string({ description: 'PT（字段名推断,语义待核实）' }),
    keyword: Flags.string({ description: '关键词（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindShopBySearch)

    const data = await this.client.post('/yypms/pms/lazadaSinglepublishInfoController/findShopBySearch', { "pt": flags.pt, "keyword": flags.keyword })
    this.output(data)
  }
}
