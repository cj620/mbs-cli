// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetOzonSinglepublishList extends MBSCommand {
  static description = '获取刊登信息列表：获取刊登信息列表'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    listId: Flags.integer({ description: '列表ID（字段名推断,语义待核实）' }),
    shopname: Flags.string({ description: '店铺' }),
    shopManager: Flags.string({ description: '店铺负责人' }),
    title: Flags.string({ description: '标题' }),
    description: Flags.string({ description: '描述' }),
    descriptionStr: Flags.string({ description: '描述' }),
    descriptionJson: Flags.string({ description: '描述Json' }),
    erpSpu: Flags.string({ description: '马帮spu' }),
    erpSkuList: Flags.string({ description: '马帮sku (comma-separated)' }),
    publishSpu: Flags.string({ description: '刊登spu' }),
    vat: Flags.string({ description: 'vat税' }),
    weight: Flags.string({ description: '重量' }),
    weightUnit: Flags.string({ description: '重量单位' }),
    depth: Flags.integer({ description: '深度' }),
    width: Flags.integer({ description: '宽度' }),
    height: Flags.integer({ description: '高度' }),
    dimensionUnit: Flags.string({ description: '尺寸单位' }),
    productCategory: Flags.string({ description: '产品分类' }),
    productCategoryShow: Flags.string({ description: '页面显示' }),
    productCategoryAll: Flags.string({ description: '页面显示' }),
    vType: Flags.integer({ description: '类型（字段名推断,语义待核实）' }),
    vNum: Flags.integer({ description: '数量（字段名推断,语义待核实）' }),
    attributeList: Flags.string({ description: '属性 (comma-separated)' }),
    publicAttributeList: Flags.string({ description: '公有属性 (comma-separated)' }),
    publicAttributeStr: Flags.string({ description: '公有属性' }),
    mainPic: Flags.string({ description: '主图' }),
    productUrl: Flags.string({ description: '产品链接' }),
    mainPicList: Flags.string({ description: '主图片列表（字段名推断,语义待核实） (comma-separated)' }),
    videoUrl: Flags.string({ description: '视频链接' }),
    videoCover: Flags.string({ description: '视频封面' }),
    warehouse: Flags.string({ description: '仓库（字段名推断,语义待核实）' }),
    warehouseId: Flags.string({ description: '仓库ID（字段名推断,语义待核实）' }),
    ozonSinglepublishSku: Flags.string({ description: 'sku (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetOzonSinglepublishList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/ozonSinglepublishInfoController/getOzonSinglepublishList', { "id": flags.id, "listId": flags.listId, "shopname": flags.shopname, "shopManager": flags.shopManager, "title": flags.title, "description": flags.description, "descriptionStr": flags.descriptionStr, "descriptionJson": flags.descriptionJson, "erpSpu": flags.erpSpu, "erpSkuList": toArray(flags.erpSkuList, 'string'), "publishSpu": flags.publishSpu, "vat": flags.vat, "weight": flags.weight, "weightUnit": flags.weightUnit, "depth": flags.depth, "width": flags.width, "height": flags.height, "dimensionUnit": flags.dimensionUnit, "productCategory": flags.productCategory, "productCategoryShow": flags.productCategoryShow, "productCategoryAll": flags.productCategoryAll, "vType": flags.vType, "vNum": flags.vNum, "attributeList": toArray(flags.attributeList, 'object'), "publicAttributeList": toArray(flags.publicAttributeList, 'object'), "publicAttributeStr": flags.publicAttributeStr, "mainPic": flags.mainPic, "productUrl": flags.productUrl, "mainPicList": toArray(flags.mainPicList, 'string'), "videoUrl": flags.videoUrl, "videoCover": flags.videoCover, "warehouse": flags.warehouse, "warehouseId": flags.warehouseId, "ozonSinglepublishSku": toArray(flags.ozonSinglepublishSku, 'object') })
    this.output(data)
  }
}
