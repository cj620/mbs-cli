// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetStorage extends MBSCommand {
  static description = '仓库列表下拉查询：拉取仓库列表，用于 SKU 详情页“仓库列表”下拉框(#storageId)的选项渲染。无请求参数，POST 直接调用，返回仓库数组，前端仅使用每项的 name 作为 option 的 value 与显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetStorage)

    const data = await this.client.post('/erpProduct/erpProduct/product/getStorage', {})
    this.output(data)
  }
}
