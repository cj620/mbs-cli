// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetHwcType extends MBSCommand {
  static description = '获取海外仓类型列表：订单详情页「转海外仓发货」时，打开创建海外仓SKU弹窗，加载「海外仓类型」下拉选项。无请求参数，返回海外仓类型(warehouseType)列表，供前端按 warehouseTypeId 选择并取 warehouseTypeName。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetHwcType)

    const data = await this.client.get('/erpProduct/erpProduct/product/getHwcType', { params: {} })
    this.output(data)
  }
}
