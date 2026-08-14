// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetCategorySelect extends MBSCommand {
  static description = '类目全类搜索(下拉联想)：商品类目管理页顶部「全类搜索」输入框的远程联想接口：用户输入类目名称关键词(防抖500ms)后，按关键词模糊匹配返回类目候选列表，供 el-select 下拉展示；选中后用于回填面包屑层级并跳转加载该类目的数据。'

  static flags = {
    keyword: Flags.string({ description: '类目名称搜索关键词(URL查询参数)。来源全类搜索 el-select 输入框，为空不发请求，输入后防抖500ms拼到URL', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetCategorySelect)

    const data = await this.client.post('/erpProduct/erpProduct/categoryController/getCategorySelect', { "keyword": flags.keyword })
    this.output(data)
  }
}
