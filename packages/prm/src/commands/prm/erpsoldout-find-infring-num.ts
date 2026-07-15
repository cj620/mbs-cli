// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindInfringNum extends MBSCommand {
  static description = '侵权信息待审核数量查询：开发员工作台(Dashboard)首页加载及每5分钟定时刷新时调用，统计当前登录员工名下「侵权信息待审核」的商品数量，渲染到工作台 #findInfringNum 角标，并据返回的员工ID拼接跳转链接。无请求参数(后端依据登录态/会话识别员工)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindInfringNum)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/findInfringNum', {})
    this.output(data)
  }
}
