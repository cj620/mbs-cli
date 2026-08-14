// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetPantentCountry extends MBSCommand {
  static description = '获取专利国家下拉选项：SPU详情页“专利国家”多选下拉的数据源接口。页面加载时以 axios.get 调用，无请求参数；返回 obj 数组赋给 state.patentCountryOptions，在 #patentCountry el-select 中以 id 为选项值、countryName 为显示文本渲染，并据用户角色与已选专利国家设置选项禁用态。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetPantentCountry)

    const data = await this.client.get('/erpsoldout/erpsoldout/infringing/getPantentCountry', { params: {} })
    this.output(data)
  }
}
