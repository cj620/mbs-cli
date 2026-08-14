// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpLogFindLogExceptionInformation extends MBSCommand {
  static description = 'IP异常登录报表查询：按时间区间分页查询员工登录 IP 异常信息，返回按员工聚合的异常记录（员工、登录IP、异常IP、异常登录详情列表、创建时间、备注）及分页汇总（总条数/总页数）。前端「IP异常报表」页面据此渲染，每页固定20条。'

  static flags = {
    starttime2: Flags.string({ description: '开始时间。来源日期控件 #starttime2(input type=date),格式 yyyy-MM-dd;前端校验开始时间不得大于结束时间' }),
    endtime2: Flags.string({ description: '结束时间。来源日期控件 #endtime2(input type=date),格式 yyyy-MM-dd' }),
    currentPage: Flags.string({ description: '当前页码。首次搜索固定为1;分页回调取分页组件 api.getCurrent();每页固定20条', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpLogFindLogExceptionInformation)

    const data = await this.client.post('/erpLog/erpLog/loginLogController/findLogExceptionInformation', { "starttime2": flags.starttime2, "endtime2": flags.endtime2, "currentPage": flags.currentPage })
    this.output(data)
  }
}
