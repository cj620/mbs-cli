// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutEmpId extends MBSCommand {
  static description = '获取当前登录员工ID(empID)：财务工作台仪表盘加载完成后调用，获取当前登录用户对应的 yy 员工ID(yyemployeeId)，前端将其写入名为 employeeId 的 Cookie(有效期365天)，供后续接口(如 positionName 取岗位、侵权/下架数量跳转链接)使用。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutEmpId)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/empID', {})
    this.output(data)
  }
}
