// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetSkuInfoByItemId extends MBSCommand {
  static description = '在线商品SKU信息查询（按商品ID）：移动端「在线」商品列表中点击某商品行的展开箭头时调用，按商品ID(parentSPUId/itemId)与店铺ID(shopId)查询该商品下全部SKU的售价、币种、运费、在线库存、马帮库存及调价/调库存状态，并据部门(department)判断是否展示调价/调库存入口。'

  static flags = {
    parentSPUId: Flags.string({ description: '商品ID(SPU父级ID，取自列表行 v.itemId，经 showTable 传入)', required: true }),
    shopId: Flags.string({ description: '店铺ID(取自列表行 v.shopId)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetSkuInfoByItemId)

    const data = await this.client.post('/erpMobile/erpMobile/hotProductListing/getSkuInfoByItemId', { "parentSPUId": flags.parentSPUId, "shopId": flags.shopId })
    this.output(data)
  }
}
