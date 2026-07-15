// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetAllPublishNumber extends MBSCommand {
  static description = '销售日刊登报表-获取全部刊登数量(上上周)：销售日刊登报表顶层查询：按周次标记(weekTag)返回各销售员一周每天新刊登listing数量、个人汇总数量及全员每日合计数量，并通过 flag 标识是否可向下钻取。weekTag=100 对应上上周页签。'

  static flags = {
    weekTag: Flags.string({ description: '周次标记。001=本周;010=上周;100=上上周。本接口(上上周)固定传100。来源:页签点击事件写死,无输入控件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetAllPublishNumber)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getAllPublishNumber', {}, { params: { "weekTag": flags.weekTag } })
    this.output(data)
  }
}
