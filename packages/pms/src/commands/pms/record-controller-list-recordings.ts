// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsRecordControllerListRecordings extends MBSCommand {
  static description = '录制回放-列出全部录制：Axure 原型「录制/回放(recordplay)」插件在页面加载事件(load.page_notes)中调用，用于拉取当前已保存的全部操作录制列表；前端遍历返回的 recordingList，逐条以其 recordingId 再调用 /RecordController/GetRecording 拉取录制详情并渲染到录制树中。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsRecordControllerListRecordings)

    const data = await this.client.post('/RecordController/ListRecordings', {})
    this.output(data)
  }
}
