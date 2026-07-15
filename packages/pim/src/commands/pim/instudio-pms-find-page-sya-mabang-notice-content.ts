// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindPageSyaMabangNoticeContent extends MBSCommand {
  static description = '分页查询：分页查询'

  static flags = {
    id: Flags.integer({ description: '(无说明)' }),
    noticeId: Flags.integer({ description: '(无说明)' }),
    typeName: Flags.string({ description: '(无说明)' }),
    content: Flags.string({ description: '(无说明)' }),
    url: Flags.string({ description: '(无说明)' }),
    createTime: Flags.string({ description: '(无说明)' }),
    status: Flags.string({ description: '1' }),
    textContent: Flags.string({ description: '文本内容（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindPageSyaMabangNoticeContent)

    const data = await this.client.post('/yypms/pms/api/syaMabangNoticeContent/findPage', { "id": flags.id, "noticeId": flags.noticeId, "typeName": flags.typeName, "content": flags.content, "url": flags.url, "createTime": flags.createTime, "status": flags.status, "textContent": flags.textContent, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
