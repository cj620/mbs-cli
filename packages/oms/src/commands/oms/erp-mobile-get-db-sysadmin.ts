// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetDbSysadmin extends MBSCommand {
  static description = '查询当前登录管理员信息(getDbSysadmin)：从 HttpSession(sysloginadmin) 取出当前登录管理员实体 DbSysadmin 并整体返回。移动端页面初始化时调用，用于获取当前用户的部门、职位、平台、店铺管理权限等信息；前端将整个返回对象存入 localStorage.userInfo，并据 depart(部门) 控制页面跳转与展示。直接返回实体，未包装 CommonResponse。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetDbSysadmin)

    const data = await this.client.get('/erpMobile/erpMobile/pushController/getDbSysadmin', { params: {} })
    this.output(data)
  }
}
