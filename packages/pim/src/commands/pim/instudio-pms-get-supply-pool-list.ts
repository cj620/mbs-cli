// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSupplyPoolList extends MBSCommand {
  static description = '供应商开发池列表：供应商开发池列表'

  static flags = {
    searchType: Flags.string({ description: '搜索类型 商品名称：product_name_ch 新品编码：new_product_code' }),
    keyword: Flags.string({ description: '关键词' }),
    keywordList: Flags.string({ description: '关键词列表（字段名推断,语义待核实） (comma-separated)' }),
    keyword2: Flags.string({ description: '关键词2' }),
    category: Flags.string({ description: '分类' }),
    priceMin: Flags.integer({ description: '最低价' }),
    priceMax: Flags.integer({ description: '最高价' }),
    createBy: Flags.string({ description: '创建人' }),
    createTime1: Flags.string({ description: '创建时间' }),
    createTime2: Flags.string({ description: '创建时间' }),
    status: Flags.integer({ description: '状态 0草稿,1待审核,2审核通过,3审核不通过,4已开发,已停产' }),
    isRepeat: Flags.integer({ description: '是否重复 1是 0否' }),
    isTort: Flags.integer({ description: '是否侵权 1是 0否' }),
    orderBy: Flags.integer({ description: '排序' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSupplyPoolList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/supplyDevelopController/getSupplyPoolList', { "searchType": flags.searchType, "keyword": flags.keyword, "keywordList": toArray(flags.keywordList, 'string'), "keyword2": flags.keyword2, "category": flags.category, "priceMin": flags.priceMin, "priceMax": flags.priceMax, "createBy": flags.createBy, "createTime1": flags.createTime1, "createTime2": flags.createTime2, "status": flags.status, "isRepeat": flags.isRepeat, "isTort": flags.isTort, "orderBy": flags.orderBy })
    this.output(data)
  }
}
