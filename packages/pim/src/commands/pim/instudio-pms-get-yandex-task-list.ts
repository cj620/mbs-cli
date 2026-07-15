// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetYandexTaskList extends MBSCommand {
  static description = '获取提交刊登任务列表：获取提交刊登任务列表'

  static flags = {
    spu: Flags.string({ description: 'spu' }),
    shopId: Flags.string({ description: '店铺' }),
    shopName: Flags.string({ description: '店铺名称' }),
    categoryId: Flags.integer({ description: '类目ID' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    shopManagerList: Flags.string({ description: '店铺管理列表（字段名推断,语义待核实） (comma-separated)' }),
    spuList: Flags.string({ description: 'SPU列表（字段名推断,语义待核实） (comma-separated)' }),
    publishStatus: Flags.integer({ description: '刊登状态' }),
    createBy: Flags.string({ description: '创建人' }),
    startDate: Flags.string({ description: '创建时间查询的开始时间' }),
    endDate: Flags.string({ description: '创建时间查询的结束时间' }),
    shopNameList: Flags.string({ description: '店铺名称列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetYandexTaskList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/yandexAutoPublish/getYandexTaskList', { "spu": flags.spu, "shopId": flags.shopId, "shopName": flags.shopName, "categoryId": flags.categoryId, "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "shopManagerList": toArray(flags.shopManagerList, 'string'), "spuList": toArray(flags.spuList, 'string'), "publishStatus": flags.publishStatus, "createBy": flags.createBy, "startDate": flags.startDate, "endDate": flags.endDate, "shopNameList": toArray(flags.shopNameList, 'string') })
    this.output(data)
  }
}
