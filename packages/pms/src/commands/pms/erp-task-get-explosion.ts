// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskGetExplosion extends MBSCommand {
  static description = '销量下降(爆款监控)列表查询：首页"开发必做"面板中"销量下降"页签的分页查询：按复核/处理状态(checkStatus)分页拉取销量持续下降的 SPU 任务列表，返回 SPU 编号、产品名、日销量、库存、毛利率、开发员、任务推送/截止日期、处理备注等字段，用于渲染 #salesDownTemplate 表格。'

  static flags = {
    checkStatus: Flags.string({ description: '复核/处理状态，来源控件 #checkStatus。1=待处理,2=已处理；前端在 success 回调中写回每行 checkStatus' }),
    page: Flags.string({ description: '当前页码，首次固定为 1，翻页取 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数，固定传 10', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskGetExplosion)

    const data = await this.client.post('/erpTask/erpTask/developMustDo/getExplosion', { "checkStatus": flags.checkStatus, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
