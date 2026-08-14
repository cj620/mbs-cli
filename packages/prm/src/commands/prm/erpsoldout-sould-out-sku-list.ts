// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutSouldOutSkuList extends MBSCommand {
  static description = '侵权/下架SKU列表查询：侵权下架（SKU下架）管理列表的多条件分页查询：支持一级分类、平台、提交人、下架原因、侵权关键词、SKU（多值空格分割）、商品标题关键词、创建时间区间等筛选，返回下架商品列表及总数、总页数。'

  static flags = {
    primaryCategory: Flags.string({ description: '一级分类（来源下拉 #category，选项来自 category 接口；空=全部分类）' }),
    infringWord: Flags.string({ description: '侵权关键词，多值逗号分隔（来源输入框 #infringWord）' }),
    skuStr: Flags.string({ description: 'SKU，多值空格分割（来源输入框 #duoSKU）' }),
    submitBy: Flags.string({ description: '提交人（来源下拉 #submitRen，value=employeeId，选项来自 submit 接口）' }),
    platformId: Flags.string({ description: '禁售平台ID（来源下拉 #platformName，value=platformId，选项来自 findPlatform 接口；空=全平台）' }),
    soldOutReason: Flags.string({ description: '下架原因。枚举：清仓下架/停产下架/侵权下架（页面默认侵权下架）；空=全部（来源下拉 #soldOutReason）' }),
    endSubmitDate: Flags.string({ description: '创建（提交）时间-结束，格式 yyyy-M-d（来源创建时间下拉 #getTime 计算或自定义 #endTime）' }),
    startSubmitDate: Flags.string({ description: '创建（提交）时间-起始，格式 yyyy-M-d（来源创建时间下拉 #getTime：今天/近7/10/15/30/60/90/120天/自定义 #startTime）' }),
    currPage: Flags.string({ description: '当前页码（search() 固定传 1；分页回调取 api.getCurrent()）', required: true }),
    searchKeyWord: Flags.string({ description: 'SKU/商品标题 关键词（来源输入框 #keyWords）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutSouldOutSkuList)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/souldOutSkuList', { "primaryCategory": flags.primaryCategory, "infringWord": flags.infringWord, "skuStr": flags.skuStr, "submitBy": flags.submitBy, "platformId": flags.platformId, "soldOutReason": flags.soldOutReason, "endSubmitDate": flags.endSubmitDate, "startSubmitDate": flags.startSubmitDate, "currPage": flags.currPage, "searchKeyWord": flags.searchKeyWord })
    this.output(data)
  }
}
