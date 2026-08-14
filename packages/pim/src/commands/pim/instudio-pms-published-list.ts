// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsPublishedList extends MBSCommand {
  static description = 'Published列表：Published列表(源码无注释,按方法名推断)'

  static flags = {
    projectId: Flags.integer({ description: '项目ID（字段名推断,语义待核实）' }),
    list: Flags.string({ description: '列表（字段名推断,语义待核实） (comma-separated)' }),
    userid: Flags.string({ description: 'Userid（字段名推断,语义待核实）' }),
    skus: Flags.string({ description: 'SKU列表（字段名推断,语义待核实）' }),
    publishStatus: Flags.string({ description: '刊登状态（字段名推断,语义待核实）' }),
    shopId: Flags.string({ description: '店铺ID（字段名推断,语义待核实）' }),
    requestBy: Flags.string({ description: '请求人（字段名推断,语义待核实）' }),
    currPage: Flags.integer({ description: 'CURR页码（字段名推断,语义待核实）' }),
    skuList: Flags.string({ description: 'SKU列表（字段名推断,语义待核实） (comma-separated)' }),
    endSubmitDate: Flags.string({ description: '结束提交日期（字段名推断,语义待核实）' }),
    startSubmitDate: Flags.string({ description: '开始提交日期（字段名推断,语义待核实）' }),
    shopIds: Flags.string({ description: '店铺ID列表（字段名推断,语义待核实） (comma-separated)' }),
    shopManagerList: Flags.string({ description: '店铺管理列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsPublishedList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/publishedProduct/publishedList', { "projectId": flags.projectId, "list": toArray(flags.list, 'object'), "userid": flags.userid, "skus": flags.skus, "publishStatus": flags.publishStatus, "shopId": flags.shopId, "requestBy": flags.requestBy, "currPage": flags.currPage, "skuList": toArray(flags.skuList, 'string'), "endSubmitDate": flags.endSubmitDate, "startSubmitDate": flags.startSubmitDate, "shopIds": toArray(flags.shopIds, 'string'), "shopManagerList": toArray(flags.shopManagerList, 'string') })
    this.output(data)
  }
}
