// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSkuPackageCreateOper extends MBSCommand {
  static description = 'SKU包装-提交人(创建人)下拉列表查询：SKU包装信息报表页加载时调用，获取该报表数据中所有「提交人(创建人)」去重列表，用于顶部「请选择提交人」筛选下拉框的选项数据。返回值为提交人姓名字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSkuPackageCreateOper)

    const data = await this.client.get('/erpProduct/erpProduct/skuPackage/getSkuPackageCreateOper', { params: {} })
    this.output(data)
  }
}
