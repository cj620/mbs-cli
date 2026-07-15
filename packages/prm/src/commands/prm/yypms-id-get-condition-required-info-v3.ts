// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmYypmsIdGetConditionRequiredInfoV3 extends MBSCommand {
  static description = 'Walmart 属性条件必填规则查询：Walmart 刊登商品编辑页加载产品属性时调用：按商品(草稿/listing)ID 获取该模板的条件必填联动规则列表。前端据此规则，当某属性(conditionField)取到指定值(conditionValue)时，把被联动字段(thenRequiredField)从选填动态切换为必填，反之切回选填。'

  static flags = {}

  static args = {
    id: Args.string({ required: true, description: '路径参数，取自 route.params.id，为 Walmart 刊登编辑页当前商品(草稿/listing)ID；用于定位需要查询条件必填规则的模板对象。直接拼接在 URL 末尾。' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmYypmsIdGetConditionRequiredInfoV3)

    const data = await this.client.get(`/yypms/pms/walmart/getConditionRequiredInfoV3/${args.id}`, { params: {} })
    this.output(data)
  }
}
