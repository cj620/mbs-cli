// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportListDailySaleFee extends MBSCommand {
  static description = '订阅费导入记录列表查询：查询「订阅费/开号店铺成本/店铺商标成本」导入文件的解析记录列表：按操作人、操作时间区间、解析状态分页查询，返回文件名、费用类型、操作人、创建/更新时间、解析状态及导入结果等字段。'

  static flags = {
    fileType: Flags.string({ description: '文件类型，固定传1(订阅费/店铺成本类导入)', required: true }),
    oper: Flags.string({ description: '操作人，来源输入框 postdata.oper，模糊查询' }),
    startTime: Flags.string({ description: '操作开始时间，来源日期选择器 operTimeStart，格式 YYYY-MM-DD' }),
    endTime: Flags.string({ description: '操作结束时间，来源日期选择器 operTimeEnd，格式 YYYY-MM-DD' }),
    status: Flags.string({ description: '解析状态。0=待解析;1=解析中;3=解析成功;2=解析失败' }),
    pageNo: Flags.string({ description: '当前页码，来源 search(index) 入参，初始为1，无值传空串', required: true }),
    pageSize: Flags.string({ description: '每页条数，固定50', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportListDailySaleFee)

    const data = await this.client.post('/erpReport/erpReport/dailySaleFee/list', { "fileType": flags.fileType, "oper": flags.oper, "startTime": flags.startTime, "endTime": flags.endTime, "status": flags.status, "pageNo": flags.pageNo, "pageSize": flags.pageSize })
    this.output(data)
  }
}
