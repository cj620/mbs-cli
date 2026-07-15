// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindPhishingWordsCreater extends MBSCommand {
  static description = '查询钓鱼词提交人(创建人)列表：钓鱼词库(report/phishingwords.vue)页面初始化时调用，返回所有钓鱼词的提交人(创建人)姓名列表，用于顶部搜索区"请选择提交人"下拉框(Searchoption.submitBy)的可选项。无任何请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindPhishingWordsCreater)

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/findPhishingWordsCreater', {})
    this.output(data)
  }
}
