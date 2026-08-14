// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorSaleDetails extends MBSCommand {
  static description = '3个月内新品刊登&销售情况查询：财务经理看板底部「3个月内新品刊登&销售情况」表格数据源：按 SKU 状态分组，返回近3个月新品的 SKU 数量、第1~4周刊登量/销量以及监控最后记录时间，前端据此渲染表格并计算单 SKU 本周平均刊登量。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorSaleDetails)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/saleDetails', {})
    this.output(data)
  }
}
