// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindStaPublishSite extends MBSCommand {
  static description = '站点周期上新统计查询：刊登统计-按站点统计：传入某一日期(date)，返回各站点在四个统计周期(周期标题由 title 给出)下的销售额、周期上新量、在线量、周期上新占比，前端按站点行渲染统计表格。'

  static flags = {
    date: Flags.string({ description: '统计日期，格式 yyyy-MM-dd；来源页面日期控件 #time(type=date，加载默认当天)。为空前端拦截提示，不发起请求', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindStaPublishSite)

    const data = await this.client.post('/erpOrder/erpOrder/statisticsPublish/findStaPublishSite', {}, { params: { "date": flags.date } })
    this.output(data)
  }
}
