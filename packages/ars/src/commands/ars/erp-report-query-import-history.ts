// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportQueryImportHistory extends MBSCommand {
  static description = '支付宝采购账单-导入历史查询(分摊价导入历史)：查询「支付宝采购账单/分摊价」文件的导入历史记录：按操作人、操作时间区间、解析状态分页过滤(fileType 固定=2),返回导入文件名、操作人、操作时间、解析状态、总/成功/失败行数、导入结果描述及记录ID(用于下载分摊结果)。'

  static flags = {
    fileType: Flags.string({ description: '文件类型,固定传 2(标识支付宝采购账单/分摊价导入历史)', required: true }),
    oper: Flags.string({ description: '操作人,来源输入框 postdata.oper,按操作人过滤' }),
    operTimeStart: Flags.string({ description: '操作时间-开始,来源日期选择器,格式 YYYY-MM-DD' }),
    operTimeEnd: Flags.string({ description: '操作时间-结束,来源日期选择器,格式 YYYY-MM-DD' }),
    status: Flags.string({ description: '解析状态,来源下拉。枚举：0=待解析;1=解析成功;2=解析失败(未选为空字符串)' }),
    currentPage: Flags.string({ description: '当前页码,来源 search(index) 入参(为空时传空字符串),分页从1开始' }),
    pageSize: Flags.string({ description: '每页条数,固定传 50', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportQueryImportHistory)

    const data = await this.client.post('/erpReport/erpReport/zfbPurchaseBill/queryImportHistory', { "fileType": flags.fileType, "oper": flags.oper, "operTimeStart": flags.operTimeStart, "operTimeEnd": flags.operTimeEnd, "status": flags.status, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
