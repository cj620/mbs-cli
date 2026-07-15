// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetZongJingBan extends MBSCommand {
  static description = '查询当前用户是否为总经办(总经理权限)：进入「事业部人员毛利方差图」页面时调用，判断当前登录人是否为总经办/总经理。返回布尔值赋给前端 state.isGeneralManager，与无总监、无经理筛选条件共同决定是否展示「看经理人均毛利/看经理总毛利」切换按钮。请求无任何业务参数(空 POST body)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetZongJingBan)

    const data = await this.client.post('/erpProduct/erpProduct/product/getZongJingBan', {})
    this.output(data)
  }
}
