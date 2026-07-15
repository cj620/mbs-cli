// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetPmsPhishingWordsLogList extends MBSCommand {
  static description = '钓鱼词操作日志列表查询：钓鱼词库列表页中，点击某一条钓鱼词记录“操作日志”列的“获取更多”链接时，按该记录ID查询其全部操作日志，返回操作时间/操作人/操作内容列表，前端以时间线(el-timeline)形式弹窗展示。'

  static flags = {
    id: Flags.string({ description: '钓鱼词记录ID（主键，唯一定位该条钓鱼词以查询其操作日志，取自表格行 row.id）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetPmsPhishingWordsLogList)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/getPmsPhishingWordsLogList', { "id": flags.id })
    this.output(data)
  }
}
