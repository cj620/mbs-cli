// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsFinanceLingxingDataServiceParallelLingxingDownloadInfos extends MBSCommand {
  static description = '领星下载历史分页查询：下载历史页分页查询领星导出任务记录：按文件名、任务状态、创建时间区间筛选并分页，返回任务文件名、下载地址、状态、创建时间、表格总数、文件大小等列表数据。'

  static flags = {
    page: Flags.string({ description: '当前页码(pageInfo.page,默认1,来源el-pagination)', required: true }),
    total: Flags.string({ description: '总条数(pageInfo.total,前端分页状态随pageInfo透传,初始0,实际由响应count回填)' }),
    pageSize: Flags.string({ description: '每页条数(pageInfo.pageSize,默认50,可选50/100/200/300,来源el-pagination)', required: true }),
    status: Flags.string({ description: '任务状态(state.status,默认null,来源el-select)。FAILED=任务失败;COMPLETED=任务完成;IN_PROGRESS=任务进行中' }),
    taskName: Flags.string({ description: '文件名(state.taskName,模糊查询,默认空串,来源el-input)' }),
    shortCreateTime: Flags.string({ description: '创建时间-起始(state.shortCreateTime,来源datePicker start,默认空串)' }),
    longCreateTime: Flags.string({ description: '创建时间-结束(state.longCreateTime,来源datePicker end,默认空串)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsFinanceLingxingDataServiceParallelLingxingDownloadInfos)

    const data = await this.client.post('/finance-lingxing-data-service/LingxingPaging/parallelLingxingDownloadInfos', { "page": flags.page, "total": flags.total, "pageSize": flags.pageSize, "status": flags.status, "taskName": flags.taskName, "shortCreateTime": flags.shortCreateTime, "longCreateTime": flags.longCreateTime })
    this.output(data)
  }
}
