// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorCollectFolderList extends MBSCommand {
  static description = '收藏夹列表查询：查询当前用户的全部商品收藏夹（我的收藏夹），用于管理收藏夹/加入收藏夹弹窗的单选列表渲染：返回每个收藏夹的ID、名称及夹内收藏商品数量。请求体为空对象{}，后端按当前登录用户返回其收藏夹。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorCollectFolderList)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/collectFolderList', {})
    this.output(data)
  }
}
