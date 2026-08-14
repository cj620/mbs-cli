// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorLoan extends MBSCommand {
  static description = '押款（可放款）监控查询：对账单监控：按“可放款时间”查询各账号（店铺）押款金额、币种及可放款时间，分页返回（每页50条）。页面加载即自动调用一次。'

  static flags = {
    time: Flags.string({ description: '可放款时间（统计日期），格式 YYYY-MM-DD；来源页面日期控件 #time（input type=date），可为空' }),
    currpage: Flags.string({ description: '当前页码；首次调用固定为 1，翻页时取分页组件 api.getCurrent()；每页 50 条', required: true }),
    presentPrice: Flags.string({ description: '当前谈妥采购单价；来源 #presentPrice 控件，代码中构造于 params 对象但 ajax 未设置 data，实际未随请求发送（待人工确认）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorLoan)

    const data = await this.client.post('/erpmonitor/erpmonitor/accountStatementMonitor/loan', {}, { params: { "time": flags.time, "currpage": flags.currpage, "presentPrice": flags.presentPrice } })
    this.output(data)
  }
}
