// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSkuWarehouse extends MBSCommand {
  static description = '查询SKU可配置海外仓类型列表：SKU详情页点击“配置海外仓映射关系”时，按 SKU 查询其可选的海外仓类型列表，用于弹窗中“海外仓类型”下拉选择框。返回值为海外仓类型字符串数组，前端 el-select 直接用每个字符串同时作为 label 和 value 渲染。'

  static flags = {
    sku: Flags.string({ description: 'SKU 编码。来源：当前页面 URL 查询参数 SKU（GetQueryString(\'SKU\')），作为 query 拼接在 getSkuWarehouse?sku= 之后；用于按 SKU 查询其可配置的海外仓类型', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSkuWarehouse)

    const data = await this.client.get('/erpProduct/erpProduct/productDetails/getSkuWarehouse', { params: { "sku": flags.sku } })
    this.output(data)
  }
}
