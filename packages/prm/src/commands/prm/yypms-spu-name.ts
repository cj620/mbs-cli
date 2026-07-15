// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmYypmsSpuName extends MBSCommand {
  static description = '获取SPU预设场景咒语(提示词)：根据SPU编号查询该商品在AI文字生成图片/场景定制功能下预设的场景列表，每个场景包含一组方案变体(提示词/咒语)。前端在图片库AI生成弹窗中据此渲染预设场景卡片、场景下拉、方案变体标签与指令描述输入框。'

  static flags = {}

  static args = {
    spuName: Args.string({ required: true, description: 'SPU商品编号(URL路径参数)。来源：父组件 inject(spuName) 注入的当前选中商品SPU；用于查询该SPU的预设场景咒语' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmYypmsSpuName)

    const data = await this.client.post(`/yypms/pms/AllMessage/getSpuSceneSpell/${args.spuName}`, {})
    this.output(data)
  }
}
