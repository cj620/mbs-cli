// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetEbaySinglepublishList extends MBSCommand {
  static description = '获取刊登信息列表：获取刊登信息列表'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: '马帮spu' }),
    publishSpu: Flags.string({ description: '刊登spu' }),
    mainPic: Flags.string({ description: '主图' }),
    title: Flags.string({ description: '标题' }),
    vType: Flags.integer({ description: '类型（字段名推断,语义待核实）' }),
    vNum: Flags.integer({ description: '数量（字段名推断,语义待核实）' }),
    shopname: Flags.string({ description: '店铺' }),
    site: Flags.string({ description: '站点' }),
    siteList: Flags.string({ description: '站点列表（字段名推断,语义待核实） (comma-separated)' }),
    priceArea: Flags.string({ description: '价格' }),
    profitRate: Flags.string({ description: '毛利率' }),
    pricedLogistics: Flags.string({ description: '算价物流' }),
    deliveryPlace: Flags.string({ description: '发货地' }),
    stockingTime: Flags.integer({ description: '备货时长' }),
    publishStatus: Flags.integer({ description: '刊登状态 1:等待刊登 2:刊登中 3：刊登成功 4:刊登失败' }),
    publishItemid: Flags.string({ description: '刊登商品项ID（字段名推断,语义待核实）' }),
    publishResponse: Flags.string({ description: '刊登响应（字段名推断,语义待核实）' }),
    createBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    createById: Flags.string({ description: '创建人ID（字段名推断,语义待核实）' }),
    createTime: Flags.string({ description: '创建时间（字段名推断,语义待核实）' }),
    publishBy: Flags.string({ description: '刊登人（字段名推断,语义待核实）' }),
    publishTime: Flags.string({ description: '刊登时间（字段名推断,语义待核实）' }),
    updateTime: Flags.string({ description: '更新时间（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    starttime: Flags.string({ description: 'Starttime（字段名推断,语义待核实）' }),
    endtime: Flags.string({ description: 'Endtime（字段名推断,语义待核实）' }),
    shopsSplice: Flags.string({ description: '店铺列表Splice（字段名推断,语义待核实）' }),
    shopmanager: Flags.string({ description: 'Shopmanager（字段名推断,语义待核实）' }),
    categoryname: Flags.string({ description: 'Categoryname（字段名推断,语义待核实）' }),
    checkSku: Flags.string({ description: '校验SKU（字段名推断,语义待核实）' }),
    jumpUrl: Flags.string({ description: 'JUMPURL（字段名推断,语义待核实）' }),
    isCompulsory: Flags.integer({ description: '是否Compulsory（字段名推断,语义待核实）' }),
    timeOccur: Flags.string({ description: '时间Occur（字段名推断,语义待核实）' }),
    pt: Flags.string({ description: 'PT（字段名推断,语义待核实）' }),
    location: Flags.string({ description: '库位（字段名推断,语义待核实）' }),
    vatPercent: Flags.string({ description: 'VAT百分比（字段名推断,语义待核实）' }),
    englishKeywords: Flags.string({ description: 'EnglishKeywords（字段名推断,语义待核实）' }),
    srcId: Flags.integer({ description: 'SRCID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetEbaySinglepublishList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/ebaySinglepublishInfoController/getEbaySinglepublishList', { "id": flags.id, "erpSpu": flags.erpSpu, "publishSpu": flags.publishSpu, "mainPic": flags.mainPic, "title": flags.title, "vType": flags.vType, "vNum": flags.vNum, "shopname": flags.shopname, "site": flags.site, "siteList": toArray(flags.siteList, 'string'), "priceArea": flags.priceArea, "profitRate": flags.profitRate, "pricedLogistics": flags.pricedLogistics, "deliveryPlace": flags.deliveryPlace, "stockingTime": flags.stockingTime, "publishStatus": flags.publishStatus, "publishItemid": flags.publishItemid, "publishResponse": flags.publishResponse, "createBy": flags.createBy, "createById": flags.createById, "createTime": flags.createTime, "publishBy": flags.publishBy, "publishTime": flags.publishTime, "updateTime": flags.updateTime, "startIndex": flags.startIndex, "pageSize": flags.pageSize, "currentPage": flags.currentPage, "starttime": flags.starttime, "endtime": flags.endtime, "shopsSplice": flags.shopsSplice, "shopmanager": flags.shopmanager, "categoryname": flags.categoryname, "checkSku": flags.checkSku, "jumpUrl": flags.jumpUrl, "isCompulsory": flags.isCompulsory, "timeOccur": flags.timeOccur, "pt": flags.pt, "location": flags.location, "vatPercent": flags.vatPercent, "englishKeywords": flags.englishKeywords, "srcId": flags.srcId })
    this.output(data)
  }
}
