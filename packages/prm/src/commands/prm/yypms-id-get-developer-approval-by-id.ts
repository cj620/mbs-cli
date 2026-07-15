// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmYypmsIdGetDeveloperApprovalById extends MBSCommand {
  static description = '开发审批详情查询（按ID）：根据开发任务/审批ID查询开发审批详情。前端在 AI 图片描述组件中，当未取到1688采集图片(getAlibabaAiProductImg)时，调用本接口作为回退(fallback)，从返回的 obj.pictureList 中解析供应商图片URL列表用于展示。'

  static flags = {}

  static args = {
    id: Args.string({ required: true, description: '开发任务/审批ID（路径变量，拼接于URL末尾）。来源：当前页面路由参数 this.$route.query.id，无对应输入控件，由页面跳转携带' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmYypmsIdGetDeveloperApprovalById)

    const data = await this.client.get(`/yypms/pms/developerMission/getDeveloperApprovalById/${args.id}`, { params: {} })
    this.output(data)
  }
}
