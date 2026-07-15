// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskCheckTodayResult extends MBSCommand {
  static description = '开发今日必做-查看今日清零结果：开发工作台「今日必做」清零弹窗：点击清零/保存按钮时调用，查询当前开发员各类必做任务（重量异常、产品投诉、复审被拒、售后问题、采购异常、拍照、推荐品等）的应完成数量，渲染到 mustDoTemplate 弹窗表格；实际完成数由前端从页面各 span 补写后随 saveTodayResult 保存。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskCheckTodayResult)

    const data = await this.client.post('/erpTask/erpTask/developMustDo/checkTodayResult', {})
    this.output(data)
  }
}
