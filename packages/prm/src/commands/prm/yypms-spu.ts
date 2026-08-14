// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmYypmsSpu extends MBSCommand {
  static description = '获取SPU的AI商品属性：文生图向导(场景图/ozon主图/自定义咒语)打开时，按 SPU 拉取该商品由AI生成的结构化属性(产品名、关键词、卖点、受众、使用场景/方式、材质、ozon类目与排版模板、ozon中俄标题与主/次卖点)，用于自动拼装“商品信息”向导文本与排版模板默认值。'

  static flags = {}

  static args = {
    spu: Args.string({ required: true, description: '商品SPU编号(路径变量)，前端经 encodeURIComponent 编码拼接到URL末尾，必填' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmYypmsSpu)

    const data = await this.client.get(`/yypms/pms/developerMission/ai/ai/attributes/${args.spu}`, { params: {} })
    this.output(data)
  }
}
