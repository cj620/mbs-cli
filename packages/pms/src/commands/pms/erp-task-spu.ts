// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskSpu extends MBSCommand {
  static description = '获取商品英文描述(getEnglishDescRipiton)：质检详情弹窗打开时（老维度质检任务），按 SPU 拉取该商品的英文产品描述文本；前端取返回体的 desc 字段，若非空再调用 AI 翻译接口翻成中文，填入‘产品描述’文本域。SPU 作为 URL 路径变量传递，无请求体。'

  static flags = {}

  static args = {
    spu: Args.string({ required: true, description: '商品 SPU 编号，作为 URL 路径变量拼接到接口末尾；来源父组件 props.spu，无请求体' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PmsErpTaskSpu)

    const data = await this.client.post(`/erpTask/erpTask/developMustDo/getEnglishDescRipiton/${args.spu}`, {})
    this.output(data)
  }
}
