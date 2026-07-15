// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorShopifyDetailCsv extends MBSCommand {
  static description = 'Shopify商品详情文件上传(shopifyDetailCsv)：在"文件批量刊登"页面选择本地文件(Excel/CSV)后自动上传，用于按所选刊登店铺导入Shopify商品详情/刊登数据；以 multipart/form-data 携带文件，店铺名以 URL 查询参数 shopName 传入。上传完成后前端弹窗展示返回提示语(desc)并刷新刊登中列表。'

  static flags = {
    shopName: Flags.string({ description: '刊登店铺名称，取自多选下拉 #shopName 的选中值，多选以英文逗号拼接，未选择传空；作为 URL 查询参数传入' }),
    file: Flags.string({ description: '上传的商品详情文件(Excel/CSV)，来源文件选择控件 #files(<input type=file name=file multiple>)，以 multipart/form-data 上传，表单字段名 file', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorShopifyDetailCsv)

    const data = await this.client.post('/erpmonitor/erpmonitor/shopifyConventSku/shopifyDetailCsv', { "file": flags.file }, { params: { "shopName": flags.shopName } })
    this.output(data)
  }
}
