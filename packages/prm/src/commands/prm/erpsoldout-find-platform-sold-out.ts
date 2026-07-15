// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindPlatformSoldOut extends MBSCommand {
  static description = '查询平台列表(下架平台下拉)：平台商品下架页面初始化时调用，无入参，返回全部平台列表(平台ID+平台名称)，用于渲染「请选择平台」下拉框(#platformName)的选项。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindPlatformSoldOut)

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/findPlatform', {})
    this.output(data)
  }
}
