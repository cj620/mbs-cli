// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetWarehouseInfo extends MBSCommand {
  static description = 'SKU包装-获取仓库信息(下拉)：获取SKU包装测量任务可选的仓库列表，用于「添加任务」弹窗中「仓库」多选下拉框的数据源(el-select 的 storageId/storageName)。前端在页面挂载(onMounted)时调用一次，返回的数组直接绑定到下拉选项；下拉中还会前置一条 storageId=-1「所有平台都测」(前端硬编码,非接口返回)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetWarehouseInfo)

    const data = await this.client.get('/erpProduct/erpProduct/skuPackage/getWarehouseInfo', { params: {} })
    this.output(data)
  }
}
