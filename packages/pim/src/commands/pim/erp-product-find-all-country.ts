// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindAllCountry extends MBSCommand {
  static description = '查询全部主销国家(下拉选项)：商品SPU管理(管理版)筛选区初始化时调用，拉取全部主销国家选项列表，填充到 kingCountriesOptions，供主销国家多选下拉框渲染。无请求参数，返回国家选项数组(以 name 作为下拉项的 label 与 value)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindAllCountry)

    const data = await this.client.post('/erpProduct/erpProduct/product/findAllCountry', {})
    this.output(data)
  }
}
