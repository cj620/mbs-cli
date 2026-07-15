// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFindEditorShop extends MBSCommand {
  static description = '查询可编辑ebay店铺列表：ebay商品描述替换(热销推荐)模块的店铺列表查询：按店铺下拉选择(shopId，可为空查全部)返回该用户可编辑的ebay店铺及其热销推荐开启状态、执行状态、PC/移动端行列配置、指定listing、描述模板、预览标识等，用于渲染店铺列表并回填店铺下拉框。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID（query 参数）。来源控件：店铺下拉框 #shopId；默认项值为空字符串，空值表示不限店铺/查询全部可编辑店铺。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFindEditorShop)

    const data = await this.client.post('/erpmonitor/erpmonitor/replaceEbaydesc/findEditorShop', {}, { params: { "shopId": flags.shopId } })
    this.output(data)
  }
}
