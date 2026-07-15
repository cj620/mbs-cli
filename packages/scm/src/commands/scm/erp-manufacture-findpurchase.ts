// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindpurchase extends MBSCommand {
  static description = '固定供应商采购员查询：供应商详情页加载时调用，查询全部「固定供应商」的采购员清单，用于「采购员」下拉框（id=fixedmanuname / fixedmanuname2）选项渲染。无请求参数，返回采购员ID与姓名列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindpurchase)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/findpurchase', {})
    this.output(data)
  }
}
