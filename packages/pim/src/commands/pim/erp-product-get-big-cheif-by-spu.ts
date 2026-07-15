// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetBigCheifBySpu extends MBSCommand {
  static description = '按SPU查询开发大酋长与开发员：产品问题投诉(侵权反馈)页面初始化时，根据当前 SPU 查询该商品对应的「开发大酋长」与「开发员」，并自动回填到页面只读输入框，供投诉任务匹配责任人使用。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。来源=URL 查询参数 productid（GetQueryString(\'productid\') 解析、按 %20 取最后一段）。查询主键，拼接在 URL ?spu= 后传递', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetBigCheifBySpu)

    const data = await this.client.get('/erpProduct/erpProduct/infringement/getBigCheifBySpu', { params: { "spu": flags.spu } })
    this.output(data)
  }
}
