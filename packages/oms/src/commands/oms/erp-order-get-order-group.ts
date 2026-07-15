// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetOrderGroup extends MBSCommand {
  static description = '待采购汇总(按供应商/货运方式)查询：进入待采购汇总页或勾选/取消「不生成采购单」复选框时调用，依据 sessionStorage 中的订单ID集合查询缺货SKU，按供应商(manufacture)与货运方式(expresstype)两个维度返回缺货SKU件数、缺货订单量等汇总数据，并返回汇总提示文案。'

  static flags = {
    orderids: Flags.string({ description: '订单ID集合，取自 sessionStorage.getItem(\'orderids\')，多个订单ID逗号拼接的字符串', required: true }),
    flag: Flags.string({ description: '是否「不生成采购单，使用当前的SZ库存」标记；复选框 #alertflag 勾选=1，未勾选=0', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetOrderGroup)

    const data = await this.client.post('/erpOrder/erpOrder/orderDeliver/getOrderGroup', { "orderids": flags.orderids, "flag": flags.flag })
    this.output(data)
  }
}
