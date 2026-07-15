// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorQueryForbidPublishListing extends MBSCommand {
  static description = '违禁/禁售刊登(重复铺货·重复标题)查询：根据上游列表得到的商品ID集合(itemId,逗号拼接)批量查询各商品的“重复铺货(repeateSpu)”与“重复标题(repeateTitle)”明细，返回每个商品对应的重复商品链接与ID，用于在列表行内渲染“重复铺货:[...] 重复标题:[...]”提示。'

  static flags = {
    itemId: Flags.string({ description: '商品ID列表，多个以英文逗号拼接。来源：上游列表 data.obj.content[i].spuId → sessionStorage \'ids\'。来源控件：无(程序自动组装)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorQueryForbidPublishListing)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/queryForbidPublishListing', { "itemId": flags.itemId })
    this.output(data)
  }
}
