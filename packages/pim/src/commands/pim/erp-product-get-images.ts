// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetImages extends MBSCommand {
  static description = '获取亚马逊刊登SKU图片列表：亚马逊自动刊登确认列表中，点击某 SKU 的图片排序/拖拽排序时调用：按店铺+ERP SPU+ERP SKU+刊登分组ID 查询该 SKU 当前的主图、附图1~8、样本图(色卡图)URL，前端用 art-template imagesTemplate 渲染成可拖拽排序的 li>img 列表。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID(亚马逊店铺标识,来源行数据 data-shopid)', required: true }),
    erpSPU: Flags.string({ description: 'ERP商品SPU编号(来源行数据 data-erpspu)', required: true }),
    erpSKU: Flags.string({ description: 'ERP商品SKU编号(变体SKU,来源行数据 data-erpsku)', required: true }),
    groupid: Flags.string({ description: '亚马逊刊登分组ID(同一刊登批次/Listing分组,来源行数据 data-groupid)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetImages)

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/getImages', { "shopId": flags.shopId, "erpSPU": flags.erpSPU, "erpSKU": flags.erpSKU, "groupid": flags.groupid })
    this.output(data)
  }
}
