// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetCompanyInfo extends MBSCommand {
  static description = '获取公司(地区)信息：FBA产品利润分析表页面加载时调用，获取当前用户可见的公司(地区)列表，用于渲染顶部“请选择地区”多选下拉框(#selectCity)。该接口无请求体参数，success 回调取 data.obj 数组，按 companyId/shortName 渲染为 <option>。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetCompanyInfo)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getCompanyInfo', {})
    this.output(data)
  }
}
