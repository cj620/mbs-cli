// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
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
