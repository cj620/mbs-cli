// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindSpuForPublish extends MBSCommand {
  static description = '查询待刊登SPU列表：ebay批量刊登页面加载时调用，查询当前用户已暂存/待刊登的SPU编号清单（无入参，按登录上下文查询），返回SPU字符串数组，前端用逗号拼接后回填到“ebay批量刊登”输入框(#batchsku)，供后续生成listing使用。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindSpuForPublish)

    const data = await this.client.post('/erpProduct/erpProduct/product/findSpuForPublish', {})
    this.output(data)
  }
}
