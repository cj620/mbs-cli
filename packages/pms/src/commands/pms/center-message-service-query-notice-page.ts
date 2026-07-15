// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsCenterMessageServiceQueryNoticePage extends MBSCommand {
  static description = '通知公告分页查询：站内通知公告分页查询。页面加载后调用，拉取当前用户的通知列表（默认只查未读），前端取列表第一条 records[0].id，再调用 getById 拉取详情并弹窗提醒。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码（前端固定传 1）', required: true }),
    pageSize: Flags.string({ description: '每页条数（前端固定传 10）', required: true }),
    readStatus: Flags.boolean({ description: '已读状态过滤。false=只查未读通知（前端固定传 false）', allowNo: true, required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsCenterMessageServiceQueryNoticePage)

    const data = await this.client.post('/gateway/center-message-service/message/notice/queryNoticePage', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "readStatus": flags.readStatus })
    this.output(data)
  }
}
