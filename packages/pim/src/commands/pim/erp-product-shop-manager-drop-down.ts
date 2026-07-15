// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductShopManagerDropDown extends MBSCommand {
  static description = '开发经理下拉列表查询：获取 SKU 包裹/采样业务下「开发经理」下拉选项列表。前端进入「拍照采样批次核销表」页面时自动调用，返回开发经理 id 与姓名集合，用于「开发经理」多选下拉框；选中后再以其 id 联动查询其名下开发员。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductShopManagerDropDown)

    const data = await this.client.get('/erpProduct/erpProduct/skuPackage/shopManagerDropDown', { params: {} })
    this.output(data)
  }
}
