// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetCountry extends MBSCommand {
  static description = '获取主要购买国家列表：商品导出创建页加载时调用，拉取可选的"主要购买国家"列表，用于渲染 #purchaseCountry 多选下拉框（最多支持10个国家）。无请求参数，返回国家名称集合。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetCountry)

    const data = await this.client.post('/erpProduct/erpProduct/productReport/getCountry', {})
    this.output(data)
  }
}
