// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsSpuProductSceneSpell extends MBSCommand {
  static description = '补偿生成SPU场景咒语：仅传SPU，其余参数从pms数据库查询：补偿生成SPU场景咒语：仅传SPU，其余参数从pms数据库查询'

  static flags = {}

  static args = {
    spu: Args.string({ required: true, description: 'SPU（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsSpuProductSceneSpell)

    const data = await this.client.get(`/yypms/pms/developerMission/ai/productSceneSpell/${args.spu}`, { params: {} })
    this.output(data)
  }
}
