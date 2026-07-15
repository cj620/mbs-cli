// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductInfoBySku extends MBSCommand {
  static description = '根据SKU查询库存分仓信息：SPU详情页中点击某SKU的库存单元格时，按SKU查询该SKU在各仓库的库存明细（仓库/仓库类型/仓位/近7·30·60·90天销量/成本价/采购价/库存数/待发货/缺货订单/在途/下单），前端按仓库类型(STORAGETYPE)升序排序后渲染为悬浮气泡表格(InventoryPopover)。'

  static flags = {
    sku: Flags.string({ description: 'SKU编号（查询键），来源SPU详情页SKU库存单元格点击事件传入的sid', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductInfoBySku)

    const data = await this.client.get('/erpProduct/erpProduct/productDetails/getProductInfoBySku', { params: { "sku": flags.sku } })
    this.output(data)
  }
}
