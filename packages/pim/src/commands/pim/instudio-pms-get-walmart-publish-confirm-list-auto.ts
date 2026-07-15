// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetWalmartPublishConfirmListAuto extends MBSCommand {
  static description = '获取walmart刊登任务列表：获取walmart刊登任务列表'

  static flags = {
    teamManagerList: Flags.string({ description: '团队管理列表（字段名推断,语义待核实） (comma-separated)' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    shopId: Flags.string({ description: '店铺ID（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    categoryName: Flags.string({ description: '类目名称（字段名推断,语义待核实）' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    shopManagerList: Flags.string({ description: '店铺管理列表（字段名推断,语义待核实） (comma-separated)' }),
    spuList: Flags.string({ description: 'SPU列表（字段名推断,语义待核实） (comma-separated)' }),
    status: Flags.integer({ description: '刊登状态' }),
    createBy: Flags.string({ description: '创建人' }),
    startDate: Flags.string({ description: '创建时间查询的开始时间' }),
    endDate: Flags.string({ description: '创建时间查询的结束时间' }),
    submitDateStart: Flags.string({ description: '提交日期开始（字段名推断,语义待核实）' }),
    submitDateEnd: Flags.string({ description: '提交日期结束（字段名推断,语义待核实）' }),
    finishDateStart: Flags.string({ description: '完成日期开始（字段名推断,语义待核实）' }),
    finishDateEnd: Flags.string({ description: '完成日期结束（字段名推断,语义待核实）' }),
    publishType: Flags.integer({ description: '刊登状态' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetWalmartPublishConfirmListAuto)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/walmart/auto/getWalmartPublishConfirmList', { "teamManagerList": toArray(flags.teamManagerList, 'string'), "site": flags.site, "shopName": flags.shopName, "shopId": flags.shopId, "spu": flags.spu, "categoryName": flags.categoryName, "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "shopManagerList": toArray(flags.shopManagerList, 'string'), "spuList": toArray(flags.spuList, 'string'), "status": flags.status, "createBy": flags.createBy, "startDate": flags.startDate, "endDate": flags.endDate, "submitDateStart": flags.submitDateStart, "submitDateEnd": flags.submitDateEnd, "finishDateStart": flags.finishDateStart, "finishDateEnd": flags.finishDateEnd, "publishType": flags.publishType })
    this.output(data)
  }
}
