// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetInventoryLog extends MBSCommand {
  static description = '调库日志查询：热销商品监控列表行操作「查看调库日志」时调用：根据 skuId/itemId/platformId/erpSku 定位某条 listing，返回其历史库存修改(调库)日志列表，前端以时间线按调库时间展示原库存、新库存、仓库及调库结果。'

  static flags = {
    skuId: Flags.string({ description: 'SKU ID（listing 行 row.skuId，SKU 主键标识）', required: true }),
    itemId: Flags.string({ description: '平台商品/listing ID（row.itemId，平台侧 item 编号）', required: true }),
    platformId: Flags.string({ description: '平台ID（row.platformId，标识所属销售平台）', required: true }),
    erpSku: Flags.string({ description: 'ERP SKU 编码（row.erpSku，内部 SKU 编码）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetInventoryLog)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/getInventoryLog', { "skuId": flags.skuId, "itemId": flags.itemId, "platformId": flags.platformId, "erpSku": flags.erpSku })
    this.output(data)
  }
}
