// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetCategoryProps extends MBSCommand {
  static description = '查询类目Props：查询类目Props(源码无注释,按方法名推断)'

  static flags = {
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    listId: Flags.string({ description: '列表ID（字段名推断,语义待核实）' }),
    createBy: Flags.integer({ description: '创建人（字段名推断,语义待核实）' }),
    createByName: Flags.string({ description: '创建人名称（字段名推断,语义待核实）' }),
    shopsSplice: Flags.string({ description: '店铺列表Splice（字段名推断,语义待核实）' }),
    publishStatus: Flags.integer({ description: '刊登状态（字段名推断,语义待核实）' }),
    createTimeStart: Flags.string({ description: '创建时间开始（字段名推断,语义待核实）' }),
    createTimeEnd: Flags.string({ description: '创建时间结束（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    listIdList: Flags.string({ description: '列表ID列表（字段名推断,语义待核实） (comma-separated)' }),
    erpSpuList: Flags.string({ description: 'ERPSPU列表（字段名推断,语义待核实） (comma-separated)' }),
    autoSet: Flags.boolean({ description: '自动SET（字段名推断,语义待核实）', allowNo: true }),
    erpSku: Flags.string({ description: 'ERPSKU（字段名推断,语义待核实）' }),
    profitRate: Flags.string({ description: '利润比率（字段名推断,语义待核实）' }),
    targetShop: Flags.string({ description: '目标店铺（字段名推断,语义待核实）' }),
    skuList: Flags.string({ description: 'SKU列表（字段名推断,语义待核实） (comma-separated)' }),
    copyId: Flags.string({ description: '复制ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetCategoryProps)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/aliexpressChoiceSinglePublishController/getCategoryProps', { "categoryId": flags.categoryId, "shopName": flags.shopName, "erpSpu": flags.erpSpu, "listId": flags.listId, "createBy": flags.createBy, "createByName": flags.createByName, "shopsSplice": flags.shopsSplice, "publishStatus": flags.publishStatus, "createTimeStart": flags.createTimeStart, "createTimeEnd": flags.createTimeEnd, "pageSize": flags.pageSize, "currentPage": flags.currentPage, "startIndex": flags.startIndex, "listIdList": toArray(flags.listIdList, 'string'), "erpSpuList": toArray(flags.erpSpuList, 'string'), "autoSet": flags.autoSet, "erpSku": flags.erpSku, "profitRate": flags.profitRate, "targetShop": flags.targetShop, "skuList": toArray(flags.skuList, 'string'), "copyId": flags.copyId })
    this.output(data)
  }
}
