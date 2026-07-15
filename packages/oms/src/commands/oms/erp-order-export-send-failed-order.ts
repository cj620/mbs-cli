// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderExportSendFailedOrder extends MBSCommand {
  static description = '派送失败订单导出：订单看板「派送失败」标签页的导出功能：按店长、店铺、平台筛选条件（导出全部）或勾选的订单 orderids（导出选中）导出派送失败订单，后端以二进制流（Excel）返回，前端用 blob 下载为「派送失败{时间戳}.xls」。'

  static flags = {
    shopManager: Flags.string({ description: '店长。来源页面店长下拉框 #saleLeader10，未选则为空字符串' }),
    shopid: Flags.string({ description: '店铺ID。来源页面店铺下拉框 #shopName10，未选则为空字符串' }),
    platformId: Flags.string({ description: '平台ID。来源页面平台下拉框 #platformes2（由 /erpOrder/erpOrder/saleReport/getPlatformList 填充，value=PLATFORMID），未选则为空字符串' }),
    orderids: Flags.string({ description: '订单ID集合（英文逗号拼接）。仅「导出选中订单」传入，取自勾选复选框 failedOrderCheckboxes 的 data-order-id；「导出全部订单」不传此字段' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderExportSendFailedOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/exportSendFailedOrder', { "shopManager": flags.shopManager, "shopid": flags.shopid, "platformId": flags.platformId, "orderids": flags.orderids })
    this.output(data)
  }
}
