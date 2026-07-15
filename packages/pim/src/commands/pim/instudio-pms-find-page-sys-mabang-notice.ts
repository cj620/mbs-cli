// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindPageSysMabangNotice extends MBSCommand {
  static description = '分页查询：分页查询'

  static flags = {
    id: Flags.integer({ description: '(无说明)' }),
    noticeType: Flags.string({ description: '(无说明)' }),
    createTime: Flags.string({ description: '(无说明)' }),
    statue: Flags.string({ description: '(无说明)' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    releaseTime: Flags.string({ description: 'Release时间（字段名推断,语义待核实）' }),
    beginCreateTime: Flags.string({ description: '(无说明)' }),
    endCreateTime: Flags.string({ description: '(无说明)' }),
    beginReleaseTime: Flags.string({ description: '开始Release时间（字段名推断,语义待核实）' }),
    endReleaseTime: Flags.string({ description: '结束Release时间（字段名推断,语义待核实）' }),
    contetnt: Flags.string({ description: 'Contetnt（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindPageSysMabangNotice)

    const data = await this.client.post('/yypms/pms/api/sysMabangNotice/findPage', { "id": flags.id, "noticeType": flags.noticeType, "createTime": flags.createTime, "statue": flags.statue, "currentPage": flags.currentPage, "pageSize": flags.pageSize, "releaseTime": flags.releaseTime, "beginCreateTime": flags.beginCreateTime, "endCreateTime": flags.endCreateTime, "beginReleaseTime": flags.beginReleaseTime, "endReleaseTime": flags.endReleaseTime, "contetnt": flags.contetnt })
    this.output(data)
  }
}
