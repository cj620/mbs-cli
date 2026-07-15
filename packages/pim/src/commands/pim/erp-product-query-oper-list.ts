// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductQueryOperList extends MBSCommand {
  static description = '认领人下拉列表查询：进入「独立站产品认领」页面时加载，返回可作为认领人筛选项的员工列表，用于渲染顶部「认领人」多选下拉框(#queryOperList)。该请求无任何请求参数(空 body)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductQueryOperList)

    const data = await this.client.post('/erpProduct/erpProduct/productClaim/queryOperList', {})
    this.output(data)
  }
}
