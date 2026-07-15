// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetExamineTeamAuthority extends MBSCommand {
  static description = '获取审核小组权限：抛重检测页面 packageInfo.vue 在 onMounted 时调用 getPerson()，向后端查询当前登录用户是否具备审核权限及所属部门，用于控制页面审核相关按钮的显示。请求无任何业务参数(POST 空 body)，返回审核标识 isExamine 与部门名称 depart。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetExamineTeamAuthority)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/getExamineTeamAuthority', {})
    this.output(data)
  }
}
