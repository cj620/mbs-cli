// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmPmsId extends MBSCommand {
  static description = '商品分类列表查询(级联)：按分类层级与父级分类ID查询商品分类列表，用于 SPU 在线报表页一级/二级分类级联下拉。空 id 查一级分类；传一级分类 sequenceid 查其二级分类。URL 末段 /1/ 为固定层级标识，父级分类 id 拼接其后。axios.post 无请求体，参数全部在 URL 路径上。'

  static flags = {
    level: Flags.string({ description: '路径参数-分类层级标识，本页面固定传1（URL段 .../getCategoryList/1/...）', required: true }),
  }

  static args = {
    id: Args.string({ required: true, description: '路径参数-父级分类sequenceid；空=查询一级分类，传一级分类sequenceid=查询其二级分类，来源为一级分类下拉选中项sequenceid' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmPmsId)

    const data = await this.client.post(`/yypms/pms/category/getCategoryList/1/${args.id}`, { "level": flags.level })
    this.output(data)
  }
}
