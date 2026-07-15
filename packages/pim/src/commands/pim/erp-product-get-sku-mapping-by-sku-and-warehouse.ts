// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSkuMappingBySkuAndWarehouse extends MBSCommand {
  static description = '按SKU与海外仓查询海外仓映射关系：SKU详情页「配置海外仓映射关系」弹窗中，用户选择某个海外仓类型后调用本接口，根据当前 SKU + 海外仓类型查询该映射记录（直邮SKU/海外仓SKU/分销平台SKU/中转仓），用于回填编辑表单。返回的整条记录同时作为后续 updateSkuMapping 的原始值(orginInfo)。'

  static flags = {
    sku: Flags.string({ description: 'SKU编号。来源 URL 查询参数 SKU(GetQueryString("SKU"))，即当前 SKU 详情页的 SKU', required: true }),
    warehouse: Flags.string({ description: '海外仓类型。来源「海外仓类型」下拉框 el-select(v-model=warehouseSelect) 的 @change 选中值；选项来自 getSkuWarehouse 返回的 warehouseList', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSkuMappingBySkuAndWarehouse)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getSkuMappingBySkuAndWarehouse', { "sku": flags.sku, "warehouse": flags.warehouse })
    this.output(data)
  }
}
