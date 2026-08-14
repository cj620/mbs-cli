// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceExcelList extends MBSCommand {
  static description = '账单导入Excel历史记录列表查询：查询账单导入(Excel上传)的历史记录列表，返回每次上传的文件名、上传时间、上传人、总记录/成功数/失败数、成功金额、状态及失败订单文件等信息，供 report/excelList.html 页面渲染历史记录表格。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceExcelList)

    const data = await this.client.post('/erpFinance/erpFinance/bill/excelList', {})
    this.output(data)
  }
}
