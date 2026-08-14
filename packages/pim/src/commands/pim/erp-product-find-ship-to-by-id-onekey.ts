// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShipToByIdOnekey extends MBSCommand {
  static description = '一键提价-查看发往地(收货地)列表：Speedmaster(SMT)一键提价页面，点击列表行「查看」按钮时调用：根据商品记录ID(id)与子SKU(skuId)查询该商品对应的发往地/收货地列表，前端弹出 #lookModal 并把返回的 obj.data 数组逐项渲染到 shoptoTemplate 表格中。'

  static flags = {
    id: Flags.string({ description: '商品记录ID。来源:「查看」按钮 data-id(渲染模板 {{v.id}}),即该商品行记录主键ID,用于定位要查询发往地的商品', required: true }),
    skuId: Flags.string({ description: '子SKU编号。来源:「查看」按钮 data-sku(渲染模板 {{item.skuId}}),即该行对应子SKU,用于确定查询发往地的SKU维度', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShipToByIdOnekey)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/findShipToByIdOnekey', { "id": flags.id, "skuId": flags.skuId })
    this.output(data)
  }
}
