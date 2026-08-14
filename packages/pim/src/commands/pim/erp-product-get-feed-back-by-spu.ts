// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetFeedBackBySpu extends MBSCommand {
  static description = '商品(SPU)差评(用户反馈)查询：在「SMT自动刊登」列表点击某 SPU 的「差评」按钮时，按 SPU 分页查询该商品在各平台(ebay/wish/aliexpress)的用户差评反馈列表，并返回各平台差评数量汇总，弹窗展示差评店铺、平台、内容、时间。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。来源：列表行「差评」按钮 getFeedBackBySpu(spu,obj) 传入的 spu，原样拼到 URL', required: true }),
    pageindex: Flags.string({ description: '当前页码。首次查询固定为 1；分页器回调传 api.getCurrent()(当前页)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetFeedBackBySpu)

    const data = await this.client.post('/erpProduct/erpProduct/feedback/getFeedBackBySpu', {}, { params: { "spu": flags.spu, "pageindex": flags.pageindex } })
    this.output(data)
  }
}
