// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutIdGetPantentCountryById1 extends MBSCommand {
  static description = '按专利国家ID查询关联禁售平台/站点：SPU详情页“禁售平台/专利国家”模块中，用户在「专利国家」多选下拉选择一个或多个国家后触发，按所选专利国家ID(列表)查询其对应需禁售的平台与站点集合，前端据此把对应平台名加入禁售平台多选、把站点加入禁售站点多选。'

  static flags = {}

  static args = {
    id: Args.string({ required: true, description: '专利国家ID列表(路径变量)。取自「专利国家」多选框 #patentCountry 选中项的 value.id，多选时按逗号串联(如 1,2,3)。来源控件：SPUdetails.html el-select#patentCountry(multiple)，选项 label=countryName、value=id' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmErpsoldoutIdGetPantentCountryById1)

    const data = await this.client.get(`/erpsoldout/erpsoldout/infringing/getPantentCountryById1/${args.id}`, { params: {} })
    this.output(data)
  }
}
