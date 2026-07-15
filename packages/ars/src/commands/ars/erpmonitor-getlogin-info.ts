// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetloginInfo extends MBSCommand {
  static description = '获取登录用户信息：页面加载后拉取当前登录用户的基础信息，前端仅取用其中的 obj.manageShopIds（当前用户可管理的店铺ID集合），用于后续店铺列表查询/过滤。请求无入参，返回统一响应体。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetloginInfo)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/getloginInfo', {})
    this.output(data)
  }
}
