// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindPlatformOfAdd extends MBSCommand {
  static description = '获取新增下架平台(及当前创建人)：平台商品下架(PlatformCommodityShelf)页面初始化及点击“提交下架SKU”时调用：无入参，返回当前可选的下架平台列表(平台ID/平台名称)，同时返回当前操作人(创建人)信息；前端取 obj[0].employeeName 作为创建人显示、用 contentTemplate6 渲染下架平台下拉框。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindPlatformOfAdd)

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/findPlatformOfAdd', {})
    this.output(data)
  }
}
