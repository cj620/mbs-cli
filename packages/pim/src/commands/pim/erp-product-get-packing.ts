// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPacking extends MBSCommand {
  static description = '包材下拉列表查询：查询全部可选包材(包装材料)列表，用于 SKU 详情页"包材"下拉框(#getPackingContent)的选项渲染。前端通过 art-template getPackingTemplate 把返回的 obj 数组渲染为 <option value="包材ID">包材名称</option>。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPacking)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getPacking', {})
    this.output(data)
  }
}
