// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetShopByPtHavePublished extends MBSCommand {
  static description = '查找店铺：查找店铺'

  static flags = {
    operId: Flags.string({ description: '操作ID（字段名推断,语义待核实）' }),
    operIdName: Flags.string({ description: '操作ID名称（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    spuList: Flags.string({ description: 'SPU列表（字段名推断,语义待核实） (comma-separated)' }),
    mainShop: Flags.string({ description: '主店铺（字段名推断,语义待核实）' }),
    firstCategory: Flags.string({ description: '首个类目（字段名推断,语义待核实）' }),
    categoryIdList: Flags.string({ description: '类目ID列表（字段名推断,语义待核实） (comma-separated)' }),
    sites: Flags.string({ description: 'Sites（字段名推断,语义待核实） (comma-separated)' }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    listId: Flags.string({ description: '列表ID（字段名推断,语义待核实）' }),
    spuSaleAttributeList: Flags.string({ description: 'SPU销售属性列表（字段名推断,语义待核实） (comma-separated)' }),
    spuProductAttributeList: Flags.string({ description: 'SPU商品属性列表（字段名推断,语义待核实） (comma-separated)' }),
    shopsSplice: Flags.string({ description: '店铺列表Splice（字段名推断,语义待核实）' }),
    teamEmployeeNameList: Flags.string({ description: '团队员工名称列表（字段名推断,语义待核实） (comma-separated)' }),
    globalShop: Flags.string({ description: '全局店铺（字段名推断,语义待核实）' }),
    publishStatus: Flags.integer({ description: '刊登状态（字段名推断,语义待核实）' }),
    listIdList: Flags.string({ description: '列表ID列表（字段名推断,语义待核实） (comma-separated)' }),
    createdByName: Flags.string({ description: '创建人名称（字段名推断,语义待核实）' }),
    starttime: Flags.string({ description: '创建时间开始时间' }),
    endtime: Flags.string({ description: '创建时间结束时间' }),
    publishStarttime: Flags.string({ description: '刊登时间' }),
    publishEndtime: Flags.string({ description: '刊登Endtime（字段名推断,语义待核实）' }),
    publishType: Flags.integer({ description: '0 批量复制 1精品手刊' }),
    infringed: Flags.boolean({ description: '筛选条件：是否侵权 false-否，true-是', allowNo: true }),
    targetMainShops: Flags.string({ description: '目标主店铺列表（字段名推断,语义待核实） (comma-separated)' }),
    skuGlobalList: Flags.string({ description: 'SKU全局列表（字段名推断,语义待核实） (comma-separated)' }),
    usdMoneyRate: Flags.string({ description: '美元金额比率（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetShopByPtHavePublished)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/tiktokSinglepublishGlobalController/getShopByPtHavePublished', { "operId": flags.operId, "operIdName": flags.operIdName, "spu": flags.spu, "erpSpu": flags.erpSpu, "spuList": toArray(flags.spuList, 'string'), "mainShop": flags.mainShop, "firstCategory": flags.firstCategory, "categoryIdList": toArray(flags.categoryIdList, 'string'), "sites": toArray(flags.sites, 'string'), "categoryId": flags.categoryId, "listId": flags.listId, "spuSaleAttributeList": toArray(flags.spuSaleAttributeList, 'object'), "spuProductAttributeList": toArray(flags.spuProductAttributeList, 'object'), "shopsSplice": flags.shopsSplice, "teamEmployeeNameList": toArray(flags.teamEmployeeNameList, 'string'), "globalShop": flags.globalShop, "publishStatus": flags.publishStatus, "listIdList": toArray(flags.listIdList, 'string'), "createdByName": flags.createdByName, "starttime": flags.starttime, "endtime": flags.endtime, "publishStarttime": flags.publishStarttime, "publishEndtime": flags.publishEndtime, "publishType": flags.publishType, "infringed": flags.infringed, "targetMainShops": toArray(flags.targetMainShops, 'string'), "skuGlobalList": toArray(flags.skuGlobalList, 'object'), "usdMoneyRate": flags.usdMoneyRate })
    this.output(data)
  }
}
