// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetUntreatedNum extends MBSCommand {
  static description = '售后登记表-未处理数量查询：商品列表页签栏（productTab）加载时调用，查询当前用户「售后登记表」中未处理的记录数量，用于在「售后登记表」页签上展示红色未读角标（badge-untreated-num）。返回值大于0时显示角标并填入数量。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetUntreatedNum)

    const data = await this.client.get('/erpProduct/erpProduct/product/getUntreatedNum', { params: {} })
    this.output(data)
  }
}
