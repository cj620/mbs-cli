// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetYearMonth extends MBSCommand {
  static description = '店铺业绩-年月下拉列表查询：获取店铺业绩可选的「年月」列表，用于仪表盘必发/必修改 SPU 页顶部时间筛选下拉框(#yearMonth、#n_month)的初始化。无入参，返回字符串数组(每项为一个年月值)，前端逐项渲染为 <option>，value 与文本同为该年月值，并在首部追加「选择时间」空项。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetYearMonth)

    const data = await this.client.get('/erpOrder/erpOrder/shopAchievements/getYearMonth', { params: {} })
    this.output(data)
  }
}
