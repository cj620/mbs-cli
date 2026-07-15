// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPublishShopSmtProductController extends MBSCommand {
  static description = '查询自动刊登店铺列表（含刊登汇总）：SMT(速卖通)自动刊登页面初始化时调用：返回当前用户头像、刊登成功/待刊登汇总数，以及该用户名下全部店铺列表（每店铺含店铺名与刊登成功数）。前端据此渲染左侧店铺导航树及顶部店铺下拉框，并触发昨日汇总查询。无请求参数，依赖登录会话。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPublishShopSmtProductController)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/findPublishShop', {})
    this.output(data)
  }
}
