// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindOverTwentyProWeek extends MBSCommand {
  static description = '7天内超过20单的产品个数(独立优化师周报)：按优化师(erpName)和时间区间，分页查询该优化师近7天内出单量超过20单的产品(SPU)列表，返回 SPU 图片/编号/产品名/属性/出单量/开发员/创建时间，并附总条数与总页数用于分页。'

  static flags = {
    beginTime: Flags.string({ description: '开始时间(查询区间起始,格式 yyyy-MM-dd)。来源:日期控件 #beginTime,为空时取 URL 参数 beginTime', required: true }),
    endTime: Flags.string({ description: '结束时间(查询区间结束,格式 yyyy-MM-dd)。来源:日期控件 #endTime,为空时取 URL 参数 endTime', required: true }),
    erpName: Flags.string({ description: '优化师名称(独立优化师)。来源:URL 参数 erpName(decodeURI 解码)', required: true }),
    currentPage: Flags.string({ description: '当前页码。首次请求固定为 1,分页回调取分页组件 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定 100)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindOverTwentyProWeek)

    const data = await this.client.post('/erpOrder/erpOrder/independentOptimizerReport/findOverTwentyProWeek', { "beginTime": flags.beginTime, "endTime": flags.endTime, "erpName": flags.erpName, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
