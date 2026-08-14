// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsCenterMessageServiceRead extends MBSCommand {
  static description = '公告通知-标记已读：用户在首页公告弹窗中点击「确认已读」按钮时调用，按公告ID将当前公告标记为已读；以 GET 方式携带 noticeId 查询参数请求，前端调用后仅关闭弹窗、不消费返回体。'

  static flags = {
    noticeId: Flags.string({ description: '公告(通知)ID，标识需标记为已读的公告；点击「确认已读」时程序传入当前弹窗公告ID(noticeData.id)，该值来源于 getById 接口返回的 result.data.id；拼接于 URL 查询串 ?noticeId= 之后', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsCenterMessageServiceRead)

    const data = await this.client.get('/center-message-service/message/notice/read', { params: { "noticeId": flags.noticeId } })
    this.output(data)
  }
}
