// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetPmsPhishingWordsList extends MBSCommand {
  static description = '钓鱼词库列表查询：钓鱼词库（侵权钓鱼词）分页列表查询：支持按钓鱼词、平台、提交人、审核人、大类、审核状态等条件分页过滤，返回钓鱼词记录列表（含平台/站点/替换词/筛选规则/创建更新删除轨迹/审核状态/操作日志）及总条数。'

  static flags = {
    phishingWord: Flags.string({ description: '钓鱼词（来源：顶部「请输入钓鱼词」输入框 Searchoption.phishingWord）' }),
    platformId: Flags.string({ description: '平台ID（来源：「请选择平台」下拉单选，值取 item.PLATFORMID）' }),
    currentPage: Flags.string({ description: '当前页码（由 getData(index)/分页器传入，默认 1；unproxy 内赋值为 index）', required: true }),
    pageSize: Flags.string({ description: '每页条数（来源：分页器 page-size，可选 50/100/150/200，默认 50）', required: true }),
    submitBy: Flags.string({ description: '提交人（来源：「请选择提交人」下拉单选，选项来自 findPhishingWordsCreater）' }),
    categoryName: Flags.string({ description: '大类名称（来源：「请选择大类」下拉单选，值取一级分类 item.name）' }),
    checkBy: Flags.string({ description: '审核人（来源：「请输入审核人」输入框）' }),
    phishingStatus: Flags.string({ description: '审核状态（来源：「请选择状态」下拉，默认 null）。枚举：-1=已停用;0=待审核;1=审核通过;2=审核不通过' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetPmsPhishingWordsList)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/getPmsPhishingWordsList', { "phishingWord": flags.phishingWord, "platformId": flags.platformId, "currentPage": flags.currentPage, "pageSize": flags.pageSize, "submitBy": flags.submitBy, "categoryName": flags.categoryName, "checkBy": flags.checkBy, "phishingStatus": flags.phishingStatus })
    this.output(data)
  }
}
