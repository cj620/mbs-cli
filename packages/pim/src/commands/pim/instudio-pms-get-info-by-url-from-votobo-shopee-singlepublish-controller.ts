// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetInfoByUrlFromVotoboShopeeSinglepublishController extends MBSCommand {
  static description = '根据链接解析出所需数据：根据链接解析出所需数据'

  static flags = {
    parentCategoryId: Flags.string({ description: '父级类目ID（字段名推断,语义待核实）' }),
    categoryLevel: Flags.integer({ description: '类目级别（字段名推断,语义待核实）' }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    shopname: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    merchantid: Flags.string({ description: 'Merchantid（字段名推断,语义待核实）' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    oper: Flags.string({ description: '操作（字段名推断,语义待核实）' }),
    operId: Flags.string({ description: '操作ID（字段名推断,语义待核实）' }),
    listId: Flags.string({ description: '列表ID（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    starttime: Flags.string({ description: 'Starttime（字段名推断,语义待核实）' }),
    endtime: Flags.string({ description: 'Endtime（字段名推断,语义待核实）' }),
    shopsSplice: Flags.string({ description: '店铺列表Splice（字段名推断,语义待核实）' }),
    publishstatus: Flags.integer({ description: 'Publishstatus（字段名推断,语义待核实）' }),
    createBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    pt: Flags.string({ description: 'PT（字段名推断,语义待核实）' }),
    shopeeUrl: Flags.string({ description: 'ShopeeURL（字段名推断,语义待核实）' }),
    listIdList: Flags.string({ description: '列表ID列表（字段名推断,语义待核实） (comma-separated)' }),
    shopCopys: Flags.string({ description: '复制成功目标店铺 (comma-separated)' }),
    listCopys: Flags.string({ description: '复制成功源list (comma-separated)' }),
    itemId: Flags.string({ description: '条目ID（字段名推断,语义待核实）' }),
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    isRefresh: Flags.integer({ description: '是否刷新（字段名推断,语义待核实）' }),
    title: Flags.string({ description: '标题（字段名推断,语义待核实）' }),
    videoStatusStr: Flags.string({ description: '视频状态字符串（字段名推断,语义待核实）' }),
    picStyle: Flags.string({ description: '图片样式（字段名推断,语义待核实）' }),
    price5: Flags.integer({ description: '价格5（字段名推断,语义待核实）' }),
    groupCompanyId: Flags.integer({ description: '分组公司ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetInfoByUrlFromVotoboShopeeSinglepublishController)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/shopeeSinglepublishController/getInfoByUrlFromVotobo', { "parentCategoryId": flags.parentCategoryId, "categoryLevel": flags.categoryLevel, "categoryId": flags.categoryId, "shopname": flags.shopname, "merchantid": flags.merchantid, "site": flags.site, "erpSpu": flags.erpSpu, "oper": flags.oper, "operId": flags.operId, "listId": flags.listId, "startIndex": flags.startIndex, "pageSize": flags.pageSize, "currentPage": flags.currentPage, "starttime": flags.starttime, "endtime": flags.endtime, "shopsSplice": flags.shopsSplice, "publishstatus": flags.publishstatus, "createBy": flags.createBy, "pt": flags.pt, "shopeeUrl": flags.shopeeUrl, "listIdList": toArray(flags.listIdList, 'string'), "shopCopys": toArray(flags.shopCopys, 'string'), "listCopys": toArray(flags.listCopys, 'string'), "itemId": flags.itemId, "id": flags.id, "isRefresh": flags.isRefresh, "title": flags.title, "videoStatusStr": flags.videoStatusStr, "picStyle": flags.picStyle, "price5": flags.price5, "groupCompanyId": flags.groupCompanyId })
    this.output(data)
  }
}
