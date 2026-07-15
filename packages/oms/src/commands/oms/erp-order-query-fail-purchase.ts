// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderQueryFailPurchase extends MBSCommand {
  static description = '失败采购单查询：按时间区间分页查询导入 odo 系统失败的采购单列表，返回采购单批次号、错误信息、采购时间、导入时间，并返回总记录数与总页数供前端分页。'

  static flags = {
    startTime: Flags.string({ description: '开始时间，来源日期控件 #starttime2(input type=date)，格式 yyyy-MM-dd' }),
    endTime: Flags.string({ description: '结束时间，来源日期控件 #endtime2(input type=date)，格式 yyyy-MM-dd；前端校验开始时间不得大于结束时间' }),
    currPage: Flags.string({ description: '当前页码；search() 固定传 1，翻页回调传 api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderQueryFailPurchase)

    const data = await this.client.post('/erpOrder/erpOrder/Odo/queryFailPurchase', { "startTime": flags.startTime, "endTime": flags.endTime, "currPage": flags.currPage })
    this.output(data)
  }
}
