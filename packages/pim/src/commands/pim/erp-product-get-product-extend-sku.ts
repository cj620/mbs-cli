// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductExtendSku extends MBSCommand {
  static description = 'SKU降本(成本扩展)记录查询：SKU详情页加载“降本(成本扩展)”模块时调用：按 URL 中的 SKU 查询该 SKU 的降本谈价记录列表（降本前价/目标价/谈妥价、供应商、捆绑数量、起批量、降本人、修改/清除信息、议价图片等），并据 isShow 控制“编辑成本”按钮显隐，回填目标价/供应商/现价/起订量到编辑表单，列表通过 art-template contentTemplate3 渲染。'

  static flags = {
    sku: Flags.string({ description: 'SKU 编码。来源：页面 URL query 参数 SKU，前端经 GetQueryString(\'SKU\') 取得后拼接到 ?sku=', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductExtendSku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getProductExtendSku', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
