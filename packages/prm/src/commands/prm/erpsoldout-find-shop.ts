// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindShop extends MBSCommand {
  static description = '店铺下拉列表查询(findShop)：商品侵权详情页加载时调用，获取当前可选店铺列表，用于渲染「请选择店铺」下拉框(#shopId)。POST 请求无任何请求参数，返回店铺ID与店铺名称集合。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindShop)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/findShop', {})
    this.output(data)
  }
}
