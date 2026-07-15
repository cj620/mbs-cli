// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsValidateTort extends MBSCommand {
  static description = '验证SKU对应供应商是否在侵权列表存在：验证SKU对应供应商是否在侵权列表存在'

  static flags = {
    spu: Flags.string({ description: 'spu' }),
    nameEn: Flags.string({ description: '产品英文名称' }),
    nameCh: Flags.string({ description: '产品中文名称' }),
    saleNotes: Flags.string({ description: '销售备注' }),
    descriptionEn: Flags.string({ description: '英文描述' }),
    tagId: Flags.integer({ description: '标记商品id' }),
    oldPlatformId: Flags.string({ description: '原始平台编号' }),
    oldSpu: Flags.string({ description: '原始spu' }),
    positionId: Flags.integer({ description: '仓位id' }),
    receiveId: Flags.integer({ description: '收货点' }),
    host: Flags.string({ description: '仓位信息' }),
    warningDays: Flags.integer({ description: '警戒天数' }),
    purchaseDays: Flags.integer({ description: '采购天数' }),
    pkgMaterialId: Flags.integer({ description: '包材id' }),
    purchaseNotes: Flags.string({ description: '采购备注' }),
    categoryId: Flags.string({ description: '分类id' }),
    brandId: Flags.string({ description: '品牌id' }),
    suppyId: Flags.integer({ description: '供应商id' }),
    supplySkuId: Flags.string({ description: '供应商的sukid' }),
    productUrl: Flags.string({ description: '产品地址' }),
    createdBy: Flags.string({ description: '创建人id' }),
    createdOn: Flags.string({ description: '创建时间' }),
    listPicture: Flags.string({ description: '产品图片 Map<Object, Object>' }),
    canSalePlatform: Flags.string({ description: '可销售平台' }),
    tort: Flags.string({ description: '侵权 1' }),
    keyword: Flags.string({ description: '关键词' }),
    englishKeyword: Flags.string({ description: '英文关键词' }),
    missionId: Flags.integer({ description: '开发池任务ID' }),
    brandGrantShop: Flags.string({ description: '品牌授权店铺' }),
    declarenamecn: Flags.string({ description: '申报中文名' }),
    declarenameen: Flags.string({ description: '申报英文名' }),
    choice: Flags.integer({ description: '是否备货' }),
    photograph: Flags.integer({ description: '是否拍照' }),
    photographRequire: Flags.string({ description: '拍照要求' }),
    isNeedVideo: Flags.integer({ description: '是否需要拍视频' }),
    videoRequire: Flags.string({ description: '拍视频要求' }),
    smallArticles: Flags.integer({ description: '是否SPK轻小件' }),
    spotCheck: Flags.integer({ description: '是否抽检' }),
    sitePlatform: Flags.string({ description: '侵权站点' }),
    actualPicture: Flags.string({ description: '是否是实拍图' }),
    minProfitRate: Flags.string({ description: '最低毛利率' }),
    lowestPrice: Flags.string({ description: '最低限价' }),
    packageGuide: Flags.string({ description: '包材规格' }),
    specialMark: Flags.integer({ description: '商品特殊标记 1.现货 2.定制产品 3.预售产品' }),
    expectedArrivalDays: Flags.integer({ description: '定制天数' }),
    advanceSaleTime: Flags.string({ description: '预售时间' }),
    developType: Flags.integer({ description: '开发类型' }),
    startBatch: Flags.integer({ description: '起批量' }),
    presalePrice: Flags.string({ description: '预售估价' }),
    englishName: Flags.string({ description: '英文名称' }),
    mainKeyword: Flags.string({ description: '主关键词' }),
    topRank: Flags.string({ description: '最高排名' }),
    mainKeywordFlow: Flags.string({ description: '主关键词流量' }),
    differentiation: Flags.string({ description: '差异化' }),
    productDesc: Flags.string({ description: '产品备注' }),
    profitRate: Flags.string({ description: '利润率' }),
    productList: Flags.string({ description: '产品清单' }),
    freightWay: Flags.string({ description: '货运方式' }),
    shipCycle: Flags.string({ description: '发货周期' }),
    volume: Flags.string({ description: '包装体积' }),
    arterReMarkImage: Flags.string({ description: '美工备注参考图片' }),
    warehouseType: Flags.integer({ description: '1是FBA海外仓。2是万邑通海外仓。3是八方达海外仓。4是谷仓海外仓\';' }),
    styleId: Flags.string({ description: '风格ID' }),
    supplySpu: Flags.string({ description: '供应商spu' }),
    productNature: Flags.integer({ description: '产品性质:1自建 0跟卖' }),
    seasonalProductDeadlineStockingDay: Flags.string({ description: '季节产品截止备货日' }),
    applicablePlatform: Flags.string({ description: '适用平台' }),
    applicableSite: Flags.string({ description: '适用站点' }),
    chineseKeyword: Flags.string({ description: '中文关键词' }),
    brandImages: Flags.string({ description: '品牌图片list (comma-separated)' }),
    isTwoPicture: Flags.integer({ description: '是否第二套图 1是有,默认0' }),
    isSupplierPicture: Flags.integer({ description: '是否供应商图 1是有 默认0' }),
    text: Flags.string({ description: '文本（字段名推断,语义待核实）' }),
    packageMethod: Flags.string({ description: '包裹方法（字段名推断,语义待核实）' }),
    photographRequire2: Flags.string({ description: 'PhotographRequire2（字段名推断,语义待核实）' }),
    competitorsTitle: Flags.string({ description: 'Competitors标题（字段名推断,语义待核实）' }),
    patentCourtry: Flags.string({ description: 'PatentCourtry（字段名推断,语义待核实）' }),
    arterNotesImg: Flags.string({ description: 'ArterNotes图片（字段名推断,语义待核实）' }),
    supplierPicture: Flags.string({ description: '供应商图片（字段名推断,语义待核实）' }),
    supplierVideo: Flags.string({ description: '供应商视频（字段名推断,语义待核实）' }),
    pictureStyle: Flags.string({ description: '图片样式（字段名推断,语义待核实）' }),
    supplierStatus: Flags.string({ description: '供应商状态（字段名推断,语义待核实）' }),
    hwcType: Flags.string({ description: '海外仓类型（字段名推断,语义待核实）' }),
    specialType: Flags.string({ description: '特殊类型（字段名推断,语义待核实）' }),
    arterNotes: Flags.string({ description: '美工备注 --- 其他' }),
    hostPictureTitle: Flags.string({ description: '美工备注 --- 主图文案' }),
    sceneStyle: Flags.string({ description: '美工备注 --- 场景风格' }),
    comparisonPicture: Flags.string({ description: '美工备注 --- 对比图' }),
    physicalPictureUrl: Flags.string({ description: '实拍图' }),
    physicalPictureUrls: Flags.string({ description: '实拍图片多个 (comma-separated)' }),
    certificationNames: Flags.string({ description: '商品资质名称数组 (comma-separated)' }),
    spuCertificationImages: Flags.string({ description: '商品资质图片数组 (comma-separated)' }),
    sellingPoint: Flags.string({ description: '卖点' }),
    aiAttributes: Flags.string({ description: 'AI生成的产品属性（JSON）' }),
    applicableCrowd: Flags.string({ description: '适用人群' }),
    spuSpellList: Flags.string({ description: 'SPUSpell列表（字段名推断,语义待核实） (comma-separated)' }),
    applicableCountries: Flags.string({ description: '适用国家' }),
    model: Flags.string({ description: '模型（字段名推断,语义待核实）' }),
    urls: Flags.string({ description: '图片地址 (comma-separated)' }),
    procurementRemark: Flags.string({ description: '采购备注' }),
    platformName: Flags.string({ description: '适用平台（如 "Ozon"、"ozon.ru"、"119"），用于触发 Ozon 俄文文案生成' }),
    productTitle: Flags.string({ description: '产品标题（Ozon 文案生成入参）' }),
    productDescription: Flags.string({ description: '产品描述（Ozon 文案生成入参）' }),
    devlopReason: Flags.string({ description: 'Devlop原因（字段名推断,语义待核实）' }),
    spuLimitPrice: Flags.string({ description: 'spu限价信息 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsValidateTort)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/AllMessage/validateTort', { "spu": flags.spu, "name_en": flags.nameEn, "name_ch": flags.nameCh, "sale_notes": flags.saleNotes, "description_en": flags.descriptionEn, "tag_id": flags.tagId, "oldPlatformId": flags.oldPlatformId, "oldSpu": flags.oldSpu, "position_id": flags.positionId, "receiveId": flags.receiveId, "host": flags.host, "warning_days": flags.warningDays, "purchase_days": flags.purchaseDays, "pkg_material_id": flags.pkgMaterialId, "purchase_notes": flags.purchaseNotes, "category_id": flags.categoryId, "brand_id": flags.brandId, "suppy_id": flags.suppyId, "supply_sku_id": flags.supplySkuId, "product_url": flags.productUrl, "created_by": flags.createdBy, "created_on": flags.createdOn, "listPicture": flags.listPicture, "canSalePlatform": flags.canSalePlatform, "tort": flags.tort, "keyword": flags.keyword, "englishKeyword": flags.englishKeyword, "missionId": flags.missionId, "brandGrantShop": flags.brandGrantShop, "declarenamecn": flags.declarenamecn, "declarenameen": flags.declarenameen, "choice": flags.choice, "photograph": flags.photograph, "photographRequire": flags.photographRequire, "isNeedVideo": flags.isNeedVideo, "videoRequire": flags.videoRequire, "smallArticles": flags.smallArticles, "spotCheck": flags.spotCheck, "sitePlatform": flags.sitePlatform, "actualPicture": flags.actualPicture, "minProfitRate": flags.minProfitRate, "lowestPrice": flags.lowestPrice, "packageGuide": flags.packageGuide, "specialMark": flags.specialMark, "expectedArrivalDays": flags.expectedArrivalDays, "advanceSaleTime": flags.advanceSaleTime, "developType": flags.developType, "startBatch": flags.startBatch, "presalePrice": flags.presalePrice, "englishName": flags.englishName, "mainKeyword": flags.mainKeyword, "topRank": flags.topRank, "mainKeywordFlow": flags.mainKeywordFlow, "differentiation": flags.differentiation, "productDesc": flags.productDesc, "profitRate": flags.profitRate, "productList": flags.productList, "freightWay": flags.freightWay, "shipCycle": flags.shipCycle, "volume": flags.volume, "arterReMarkImage": flags.arterReMarkImage, "warehouseType": flags.warehouseType, "styleId": flags.styleId, "supplySpu": flags.supplySpu, "productNature": flags.productNature, "seasonalProductDeadlineStockingDay": flags.seasonalProductDeadlineStockingDay, "applicablePlatform": flags.applicablePlatform, "applicableSite": flags.applicableSite, "chineseKeyword": flags.chineseKeyword, "brandImages": toArray(flags.brandImages, 'string'), "isTwoPicture": flags.isTwoPicture, "isSupplierPicture": flags.isSupplierPicture, "text": flags.text, "packageMethod": flags.packageMethod, "photographRequire2": flags.photographRequire2, "competitorsTitle": flags.competitorsTitle, "patentCourtry": flags.patentCourtry, "arter_notes_img": flags.arterNotesImg, "supplier_picture": flags.supplierPicture, "supplier_video": flags.supplierVideo, "picture_style": flags.pictureStyle, "supplierStatus": flags.supplierStatus, "hwcType": flags.hwcType, "specialType": flags.specialType, "arter_notes": flags.arterNotes, "hostPictureTitle": flags.hostPictureTitle, "sceneStyle": flags.sceneStyle, "comparisonPicture": flags.comparisonPicture, "physicalPictureUrl": flags.physicalPictureUrl, "physicalPictureUrls": toArray(flags.physicalPictureUrls, 'string'), "certificationNames": toArray(flags.certificationNames, 'string'), "spuCertificationImages": toArray(flags.spuCertificationImages, 'object'), "sellingPoint": flags.sellingPoint, "aiAttributes": flags.aiAttributes, "applicableCrowd": flags.applicableCrowd, "spuSpellList": toArray(flags.spuSpellList, 'object'), "applicableCountries": flags.applicableCountries, "model": flags.model, "urls": toArray(flags.urls, 'string'), "procurementRemark": flags.procurementRemark, "platformName": flags.platformName, "productTitle": flags.productTitle, "productDescription": flags.productDescription, "devlopReason": flags.devlopReason, "spuLimitPrice": toArray(flags.spuLimitPrice, 'object') })
    this.output(data)
  }
}
