// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetTransitWarehouse extends MBSCommand {
  static description = '获取中转仓(海外仓)列表：加载 SKU 详情页「配置海外仓映射关系」弹窗中「中转仓」下拉框的可选项。无入参，返回可选中转仓(海外仓)名称字符串列表，前端 el-select 用 v-for 直接渲染为选项(label=value=名称字符串)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetTransitWarehouse)

    const data = await this.client.get('/erpProduct/erpProduct/productDetails/getTransitWarehouse', { params: {} })
    this.output(data)
  }
}
