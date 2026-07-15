// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimProductImageditorServiceId extends MBSCommand {
  static description = '根据AI图任务ID查询任务状态：图片分配工作台对存在AI图任务(aiImgTaskId)的图片按3秒间隔轮询本接口查询蜂鸟(fengniao)AI处理任务状态；当返回的fengniaoStatus不再为padding时清除定时器并刷新图片列表。'

  static flags = {}

  static args = {
    id: Args.string({ required: true, description: 'AI图任务ID(路径参数)。来源：图片对象aiImgTaskId以逗号分隔后取第一个 aiImgTaskId.split(",")[0]，用于查询对应蜂鸟AI处理任务状态' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimProductImageditorServiceId)

    const data = await this.client.get(`/gateway/product-imageditor-service/artImage/getAiImgTaskById/${args.id}`, { params: {} })
    this.output(data)
  }
}
