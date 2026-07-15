// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAmazonAutoPublishInfoByShopIdAndErpSku extends MBSCommand {
  static description = '亚马逊自动刊登-按店铺与ERP SKU查询刊登明细：在「亚马逊自动刊登确认」列表中点击 SPU 行展开时，按 erpSpu+shopId+groupid 加载该 SPU 在该店铺下的全部变体 SKU 刊登明细（标题/描述/类目/主题/库存/颜色/尺寸/价格/运费模板/刊登状态/多张图片），渲染为子表格行供逐项编辑。'

  static flags = {
    erpSpu: Flags.string({ description: 'ERP 商品 SPU 编号(被展开行的 SPU，来源行 data-erpspu)', required: true }),
    shopId: Flags.string({ description: '店铺ID(来源行 data-shopid)', required: true }),
    groupid: Flags.string({ description: '刊登分组ID(同一SPU在该店铺的刊登任务分组，来源行 data-groupid)', required: true }),
    amazonCategoryName: Flags.string({ description: '亚马逊类目名(取当前类目Tab baseData.typeFlag；首页/未选时可能为空)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAmazonAutoPublishInfoByShopIdAndErpSku)

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/getAmazonAutoPublishInfoByShopIdAndErpSku', { "erpSpu": flags.erpSpu, "shopId": flags.shopId, "groupid": flags.groupid, "amazonCategoryName": flags.amazonCategoryName })
    this.output(data)
  }
}
