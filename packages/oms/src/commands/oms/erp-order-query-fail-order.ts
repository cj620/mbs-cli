// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderQueryFailOrder extends MBSCommand {
  static description = '失败订单查询：按订单下载/导入时间区间分页查询导入 ODO 系统失败的订单列表，返回失败订单的订单号、错误信息、下载时间、导入时间及分页汇总信息（总数、总页数）。'

  static flags = {
    startTime: Flags.string({ description: '开始时间(订单下载/导入起始时间)，来源控件 #starttime2(input type=date)，格式 yyyy-MM-dd' }),
    endTime: Flags.string({ description: '结束时间(订单下载/导入结束时间)，来源控件 #endtime2(input type=date)，格式 yyyy-MM-dd；前端校验开始时间不可大于结束时间' }),
    currPage: Flags.string({ description: '当前页码，首次查询固定为 1，分页时取分页控件 api.getCurrent()，每页固定 50 条', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderQueryFailOrder)

    const data = await this.client.post('/erpOrder/erpOrder/Odo/queryFailOrder', { "startTime": flags.startTime, "endTime": flags.endTime, "currPage": flags.currPage })
    this.output(data)
  }
}
