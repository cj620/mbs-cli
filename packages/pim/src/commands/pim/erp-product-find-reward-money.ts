// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindRewardMoney extends MBSCommand {
  static description = '爆款listing奖励排行榜查询：商品中心“爆款listing”页面「排行榜」标签页查询接口：无请求参数，后端返回各店铺负责人(shopPrincipal)的爆款listing数量(listingNum)排行榜列表，前端按返回顺序生成名次、姓名、listing数三列展示；奖励金额(rewardMoney)字段在模板中已注释、当前不展示。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindRewardMoney)

    const data = await this.client.post('/erpProduct/erpProduct/listingController/findRewardMoney', {})
    this.output(data)
  }
}
