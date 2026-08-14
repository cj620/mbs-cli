// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindStaPublishBigChief extends MBSCommand {
  static description = '大酋长上新统计查询：上新发布统计-按大酋长统计：按所选月份(date)与大酋长(bigChief/allChief)统计每位大酋长的毛利额、运营毛利率、销售额、在线量、总上新量、上新/在线占比，以及美国/英国/德国/澳大利亚/加拿大/法国/爱尔兰/意大利/奥地利/西班牙 10 个站点的上新量与占比。'

  static flags = {
    date: Flags.string({ description: '统计月份/日期(格式 yyyy-MM-dd)，来源日期控件 #date，默认当天；为空则前端校验拦截不发起请求', required: true }),
    bigChief: Flags.string({ description: '大酋长名称，来源下拉 #bigChief 选中项文本(含 ] 时取 ] 之后部分)，未选时传空串' }),
    allChief: Flags.string({ description: '全部大酋长名称(逗号拼接)，由 getBigChief2 返回列表的 name 去括号前缀后 , 拼接' }),
    currentPage: Flags.string({ description: '当前页码，来源 baseData.currentPage，固定从 1 开始' }),
    pageSize: Flags.string({ description: '每页条数，来源 baseData.pageSize，固定 100' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindStaPublishBigChief)

    const data = await this.client.post('/erpOrder/erpOrder/statisticsPublish/findStaPublishBigChief', { "date": flags.date, "bigChief": flags.bigChief, "allChief": flags.allChief, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
