// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetOptimizerDetails extends MBSCommand {
  static description = '独立站优化师报表-优化师明细查询：独立站(独立优化师)投放报表明细查询：按 SPU + 时间区间查询各优化师的广告费用、转化价值、ROI、订单数、触达/频次/CPR/CPC/CTR/点击等投放效果指标，返回合计与优化师明细列表用于报表渲染。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。来源：URL查询参数 spu，经 decodeURI 解码后传入' }),
    beginTime: Flags.string({ description: '统计起始时间。来源：URL查询参数 beginTime' }),
    endTime: Flags.string({ description: '统计结束时间。来源：URL查询参数 endTime' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetOptimizerDetails)

    const data = await this.client.post('/erpOrder/erpOrder/independentOptimizerReport/getOptimizerDetails', { "spu": flags.spu, "beginTime": flags.beginTime, "endTime": flags.endTime })
    this.output(data)
  }
}
