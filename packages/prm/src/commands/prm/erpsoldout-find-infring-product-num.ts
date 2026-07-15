// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindInfringProductNum extends MBSCommand {
  static description = '侵权商品数量查询：仪表盘(common.html)按员工/店铺统计该用户名下已标注侵权但线上仍在售的商品数量，结果填入侵权商品角标(#findInfringProductNum)，并据返回 content 拼接跳转到侵权商品明细页。订单看板加载(orderstats)、切换组员(salesmanstats)及每5分钟定时刷新(settime)均会调用。'

  static flags = {
    userId: Flags.string({ description: '用户/员工ID(URL Query)。orderstats 取 data.obj.user_info.yyemployeeId；salesmanstats 取店铺下拉选中项 data-value(store_num)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindInfringProductNum)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/findInfringProductNum', {}, { params: { "userId": flags.userId } })
    this.output(data)
  }
}
