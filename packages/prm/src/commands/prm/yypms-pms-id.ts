// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmYypmsPmsId extends MBSCommand {
  static description = 'Walmart 产品属性条件必填规则查询：Walmart 刊登编辑页加载产品属性时调用：依据刊登任务ID查询该商品/模板下属性条件必填联动规则列表。前端据此在某属性当前值命中 conditionValue 时，把 thenRequiredField 指定的字段由选填动态切换为必填（反之回退为选填）。'

  static flags = {}

  static args = {
    id: Args.string({ required: true, description: '刊登任务/草稿详情ID（路径参数）。取自前端路由参数 route.params.id，即编辑页 URL /v3/publish/walmart/edit/{id} 中的 {id}。来源：页面路由，非用户输入框。' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmYypmsPmsId)

    const data = await this.client.get(`/yypms/pms/walmart/getConditionRequiredInfo/${args.id}`, { params: {} })
    this.output(data)
  }
}
