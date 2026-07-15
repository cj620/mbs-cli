// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
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
