// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetPriceInfomation extends MBSCommand {
  static description = '获取运费模板：获取运费模板'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    listId: Flags.string({ description: '列表ID（字段名推断,语义待核实）' }),
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    currency: Flags.string({ description: '币种（字段名推断,语义待核实）' }),
    groupName: Flags.string({ description: '分组名称（字段名推断,语义待核实）' }),
    categoryId: Flags.integer({ description: '类目ID（字段名推断,语义待核实）' }),
    groups: Flags.string({ description: 'Groups（字段名推断,语义待核实） (comma-separated)' }),
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    publishSpu: Flags.string({ description: '刊登SPU（字段名推断,语义待核实）' }),
    images: Flags.string({ description: '图片列表（字段名推断,语义待核实） (comma-separated)' }),
    backgroundWhite: Flags.string({ description: 'BackgroundWhite（字段名推断,语义待核实）' }),
    backgroundVT: Flags.string({ description: 'BackgroundVT（字段名推断,语义待核实）' }),
    videoUrl: Flags.string({ description: '视频URL（字段名推断,语义待核实）' }),
    description: Flags.string({ description: '描述（字段名推断,语义待核实）' }),
    packageLength: Flags.string({ description: '包裹长度（字段名推断,语义待核实）' }),
    packageWidth: Flags.string({ description: '包裹宽度（字段名推断,语义待核实）' }),
    packageHeight: Flags.string({ description: '包裹高度（字段名推断,语义待核实）' }),
    packageWeight: Flags.string({ description: '包裹重量（字段名推断,语义待核实）' }),
    title: Flags.string({ description: '标题（字段名推断,语义待核实）' }),
    productAttributes: Flags.string({ description: '商品Attributes（字段名推断,语义待核实） (comma-separated)' }),
    skus: Flags.string({ description: 'SKU列表（字段名推断,语义待核实） (comma-separated)' }),
    imageRelate: Flags.string({ description: '图片Relate（字段名推断,语义待核实）' }),
    wholeProduct: Flags.integer({ description: 'Whole商品（字段名推断,语义待核实）' }),
    productUnit: Flags.integer({ description: '商品单位（字段名推断,语义待核实）' }),
    packageType: Flags.integer({ description: '包裹类型（字段名推断,语义待核实）' }),
    lotNum: Flags.integer({ description: 'LOT数量（字段名推断,语义待核实）' }),
    bulkDiscount: Flags.integer({ description: 'BULK折扣（字段名推断,语义待核实）' }),
    bulkOrder: Flags.integer({ description: 'BULK订单（字段名推断,语义待核实）' }),
    isPackSell: Flags.integer({ description: '是否打包销售（字段名推断,语义待核实）' }),
    baseUnit: Flags.integer({ description: '基础单位（字段名推断,语义待核实）' }),
    addUnit: Flags.integer({ description: '新增单位（字段名推断,语义待核实）' }),
    addWeight: Flags.string({ description: '新增重量（字段名推断,语义待核实）' }),
    freightTemplateId: Flags.integer({ description: '运费模板ID（字段名推断,语义待核实）' }),
    freightTemplateName: Flags.string({ description: '运费模板名称（字段名推断,语义待核实）' }),
    deliveryTime: Flags.integer({ description: '配送时间（字段名推断,语义待核实）' }),
    reduceStrategy: Flags.string({ description: 'Reduce策略（字段名推断,语义待核实）' }),
    operId: Flags.integer({ description: '操作ID（字段名推断,语义待核实）' }),
    publishStatus: Flags.integer({ description: '刊登状态（字段名推断,语义待核实）' }),
    isCountry: Flags.integer({ description: '是否国家（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetPriceInfomation)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/aliexpressSinglepublishController/getPriceInfomation', { "id": flags.id, "listId": flags.listId, "shopName": flags.shopName, "currency": flags.currency, "groupName": flags.groupName, "categoryId": flags.categoryId, "groups": toArray(flags.groups, 'string'), "erpSpu": flags.erpSpu, "publishSpu": flags.publishSpu, "images": toArray(flags.images, 'string'), "backgroundWhite": flags.backgroundWhite, "backgroundVT": flags.backgroundVT, "videoUrl": flags.videoUrl, "description": flags.description, "packageLength": flags.packageLength, "packageWidth": flags.packageWidth, "packageHeight": flags.packageHeight, "packageWeight": flags.packageWeight, "title": flags.title, "productAttributes": toArray(flags.productAttributes, 'object'), "skus": toArray(flags.skus, 'object'), "imageRelate": flags.imageRelate, "wholeProduct": flags.wholeProduct, "productUnit": flags.productUnit, "packageType": flags.packageType, "lotNum": flags.lotNum, "bulkDiscount": flags.bulkDiscount, "bulkOrder": flags.bulkOrder, "isPackSell": flags.isPackSell, "baseUnit": flags.baseUnit, "addUnit": flags.addUnit, "addWeight": flags.addWeight, "freightTemplateId": flags.freightTemplateId, "freightTemplateName": flags.freightTemplateName, "deliveryTime": flags.deliveryTime, "reduceStrategy": flags.reduceStrategy, "operId": flags.operId, "publishStatus": flags.publishStatus, "isCountry": flags.isCountry })
    this.output(data)
  }
}
