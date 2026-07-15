// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetXnSkuSavenum extends MBSCommand {
  static description = '获取SKU特供虚拟仓库存设置：SKU详情页加载时查询当前SKU的「特供虚拟仓」设置：是否开启特供虚拟仓、保底库存值，用于回显复选框与保底库存输入框；无权限时返回字符串"没有权限"并隐藏整块设置区。'

  static flags = {
    sku: Flags.string({ description: 'SKU编号。来源=页面URL查询参数 SKU（前端 GetQueryString(\'SKU\') 读取），拼接到接口URL ?sku= 后', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetXnSkuSavenum)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getXnSkuSavenum', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
