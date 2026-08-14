// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryTypeByHscode extends MBSCommand {
  static description = '获取海关监管属性：获取海关监管属性'

  static flags = {
    name: Flags.string({ description: '名称（字段名推断,语义待核实）' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    vtype: Flags.string({ description: 'Vtype（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    categoryid: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）' }),
    attributeName: Flags.string({ description: '属性名称（字段名推断,语义待核实）' }),
    searchParam: Flags.string({ description: '搜索参数（字段名推断,语义待核实）' }),
    title: Flags.string({ description: '标题（字段名推断,语义待核实）' }),
    shopname: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    shopId: Flags.string({ description: '店铺ID（字段名推断,语义待核实）' }),
    empName: Flags.string({ description: 'EMP名称（字段名推断,语义待核实）' }),
    shipto: Flags.string({ description: 'Shipto（字段名推断,语义待核实）' }),
    idList: Flags.string({ description: 'ID列表（字段名推断,语义待核实） (comma-separated)' }),
    skuList: Flags.string({ description: 'SKU列表（字段名推断,语义待核实） (comma-separated)' }),
    commonConfigId: Flags.string({ description: '通用配置ID（字段名推断,语义待核实）' }),
    smtFreightTempleConfigurationListTotal: Flags.string({ description: '速卖通运费Temple配置列表总数（字段名推断,语义待核实） (comma-separated)' }),
    moneyRateUSD: Flags.string({ description: '金额比率美元（字段名推断,语义待核实）' }),
    skuMaxWeight: Flags.string({ description: 'SKU最大重量（字段名推断,语义待核实）' }),
    picStyle: Flags.string({ description: '图片样式（字段名推断,语义待核实）' }),
    imageUrl: Flags.string({ description: '图片URL（字段名推断,语义待核实）' }),
    imageUrlLocal: Flags.string({ description: '图片URL本地（字段名推断,语义待核实）' }),
    subject: Flags.string({ description: '科目（字段名推断,语义待核实）' }),
    locale: Flags.string({ description: '地区语言（字段名推断,语义待核实）' }),
    forecastMode: Flags.string({ description: 'Forecast模式（字段名推断,语义待核实）' }),
    isFilterByPermission: Flags.string({ description: '是否过滤人权限（字段名推断,语义待核实）' }),
    cycleStart: Flags.string({ description: '期数开始（字段名推断,语义待核实）' }),
    cycleEnd: Flags.string({ description: '期数结束（字段名推断,语义待核实）' }),
    except: Flags.string({ description: 'Except（字段名推断,语义待核实）' }),
    productId: Flags.string({ description: '商品ID（字段名推断,语义待核实）' }),
    srcShop: Flags.string({ description: 'SRC店铺（字段名推断,语义待核实）' }),
    targetShop: Flags.string({ description: '目标店铺（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    oper: Flags.string({ description: '操作（字段名推断,语义待核实）' }),
    operId: Flags.string({ description: '操作ID（字段名推断,语义待核实）' }),
    targetShopList: Flags.string({ description: '目标店铺列表（字段名推断,语义待核实） (comma-separated)' }),
    platform: Flags.string({ description: '平台（字段名推断,语义待核实）' }),
    url: Flags.string({ description: 'URL（字段名推断,语义待核实）' }),
    keyword: Flags.string({ description: '关键词（字段名推断,语义待核实）' }),
    hsCode: Flags.string({ description: 'HS编码（字段名推断,语义待核实）' }),
    itemSpecifics: Flags.string({ description: '条目Specifics（字段名推断,语义待核实）' }),
    selectedValueJson: Flags.string({ description: 'Selected值JSON（字段名推断,语义待核实）' }),
    isJitb: Flags.integer({ description: '是否JITB（字段名推断,语义待核实）' }),
    itemId: Flags.string({ description: '条目ID（字段名推断,语义待核实）' }),
    languageList: Flags.string({ description: '语言列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryTypeByHscode)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/smtSinglepublishController/queryTypeByHscode', { "name": flags.name, "site": flags.site, "vtype": flags.vtype, "spu": flags.spu, "categoryid": flags.categoryid, "id": flags.id, "attributeName": flags.attributeName, "searchParam": flags.searchParam, "title": flags.title, "shopname": flags.shopname, "shopId": flags.shopId, "empName": flags.empName, "shipto": flags.shipto, "idList": toArray(flags.idList, 'string'), "skuList": toArray(flags.skuList, 'string'), "commonConfigId": flags.commonConfigId, "smtFreightTempleConfigurationListTotal": toArray(flags.smtFreightTempleConfigurationListTotal, 'object'), "moneyRateUSD": flags.moneyRateUSD, "skuMaxWeight": flags.skuMaxWeight, "picStyle": flags.picStyle, "imageUrl": flags.imageUrl, "imageUrlLocal": flags.imageUrlLocal, "subject": flags.subject, "locale": flags.locale, "forecastMode": flags.forecastMode, "isFilterByPermission": flags.isFilterByPermission, "cycleStart": flags.cycleStart, "cycleEnd": flags.cycleEnd, "except": flags.except, "productId": flags.productId, "srcShop": flags.srcShop, "targetShop": flags.targetShop, "erpSpu": flags.erpSpu, "oper": flags.oper, "operId": flags.operId, "targetShopList": toArray(flags.targetShopList, 'string'), "platform": flags.platform, "url": flags.url, "keyword": flags.keyword, "hsCode": flags.hsCode, "item_specifics": flags.itemSpecifics, "selectedValueJson": flags.selectedValueJson, "isJitb": flags.isJitb, "itemId": flags.itemId, "languageList": toArray(flags.languageList, 'string') })
    this.output(data)
  }
}
