// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetAllSite extends MBSCommand {
  static description = '获取全部站点(站点下拉数据)：商品侵权授权弹框(tortForm)初始化时拉取全部「平台-站点」清单，用于「站点」多选下拉(#site-selector)。前端遍历返回数组为每项拼装 key=平台ID-站点-平台名 与 label=平台名-站点 后绑定到 siteOptions。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetAllSite)

    const data = await this.client.get('/erpsoldout/erpsoldout/infringing/getAllSite', { params: {} })
    this.output(data)
  }
}
