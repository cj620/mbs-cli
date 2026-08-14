// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportTkSinglePublishList extends MBSCommand {
  static description = '导出接口：导出接口'

  static flags = {
    operId: Flags.string({ description: '操作ID（字段名推断,语义待核实）' }),
    operIdName: Flags.string({ description: '操作ID名称（字段名推断,语义待核实）' }),
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    mainShop: Flags.string({ description: '主店铺（字段名推断,语义待核实）' }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    listId: Flags.string({ description: '列表ID（字段名推断,语义待核实）' }),
    spuSaleAttributeList: Flags.string({ description: 'SPU销售属性列表（字段名推断,语义待核实） (comma-separated)' }),
    spuProductAttributeList: Flags.string({ description: 'SPU商品属性列表（字段名推断,语义待核实） (comma-separated)' }),
    shopsSplice: Flags.string({ description: '店铺列表Splice（字段名推断,语义待核实）' }),
    globalShop: Flags.string({ description: '全局店铺（字段名推断,语义待核实）' }),
    publishStatus: Flags.integer({ description: '刊登状态（字段名推断,语义待核实）' }),
    listIdList: Flags.string({ description: '列表ID列表（字段名推断,语义待核实） (comma-separated)' }),
    createdByName: Flags.string({ description: '创建人名称（字段名推断,语义待核实）' }),
    starttime: Flags.string({ description: 'Starttime（字段名推断,语义待核实）' }),
    endtime: Flags.string({ description: 'Endtime（字段名推断,语义待核实）' }),
    spuList: Flags.string({ description: 'SPU列表（字段名推断,语义待核实） (comma-separated)' }),
    ids: Flags.string({ description: 'ID列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportTkSinglePublishList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/tiktokSinglepublishGlobalController/exportTkSinglePublishList', { "operId": flags.operId, "operIdName": flags.operIdName, "erpSpu": flags.erpSpu, "mainShop": flags.mainShop, "categoryId": flags.categoryId, "listId": flags.listId, "spuSaleAttributeList": toArray(flags.spuSaleAttributeList, 'object'), "spuProductAttributeList": toArray(flags.spuProductAttributeList, 'object'), "shopsSplice": flags.shopsSplice, "globalShop": flags.globalShop, "publishStatus": flags.publishStatus, "listIdList": toArray(flags.listIdList, 'string'), "createdByName": flags.createdByName, "starttime": flags.starttime, "endtime": flags.endtime, "spuList": toArray(flags.spuList, 'string'), "ids": toArray(flags.ids, 'integer') })
    this.output(data)
  }
}
