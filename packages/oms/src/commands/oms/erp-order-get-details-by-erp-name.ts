// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDetailsByErpName extends MBSCommand {
  static description = '独立站优化师报表-按业务员查询测款数量明细：独立站优化师(投放)报表：按业务员名称(erpName)与时间区间(beginTime/endTime)查询该业务员的测款 SPU 广告投放明细列表，返回每个测款 SPU 的广告费用、转化价值、ROI、触达、频次、订单数、CPR/CPC/CTR/CPM、点击等投放指标，以及总条数。'

  static flags = {
    beginTime: Flags.string({ description: '查询开始时间，来源浏览器 URL query 参数 beginTime(GetQueryString(\'beginTime\'))', required: true }),
    endTime: Flags.string({ description: '查询结束时间，来源浏览器 URL query 参数 endTime(GetQueryString(\'endTime\'))', required: true }),
    erpName: Flags.string({ description: '业务员名称，来源浏览器 URL query 参数 erpName，已 decodeURI 解码', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDetailsByErpName)

    const data = await this.client.post('/erpOrder/erpOrder/independentOptimizerReport/getDetailsByErpName', { "beginTime": flags.beginTime, "endTime": flags.endTime, "erpName": flags.erpName })
    this.output(data)
  }
}
