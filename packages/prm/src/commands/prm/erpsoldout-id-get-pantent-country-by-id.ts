// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutIdGetPantentCountryById extends MBSCommand {
  static description = '根据专利国家ID查询关联平台与站点：在商品侵权审核-提交侵权授权弹框中选择专利国家后触发；按所选专利国家ID返回关联的侵权平台(platform)与站点(site)集合，前端据此自动并入已选侵权平台与站点。'

  static flags = {}

  static args = {
    id: Args.string({ required: true, description: '专利国家ID(路径变量)。取自专利国家多选框(el-select#patentCountry)已选项 value.id，多选时逗号拼接；枚举来源 getPantentCountry 接口的 patentCountryOptions(value.id/value.countryName)。未选则不发请求' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmErpsoldoutIdGetPantentCountryById)

    const data = await this.client.get(`/erpsoldout/erpsoldout/infringing/getPantentCountryById/${args.id}`, { params: {} })
    this.output(data)
  }
}
