// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataQueryUploadInfosFetcher extends MBSCommand {
  static description = '上传任务记录列表查询：财务「上传任务记录」分页查询：按所属公司/文件名/创建时间区间/任务状态/平台等条件筛选导入任务，返回任务记录列表（文件名、创建人、成功/失败总数、状态、文件大小、表格总数等）及总记录数，供前端表格分页展示。'

  static flags = {
    type: Flags.string({ description: '【URL查询参数】任务类型，固定1（上传任务记录）', required: true }),
    taskName: Flags.string({ description: '文件名（来源：文件名输入框Input，模糊筛选）' }),
    status: Flags.string({ description: '任务状态。枚举：FAILED=任务失败；COMPLETED=任务完成；IN_PROGRESS=任务进行中（来源：状态下拉Select）' }),
    shortCreateTime: Flags.string({ description: '创建时间-起始（来源：创建时间DateRangePicker起值，默认\'\'）' }),
    longCreateTime: Flags.string({ description: '创建时间-结束（来源：创建时间DateRangePicker止值，默认\'\'）' }),
    companyId: Flags.string({ description: '所属公司。枚举：1=胤元；33=启元（来源：所属公司下拉Select）' }),
    platform: Flags.string({ description: '平台（来源：平台下拉Select，选项OptionUtils.toOptions(Platform.list)；默认取路由query platformId）' }),
    pageSize: Flags.string({ description: '每页条数，默认100，可选[100,200,300,400]（来源：分页组件）', required: true }),
    page: Flags.string({ description: '当前页码（来源：分页组件，初始1）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataQueryUploadInfosFetcher)

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/queryUploadInfosFetcher', { "type": flags.type, "taskName": flags.taskName, "status": flags.status, "shortCreateTime": flags.shortCreateTime, "longCreateTime": flags.longCreateTime, "companyId": flags.companyId, "platform": flags.platform, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
