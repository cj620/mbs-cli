// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductType extends MBSCommand {
  static description = '获取销量级别(产品类型)列表：移动端商品筛选/排序页加载时调用，返回“销量级别”枚举列表，用于动态渲染 salesTemplate 中的单选项(typeName 作展示文本、id 作提交值)。无请求参数，POST 空体调用。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductType)

    const data = await this.client.post('/erpProduct/erpProduct/product/getProductType', {})
    this.output(data)
  }
}
