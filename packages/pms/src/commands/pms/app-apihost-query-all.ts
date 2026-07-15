// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsAppApihostQueryAll extends MBSCommand {
  static description = '会员码列表查询：查询当前登录用户已绑定/生效的 VIP 会员码列表，用于个人中心页展示 VIP 会员信息（会员类型、生效起止时间）。无请求参数，依赖请求头 Authorization: Bearer <token> 标识用户身份；返回结果落到页面 vipList 并渲染为会员信息描述列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsAppApihostQueryAll)

    const data = await this.client.get('/api/vipcode/queryAll', { params: {} })
    this.output(data)
  }
}
