// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsRecordControllerGetRecording extends MBSCommand {
  static description = '获取单条录制详情：录制回放(recordplay)插件在页面加载时先调用 /RecordController/ListRecordings 取得录制列表，再对列表中每条录制按 recordingId 调用本接口获取该条录制的完整内容（录制名、录制ID、事件列表），随后经 convertFromJson 转换并渲染为录制树、绑定回放触发事件。'

  static flags = {
    recordingId: Flags.string({ description: '录制ID。取自 ListRecordings 返回列表项 recordingItem.recordingId，作为查询该条录制详情的主键。程序遍历自动传入，非用户输入。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsRecordControllerGetRecording)

    const data = await this.client.post('/RecordController/GetRecording', { "recordingId": flags.recordingId })
    this.output(data)
  }
}
