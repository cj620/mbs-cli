// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsSmtEditInfoRefresh extends MBSCommand {
  static description = '添加在线listing生成记录：添加在线listing生成记录'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    listId: Flags.string({ description: '列表ID（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: '马帮spu' }),
    publishSpu: Flags.string({ description: '刊登spu' }),
    mainPic: Flags.string({ description: '主图（表:SmtSinglepublishInfo）' }),
    erpSku: Flags.string({ description: '马帮sku' }),
    publishSku: Flags.string({ description: '刊登sku' }),
    skuPic: Flags.string({ description: 'sku图片（表:SmtSinglepublishInfo）' }),
    vType: Flags.integer({ description: '1:单变体2：多变体' }),
    vNum: Flags.integer({ description: '变体数量' }),
    skuAttributes: Flags.string({ description: 'sku属性' }),
    attributesRelated: Flags.string({ description: '什么属性作为轮换条件' }),
    savenum: Flags.integer({ description: '库存' }),
    price: Flags.string({ description: '等于newprice 用于显示' }),
    cargoPrice: Flags.string({ description: 'Cargo价格（字段名推断,语义待核实）' }),
    currency: Flags.string({ description: '等于newcurrency' }),
    title2: Flags.string({ description: '副标题' }),
    shopname: Flags.string({ description: '店铺' }),
    isPriceDifference: Flags.integer({ description: '1价格差异过大' }),
    productCategory1: Flags.string({ description: '产品分类1' }),
    productCategory1Show: Flags.string({ description: '页面显示' }),
    productCategory1Id: Flags.string({ description: '商品类目1ID（字段名推断,语义待核实）' }),
    description: Flags.string({ description: '描述' }),
    stockingTime: Flags.integer({ description: '备货时长' }),
    createBy: Flags.string({ description: '创建人' }),
    publishBy: Flags.string({ description: '刊登人' }),
    publishTimeDate: Flags.string({ description: '刊登时间' }),
    spkassessFlag: Flags.integer({ description: '1:"符合spk考核" 0："不符合"' }),
    shippingService: Flags.string({ description: '物流方式' }),
    typeName: Flags.string({ description: '类型名称（字段名推断,语义待核实）' }),
    mainPicList: Flags.string({ description: '主图片列表（字段名推断,语义待核实） (comma-separated)' }),
    saleNotes: Flags.string({ description: '销售Notes（字段名推断,语义待核实）' }),
    vAttributes: Flags.string({ description: 'Attributes（字段名推断,语义待核实） (comma-separated)' }),
    largeAmountPaypal: Flags.string({ description: '大额' }),
    smallAmountPaypal: Flags.string({ description: '小额' }),
    logistics: Flags.string({ description: '物流（字段名推断,语义待核实）' }),
    attributesKey: Flags.string({ description: 'Attributes键（字段名推断,语义待核实）' }),
    attributesValue: Flags.string({ description: 'Attributes值（字段名推断,语义待核实）' }),
    attributesKeyList: Flags.string({ description: 'Attributes键列表（字段名推断,语义待核实） (comma-separated)' }),
    attributesValueList: Flags.string({ description: 'Attributes值列表（字段名推断,语义待核实） (comma-separated)' }),
    itemSpecifics: Flags.string({ description: '条目Specifics（字段名推断,语义待核实）' }),
    itemSpecificsList: Flags.string({ description: '条目Specifics列表（字段名推断,语义待核实） (comma-separated)' }),
    itemSpecificsMore: Flags.string({ description: '条目SpecificsMORE（字段名推断,语义待核实）' }),
    itemSpecificsMoreList: Flags.string({ description: '条目SpecificsMORE列表（字段名推断,语义待核实） (comma-separated)' }),
    isCompulsory: Flags.integer({ description: '是否Compulsory（字段名推断,语义待核实）' }),
    skuStatus: Flags.string({ description: 'SKU状态（字段名推断,语义待核实）' }),
    skuSavenum: Flags.string({ description: 'SKU保存数量（字段名推断,语义待核实）' }),
    timeOccur: Flags.string({ description: '时间Occur（字段名推断,语义待核实）' }),
    batchId: Flags.string({ description: '时间+店铺名字' }),
    title: Flags.string({ description: '标题' }),
    skuColor: Flags.string({ description: 'sku颜色' }),
    skuSize: Flags.string({ description: 'sku尺寸' }),
    productStatus: Flags.string({ description: '产品状态' }),
    inventory: Flags.integer({ description: '在线库存' }),
    skuStorageInventoryList: Flags.string({ description: 'SKU仓储库存列表（字段名推断,语义待核实） (comma-separated)' }),
    profitRate: Flags.string({ description: '毛利率' }),
    jitProfit: Flags.string({ description: '毛利率' }),
    offRate: Flags.string({ description: '折扣' }),
    srcPrice: Flags.string({ description: '源价格' }),
    newPrice: Flags.string({ description: '新价格' }),
    salesLevel: Flags.string({ description: '销量级别' }),
    isBind: Flags.integer({ description: '1:捆绑2:不捆绑' }),
    isTort: Flags.integer({ description: '1:侵权2:不侵权' }),
    embargoedPlatform: Flags.string({ description: '禁售平台' }),
    tortWord: Flags.string({ description: '侵权词' }),
    priceArea: Flags.string({ description: '价格区间' }),
    spuCategory: Flags.string({ description: '类目' }),
    brandName: Flags.string({ description: '品牌' }),
    brandId: Flags.integer({ description: '品牌' }),
    publishOper: Flags.string({ description: '刊登人' }),
    publishOperId: Flags.integer({ description: '刊登人id' }),
    publishStatus: Flags.integer({ description: '刊登状态 1:等待刊登2:刊登中3:刊登成功4:刊登失败' }),
    onlineStatus: Flags.integer({ description: '0:等待上架1:上架中2:上架成功3:上架失败4:放弃上架' }),
    publishItemid: Flags.string({ description: '刊登itemid' }),
    publishResponse: Flags.string({ description: '刊登返回' }),
    updateBy: Flags.string({ description: '修改人' }),
    updateTime: Flags.string({ description: '更新时间（字段名推断,语义待核实）' }),
    shipTo: Flags.string({ description: '发货（字段名推断,语义待核实）' }),
    isOffline: Flags.integer({ description: '0：未下架 1：已下架' }),
    srcCurrency: Flags.string({ description: '源币种' }),
    newCurrency: Flags.string({ description: '新币种' }),
    profitRateMin: Flags.string({ description: '最低毛利率' }),
    isCountry: Flags.integer({ description: '1：按照国家算价' }),
    groupName: Flags.string({ description: '分组名称（字段名推断,语义待核实）' }),
    weight: Flags.string({ description: '重量（字段名推断,语义待核实）' }),
    freightid: Flags.string({ description: 'Freightid（字段名推断,语义待核实）' }),
    status2: Flags.integer({ description: '状态2（字段名推断,语义待核实）' }),
    smtCategoryId: Flags.string({ description: '速卖通类目ID（字段名推断,语义待核实）' }),
    skuList: Flags.string({ description: 'SKU列表（字段名推断,语义待核实） (comma-separated)' }),
    attributesKeyPropsList: Flags.string({ description: 'Attributes键Props列表（字段名推断,语义待核实） (comma-separated)' }),
    packagelength: Flags.string({ description: 'Packagelength（字段名推断,语义待核实）' }),
    packagewidth: Flags.string({ description: 'Packagewidth（字段名推断,语义待核实）' }),
    packageheight: Flags.string({ description: 'Packageheight（字段名推断,语义待核实）' }),
    packagevolume: Flags.string({ description: 'Packagevolume（字段名推断,语义待核实）' }),
    productunit: Flags.string({ description: '计量单位' }),
    packagetype: Flags.integer({ description: '销售方式 0不打包 1打包' }),
    lotnum: Flags.integer({ description: '每包件数' }),
    definitonprops: Flags.string({ description: 'Definitonprops（字段名推断,语义待核实）' }),
    groups: Flags.string({ description: 'Groups（字段名推断,语义待核实）' }),
    groupList: Flags.string({ description: '分组列表（字段名推断,语义待核实） (comma-separated)' }),
    ispacksell: Flags.integer({ description: '0：非自定义计重，1自定义计重' }),
    baseunit: Flags.integer({ description: 'Baseunit（字段名推断,语义待核实）' }),
    addunit: Flags.integer({ description: 'Addunit（字段名推断,语义待核实）' }),
    addweight: Flags.string({ description: 'Addweight（字段名推断,语义待核实）' }),
    isbulk: Flags.integer({ description: 'Isbulk（字段名推断,语义待核实）' }),
    bulkorder: Flags.integer({ description: 'Bulkorder（字段名推断,语义待核实）' }),
    bulkdiscount: Flags.integer({ description: 'Bulkdiscount（字段名推断,语义待核实）' }),
    isCountryMap: Flags.string({ description: '是否国家MAP（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsSmtEditInfoRefresh)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/smtSinglepublishController/smtEditInfoRefresh', { "id": flags.id, "listId": flags.listId, "erpSpu": flags.erpSpu, "publishSpu": flags.publishSpu, "mainPic": flags.mainPic, "erpSku": flags.erpSku, "publishSku": flags.publishSku, "skuPic": flags.skuPic, "vType": flags.vType, "vNum": flags.vNum, "skuAttributes": flags.skuAttributes, "attributesRelated": flags.attributesRelated, "savenum": flags.savenum, "price": flags.price, "cargoPrice": flags.cargoPrice, "currency": flags.currency, "title2": flags.title2, "shopname": flags.shopname, "isPriceDifference": flags.isPriceDifference, "productCategory1": flags.productCategory1, "productCategory1Show": flags.productCategory1Show, "productCategory1Id": flags.productCategory1Id, "description": flags.description, "stockingTime": flags.stockingTime, "createBy": flags.createBy, "publishBy": flags.publishBy, "publishTimeDate": flags.publishTimeDate, "spkassessFlag": flags.spkassessFlag, "shippingService": flags.shippingService, "typeName": flags.typeName, "mainPicList": toArray(flags.mainPicList, 'string'), "saleNotes": flags.saleNotes, "vAttributes": toArray(flags.vAttributes, 'string'), "largeAmountPaypal": flags.largeAmountPaypal, "smallAmountPaypal": flags.smallAmountPaypal, "logistics": flags.logistics, "attributesKey": flags.attributesKey, "attributesValue": flags.attributesValue, "attributesKeyList": toArray(flags.attributesKeyList, 'string'), "attributesValueList": toArray(flags.attributesValueList, 'string'), "itemSpecifics": flags.itemSpecifics, "itemSpecificsList": toArray(flags.itemSpecificsList, 'object'), "itemSpecificsMore": flags.itemSpecificsMore, "itemSpecificsMoreList": toArray(flags.itemSpecificsMoreList, 'object'), "isCompulsory": flags.isCompulsory, "skuStatus": flags.skuStatus, "skuSavenum": flags.skuSavenum, "timeOccur": flags.timeOccur, "batchId": flags.batchId, "title": flags.title, "skuColor": flags.skuColor, "skuSize": flags.skuSize, "productStatus": flags.productStatus, "inventory": flags.inventory, "skuStorageInventoryList": toArray(flags.skuStorageInventoryList, 'object'), "profitRate": flags.profitRate, "jitProfit": flags.jitProfit, "offRate": flags.offRate, "srcPrice": flags.srcPrice, "newPrice": flags.newPrice, "salesLevel": flags.salesLevel, "isBind": flags.isBind, "isTort": flags.isTort, "embargoedPlatform": flags.embargoedPlatform, "tortWord": flags.tortWord, "priceArea": flags.priceArea, "spuCategory": flags.spuCategory, "brandName": flags.brandName, "brandId": flags.brandId, "publishOper": flags.publishOper, "publishOperId": flags.publishOperId, "publishStatus": flags.publishStatus, "onlineStatus": flags.onlineStatus, "publishItemid": flags.publishItemid, "publishResponse": flags.publishResponse, "updateBy": flags.updateBy, "updateTime": flags.updateTime, "shipTo": flags.shipTo, "isOffline": flags.isOffline, "srcCurrency": flags.srcCurrency, "newCurrency": flags.newCurrency, "profitRateMin": flags.profitRateMin, "isCountry": flags.isCountry, "groupName": flags.groupName, "weight": flags.weight, "freightid": flags.freightid, "status2": flags.status2, "smtCategoryId": flags.smtCategoryId, "skuList": toArray(flags.skuList, 'object'), "attributesKeyPropsList": toArray(flags.attributesKeyPropsList, 'array'), "packagelength": flags.packagelength, "packagewidth": flags.packagewidth, "packageheight": flags.packageheight, "packagevolume": flags.packagevolume, "productunit": flags.productunit, "packagetype": flags.packagetype, "lotnum": flags.lotnum, "definitonprops": flags.definitonprops, "groups": flags.groups, "groupList": toArray(flags.groupList, 'string'), "ispacksell": flags.ispacksell, "baseunit": flags.baseunit, "addunit": flags.addunit, "addweight": flags.addweight, "isbulk": flags.isbulk, "bulkorder": flags.bulkorder, "bulkdiscount": flags.bulkdiscount, "isCountryMap": toArray(flags.isCountryMap, 'object') })
    this.output(data)
  }
}
