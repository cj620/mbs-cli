// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetPmsInfringedWords extends MBSCommand {
  static description = '侵权词库分页查询：侵权词库列表分页查询：按侵权词、平台、提交人筛选，分页返回侵权词记录列表（含替换词、平台、描述、提交记录、站点、筛选规则等）及总条数，供侵权词库页面表格展示。'

  static flags = {
    infringedWord: Flags.string({ description: '侵权词（搜索关键词），来源 el-input「请输入侵权词」，默认空串' }),
    platformId: Flags.string({ description: '平台ID，来源 el-select「请选择平台」，取值为 PLATFORMID（标签显示 PLATFORMNAME），默认空串' }),
    currentPage: Flags.string({ description: '当前页码，由 getData(index=1) 入参覆盖（默认1），翻页时由 el-pagination current-change 传入' }),
    pageSize: Flags.string({ description: '每页条数，来源 el-pagination，可选 50/100/150/200，默认 50' }),
    submitBy: Flags.string({ description: '提交人（员工姓名），来源 el-select「请选择提交人」，取值与标签均为 employeeName，默认空串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetPmsInfringedWords)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/getPmsInfringedWords', { "infringedWord": flags.infringedWord, "platformId": flags.platformId, "currentPage": flags.currentPage, "pageSize": flags.pageSize, "submitBy": flags.submitBy })
    this.output(data)
  }
}
