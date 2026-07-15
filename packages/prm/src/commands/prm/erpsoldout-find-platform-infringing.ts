// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindPlatformInfringing extends MBSCommand {
  static description = '查询平台列表(侵权商品筛选用)：进入侵权商品明细页时自动调用，获取全部平台列表，渲染顶部「请选择平台」下拉框(#platformName)的选项，供后续侵权商品查询/导出按平台筛选。该接口为无参 POST 查询。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindPlatformInfringing)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/findPlatform', {})
    this.output(data)
  }
}
