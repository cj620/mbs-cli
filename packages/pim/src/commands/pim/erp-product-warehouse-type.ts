// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductWarehouseType extends MBSCommand {
  static description = '海外仓类型下拉查询：爆款商品监控页(shopHotProducts2)初始化「请选择海外仓类型」下拉框时调用，返回全部海外仓类型(ID+名称)，前端用 art-template warehouseTypeTemplate 渲染为 option 后挂到 #warehouse 并初始化 ySelect。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductWarehouseType)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/warehouseType', {})
    this.output(data)
  }
}
