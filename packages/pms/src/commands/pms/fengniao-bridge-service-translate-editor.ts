// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsFengniaoBridgeServiceTranslateEditor extends MBSCommand {
  static description = '获取AI精修(翻译编辑器)链接：图库右键"AI精修"时调用，向蜂鸟桥接服务请求翻译/精修编辑器访问链接(url)，请求体为空，用户身份通过请求头 customer_id(来源 localStorage userid) 传递；前端拿到 data.url 后作为编辑器 iframe 的 src 打开。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsFengniaoBridgeServiceTranslateEditor)

    const data = await this.client.post('/gateway/fengniao-bridge-service/auth/translateEditor', {})
    this.output(data)
  }
}
