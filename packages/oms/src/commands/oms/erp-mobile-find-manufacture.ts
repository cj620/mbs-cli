// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindManufacture extends MBSCommand {
  static description = '供应商列表查询(含名下SKU订单)：移动端「供应商管理」页面，根据供应商名称关键词分页查询供应商列表，每个供应商下挂其相关 SKU 的商品(图片/名称/SKU/总笔数/总金额)，并返回当前用户头像地址。支持「加载更多」翻页。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码(从1开始)。首次/搜索时为1，「加载更多」时 currentPage++，来源全局变量 currentPage', required: true }),
    name: Flags.string({ description: '供应商名称搜索关键词，来源搜索控件 #keyword 输入值(首次自动加载时为空)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindManufacture)

    const data = await this.client.post('/erpMobile/erpMobile/shoeController/findManufacture', { "currentPage": flags.currentPage, "name": flags.name })
    this.output(data)
  }
}
