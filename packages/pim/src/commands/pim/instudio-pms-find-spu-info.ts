// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindSpuInfo extends MBSCommand {
  static description = '商品池spu展示：商品池spu展示'

  static flags = {
    index: Flags.string({ description: '索引（字段名推断,语义待核实）' }),
    createdBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    createdOn: Flags.string({ description: '创建（字段名推断,语义待核实）' }),
    brandId: Flags.string({ description: '品牌ID（字段名推断,语义待核实）' }),
    skustatus: Flags.integer({ description: 'Skustatus（字段名推断,语义待核实）' }),
    warehouseid: Flags.integer({ description: 'Warehouseid（字段名推断,语义待核实）' }),
    positionname: Flags.string({ description: 'Positionname（字段名推断,语义待核实）' }),
    companyname: Flags.string({ description: 'Companyname（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    nameCn: Flags.string({ description: '名称中文（字段名推断,语义待核实）' }),
    tagId: Flags.integer({ description: '标签ID（字段名推断,语义待核实）' }),
    createtimestart: Flags.string({ description: 'Createtimestart（字段名推断,语义待核实）' }),
    createtimeend: Flags.string({ description: 'Createtimeend（字段名推断,语义待核实）' }),
    orderby: Flags.integer({ description: 'Orderby（字段名推断,语义待核实）' }),
    marketstates: Flags.integer({ description: 'Marketstates（字段名推断,语义待核实）' }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    levelNum: Flags.integer({ description: '级别数量（字段名推断,语义待核实）' }),
    principal: Flags.string({ description: 'Principal（字段名推断,语义待核实）' }),
    keywordArry: Flags.string({ description: '关键词ARRY（字段名推断,语义待核实）' }),
    userId: Flags.string({ description: '用户ID（字段名推断,语义待核实）' }),
    checkStatus: Flags.string({ description: '校验状态（字段名推断,语义待核实）' }),
    projectSpu: Flags.string({ description: '项目SPU（字段名推断,语义待核实）' }),
    developType: Flags.integer({ description: 'Develop类型（字段名推断,语义待核实）' }),
    developType2: Flags.integer({ description: 'Develop类型2（字段名推断,语义待核实）' }),
    salesLevel: Flags.string({ description: '销售级别（字段名推断,语义待核实）' }),
    isBoutique: Flags.string({ description: '是否Boutique（字段名推断,语义待核实）' }),
    missionStatus: Flags.integer({ description: 'Mission状态（字段名推断,语义待核实）' }),
    checkBy: Flags.string({ description: '校验人（字段名推断,语义待核实）' }),
    checkTimeStart: Flags.string({ description: '校验时间开始（字段名推断,语义待核实）' }),
    checkTimeEnd: Flags.string({ description: '校验时间结束（字段名推断,语义待核实）' }),
    saleNotes: Flags.string({ description: '销售Notes（字段名推断,语义待核实）' }),
    teamId: Flags.string({ description: '团队ID（字段名推断,语义待核实）' }),
    applicablePlatform: Flags.string({ description: 'Applicable平台（字段名推断,语义待核实）' }),
    isChoice: Flags.integer({ description: '是否Choice（字段名推断,语义待核实）' }),
    applicableSite: Flags.string({ description: 'Applicable站点（字段名推断,语义待核实）' }),
    myRecommend: Flags.string({ description: 'Recommend（字段名推断,语义待核实）' }),
    isTwoPicture: Flags.string({ description: '是否两个图片（字段名推断,语义待核实）' }),
    pictureSupplierSelfie: Flags.string({ description: '图片供应商Selfie（字段名推断,语义待核实）' }),
    pageSize: Flags.string({ description: '每页条数（字段名推断,语义待核实）' }),
    submitSaleTimeStart: Flags.string({ description: '提交销售时间开始（字段名推断,语义待核实）' }),
    submitSaleTimeEnd: Flags.string({ description: '提交销售时间结束（字段名推断,语义待核实）' }),
    specialMark: Flags.string({ description: '特殊MARK（字段名推断,语义待核实）' }),
    productTag: Flags.string({ description: '商品标签（字段名推断,语义待核实）' }),
    tkVideo: Flags.string({ description: 'TikTok视频（字段名推断,语义待核实）' }),
    riskLevel: Flags.integer({ description: '风险级别（字段名推断,语义待核实）' }),
    reexamineCheckBy: Flags.string({ description: 'Reexamine校验人（字段名推断,语义待核实）' }),
    reexaminebeginTime: Flags.string({ description: 'Reexaminebegin时间（字段名推断,语义待核实）' }),
    reexamineEndTime: Flags.string({ description: 'Reexamine结束时间（字段名推断,语义待核实）' }),
    lookAtMe: Flags.integer({ description: 'LOOK时间ME（字段名推断,语义待核实）' }),
    isHidden: Flags.integer({ description: '是否Hidden（字段名推断,语义待核实）' }),
    isTort: Flags.integer({ description: '是否侵权（字段名推断,语义待核实）' }),
    spotCheck: Flags.integer({ description: 'SPOT校验（字段名推断,语义待核实）' }),
    latelySaleSubmit: Flags.string({ description: 'Lately销售提交（字段名推断,语义待核实）' }),
    nameEn: Flags.string({ description: '名称英文（字段名推断,语义待核实）' }),
    gifOrVideo: Flags.integer({ description: 'GIF视频（字段名推断,语义待核实）' }),
    isActualPicture: Flags.integer({ description: '是否实际图片（字段名推断,语义待核实）' }),
    recommender: Flags.string({ description: 'Recommender（字段名推断,语义待核实）' }),
    companyId: Flags.integer({ description: '公司ID（字段名推断,语义待核实）' }),
    priceRange: Flags.string({ description: '价格范围（字段名推断,语义待核实）' }),
    productTags: Flags.string({ description: '商品TAGS（字段名推断,语义待核实） (comma-separated)' }),
    certification: Flags.string({ description: 'Certification（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindSpuInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/spu/findSpuInfo', {}, { params: { "index": flags.index, "createdBy": flags.createdBy, "createdOn": flags.createdOn, "brand_id": flags.brandId, "skustatus": flags.skustatus, "warehouseid": flags.warehouseid, "positionname": flags.positionname, "companyname": flags.companyname, "spu": flags.spu, "name_cn": flags.nameCn, "tag_id": flags.tagId, "createtimestart": flags.createtimestart, "createtimeend": flags.createtimeend, "orderby": flags.orderby, "marketstates": flags.marketstates, "categoryId": flags.categoryId, "levelNum": flags.levelNum, "principal": flags.principal, "keywordArry": flags.keywordArry, "userId": flags.userId, "checkStatus": flags.checkStatus, "projectSpu": flags.projectSpu, "developType": flags.developType, "developType2": flags.developType2, "salesLevel": flags.salesLevel, "isBoutique": flags.isBoutique, "missionStatus": flags.missionStatus, "checkBy": flags.checkBy, "checkTimeStart": flags.checkTimeStart, "checkTimeEnd": flags.checkTimeEnd, "saleNotes": flags.saleNotes, "teamId": flags.teamId, "applicablePlatform": flags.applicablePlatform, "isChoice": flags.isChoice, "applicableSite": flags.applicableSite, "myRecommend": flags.myRecommend, "isTwoPicture": flags.isTwoPicture, "pictureSupplierSelfie": flags.pictureSupplierSelfie, "pageSize": flags.pageSize, "submitSaleTimeStart": flags.submitSaleTimeStart, "submitSaleTimeEnd": flags.submitSaleTimeEnd, "specialMark": flags.specialMark, "productTag": flags.productTag, "tkVideo": flags.tkVideo, "riskLevel": flags.riskLevel, "reexamineCheckBy": flags.reexamineCheckBy, "reexaminebeginTime": flags.reexaminebeginTime, "reexamineEndTime": flags.reexamineEndTime, "lookAtMe": flags.lookAtMe, "isHidden": flags.isHidden, "isTort": flags.isTort, "spotCheck": flags.spotCheck, "latelySaleSubmit": flags.latelySaleSubmit, "name_en": flags.nameEn, "gifOrVideo": flags.gifOrVideo, "isActualPicture": flags.isActualPicture, "recommender": flags.recommender, "companyId": flags.companyId, "priceRange": flags.priceRange, "productTags": toArray(flags.productTags, 'string'), "certification": flags.certification } })
    this.output(data)
  }
}
