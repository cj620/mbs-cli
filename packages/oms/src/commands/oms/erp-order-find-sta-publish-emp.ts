// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindStaPublishEmp extends MBSCommand {
  static description = '按人员统计上新发布报表查询：上新发布统计报表（按人员）：按所选月份(日期)与可选大酋长，分页查询各销售人员在美国/英国/德国/澳大利亚/加拿大/法国/爱尔兰/意大利/奥地利/西班牙等站点的上新量与占比，并汇总毛利额、运营毛利率、销售额、在线量。'

  static flags = {
    date: Flags.string({ description: '统计月份/日期(格式 yyyy-MM-dd)，来源控件 #date(type=date)，默认当天；为空时拦截不发请求', required: true }),
    bigChief: Flags.string({ description: '大酋长，来源 #bigChief 下拉选中文本；含「]」则取最后一个「]」之后部分；未选时传空字符串' }),
    currentPage: Flags.string({ description: '当前页码，首次固定为1，翻页取分页插件 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数，前端固定传 50', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindStaPublishEmp)

    const data = await this.client.post('/erpOrder/erpOrder/statisticsPublish/findStaPublishEmp', { "date": flags.date, "bigChief": flags.bigChief, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
