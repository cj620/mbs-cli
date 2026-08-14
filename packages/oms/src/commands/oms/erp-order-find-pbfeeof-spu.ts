// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindPbfeeofSpu extends MBSCommand {
  static description = 'SPU的PB(Product Boost)费用明细查询：根据SPU及时间区间，查询该SPU在各店铺的Wish Product Boost(PB)推广活动费用明细，返回活动基本信息、GMV、预算、消耗、曝光与曝光费等字段；前端在末尾追加一行汇总行后渲染表格。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号(按SPU查询其PB费用明细)，来源URL查询参数spu', required: true }),
    startTime: Flags.string({ description: '统计起始时间(活动费用统计区间-起)，来源URL查询参数startTime', required: true }),
    endTime: Flags.string({ description: '统计结束时间(活动费用统计区间-止)，来源URL查询参数endTime', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindPbfeeofSpu)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findPBFeeofSpu', { "spu": flags.spu, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
