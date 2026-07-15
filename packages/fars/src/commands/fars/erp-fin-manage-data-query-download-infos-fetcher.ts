// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataQueryDownloadInfosFetcher extends MBSCommand {
  static description = '下载任务记录查询：「下载任务记录」页面分页查询下载任务列表：按所属公司、文件名、创建时间区间、任务状态、平台等条件筛选，返回任务列表（含文件名、创建人、状态、表格大小/总数、进度、sheet 信息、起止/刷新时间、错误摘要、所属公司等）及总记录数。'

  static flags = {
    type: Flags.string({ description: '查询类型（URL 查询参数，固定 1，硬编码于接口地址）', required: true }),
    taskName: Flags.string({ description: '文件名（筛选「文件名」输入框，来源控件 Input）' }),
    status: Flags.string({ description: '任务状态。枚举：FAILED=任务失败；COMPLETED=任务完成；IN_PROGRESS=任务进行中（来源控件 Select）' }),
    shortCreateTime: Flags.string({ description: '创建时间-起始（「创建时间」日期区间起，来源控件 DateRangePicker；默认空字符串）' }),
    longCreateTime: Flags.string({ description: '创建时间-结束（「创建时间」日期区间止，来源控件 DateRangePicker；默认空字符串）' }),
    companyId: Flags.string({ description: '所属公司。枚举：1=胤元；33=启元（来源控件 Select）' }),
    platform: Flags.string({ description: '平台（来源控件 Select，选项 OptionUtils.toOptions(Platform.list)；默认值取自 usePlatformQuery()）' }),
    pageSize: Flags.string({ description: '每页条数（默认 100，可选 100/200/300/400）', required: true }),
    page: Flags.string({ description: '当前页码（从 1 开始）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataQueryDownloadInfosFetcher)

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/queryDownloadInfosFetcher', { "type": flags.type, "taskName": flags.taskName, "status": flags.status, "shortCreateTime": flags.shortCreateTime, "longCreateTime": flags.longCreateTime, "companyId": flags.companyId, "platform": flags.platform, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
