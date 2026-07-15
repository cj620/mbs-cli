// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindCategoryBySearchLazadaSinglepublishInfoController extends MBSCommand {
  static description = '根据分类名字模糊搜索分类：根据分类名字模糊搜索分类'

  static flags = {
    name: Flags.string({ description: '名称（字段名推断,语义待核实）' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    siteList: Flags.string({ description: '站点列表（字段名推断,语义待核实） (comma-separated)' }),
    vtype: Flags.string({ description: 'Vtype（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    categoryid: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    idList: Flags.string({ description: 'ID列表（字段名推断,语义待核实） (comma-separated)' }),
    attributeName: Flags.string({ description: '属性名称（字段名推断,语义待核实）' }),
    searchParam: Flags.string({ description: '搜索参数（字段名推断,语义待核实）' }),
    title: Flags.string({ description: '标题（字段名推断,语义待核实）' }),
    shopname: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    shopList: Flags.string({ description: '店铺列表（字段名推断,语义待核实） (comma-separated)' }),
    empName: Flags.string({ description: 'EMP名称（字段名推断,语义待核实）' }),
    itemId: Flags.string({ description: '条目ID（字段名推断,语义待核实）' }),
    oper: Flags.string({ description: '操作（字段名推断,语义待核实）' }),
    isRefresh: Flags.integer({ description: '是否刷新（字段名推断,语义待核实）' }),
    createby: Flags.string({ description: 'Createby（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    listId: Flags.integer({ description: '列表ID（字段名推断,语义待核实）' }),
    ids: Flags.string({ description: 'ID列表（字段名推断,语义待核实） (comma-separated)' }),
    isCompulsory: Flags.integer({ description: '是否Compulsory（字段名推断,语义待核实）' }),
    keywords: Flags.string({ description: 'Keywords（字段名推断,语义待核实） (comma-separated)' }),
    total: Flags.integer({ description: '总数（字段名推断,语义待核实）' }),
    calcPriceFlag: Flags.integer({ description: '是否系统算价 0否 1是' }),
    isTranslate: Flags.integer({ description: '是否翻译（字段名推断,语义待核实）' }),
    copyId: Flags.integer({ description: '复制ID（字段名推断,语义待核实）' }),
    timeOccur: Flags.string({ description: '时间Occur（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindCategoryBySearchLazadaSinglepublishInfoController)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/lazadaSinglepublishInfoController/findCategoryBySearch', { "name": flags.name, "site": flags.site, "siteList": toArray(flags.siteList, 'string'), "vtype": flags.vtype, "spu": flags.spu, "categoryid": flags.categoryid, "id": flags.id, "idList": toArray(flags.idList, 'integer'), "attributeName": flags.attributeName, "searchParam": flags.searchParam, "title": flags.title, "shopname": flags.shopname, "shopList": toArray(flags.shopList, 'string'), "empName": flags.empName, "itemId": flags.itemId, "oper": flags.oper, "isRefresh": flags.isRefresh, "createby": flags.createby, "erpSpu": flags.erpSpu, "listId": flags.listId, "ids": toArray(flags.ids, 'integer'), "isCompulsory": flags.isCompulsory, "keywords": toArray(flags.keywords, 'string'), "total": flags.total, "calcPriceFlag": flags.calcPriceFlag, "isTranslate": flags.isTranslate, "copyId": flags.copyId, "timeOccur": flags.timeOccur })
    this.output(data)
  }
}
